import { shallowMount, VueWrapper } from '@vue/test-utils';
import LoginComponent from '@/components/LoginComponent.vue';

describe('LoginComponent.vue', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(LoginComponent, {
      global: {
        mocks: {
          $router: {
            push: jest.fn(),
            currentRoute: { value: { path: '/' } }
          },
        },
      },
    });
  });

  it('renders login form', () => {
    expect(wrapper.find('h3').text()).toBe('Login');
  });

  it('has a form with the required fields', () => {
    expect(wrapper.find('#email').exists()).toBe(true);
    expect(wrapper.find('#password').exists()).toBe(true);
  });

  it('should update email and password data when input changes', async () => {
    const emailInput = wrapper.find('#email');
    await emailInput.setValue('john.doe@example.com');
    expect(wrapper.vm.email).toBe('john.doe@example.com');

    const passwordInput = wrapper.find('#password');
    await passwordInput.setValue('password123');
    expect(wrapper.vm.password).toBe('password123');
  });

  it('should call login method on form submit', async () => {
    const loginMock = jest.fn();
    wrapper.vm.login = loginMock;

    await wrapper.find('form').trigger('submit.prevent');
    expect(loginMock).toHaveBeenCalled();
  });

  it('should save login info to localStorage on login', async () => {
    const emailInput = wrapper.find('#email');
    await emailInput.setValue('john.doe@example.com');
    const passwordInput = wrapper.find('#password');
    await passwordInput.setValue('password123');

    await wrapper.find('form').trigger('submit.prevent');

    const loginInfo = JSON.parse(localStorage.getItem('loginInfo') || '{}');
    expect(loginInfo.email).toBe('john.doe@example.com');
    expect(loginInfo.password).toBe('password123');
  });

  it('should navigate to main page after login', async () => {
    const saveLoginInfoMock = jest.fn();
    wrapper.vm.saveLoginInfo = saveLoginInfoMock;

    await wrapper.find('#email').setValue('john.doe@example.com');
    await wrapper.find('#password').setValue('password123');
    await wrapper.find('form').trigger('submit.prevent');

    expect(saveLoginInfoMock).toHaveBeenCalled();
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/main');
  });

  it('should handle login errors', async () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(wrapper.vm as any, 'saveLoginInfo').mockRejectedValueOnce(new Error('Test Error'));

    await wrapper.find('form').trigger('submit.prevent');

    expect(consoleErrorMock).toHaveBeenCalledWith('Error during login:', expect.any(Error));

    consoleErrorMock.mockRestore();
  });

  it('should have a working saveLoginInfo method', async () => {
    const saveLoginInfoMock = jest.spyOn(wrapper.vm as any, 'saveLoginInfo');
    await (wrapper.vm as any).saveLoginInfo({ email: 'test@example.com', password: '123456' });

    expect(saveLoginInfoMock).toHaveBeenCalledWith({ email: 'test@example.com', password: '123456' });
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo') || '{}');
    expect(loginInfo.email).toBe('test@example.com');
    expect(loginInfo.password).toBe('123456');
  });
});
