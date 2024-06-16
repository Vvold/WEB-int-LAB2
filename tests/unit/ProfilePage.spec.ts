import { shallowMount } from '@vue/test-utils';
import ProfileComponent from '@/components/ProfileComponent.vue';

describe('ProfileComponent', () => {

  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    sex: 'Male',
    birth: '1990-01-01'
  };
  localStorage.setItem('user', JSON.stringify(userData));

  it('renders correctly', () => {
    const wrapper = shallowMount(ProfileComponent);
    expect(wrapper.exists()).toBe(true);
  });

  it('has a "Back to Posts" button', () => {
    const wrapper = shallowMount(ProfileComponent);
    const backButton = wrapper.find('.btn-outline-secondary');
    expect(backButton.text()).toBe('Back to Posts');
  });

  it('calls logout method when "Logout" button is clicked', async () => {

    const localStorageMock = {
      getItem: jest.fn(),
      clear: jest.fn()
    };

    const wrapper = shallowMount(ProfileComponent, {
      global: {
        mocks: {
          $router: {
            push: jest.fn()
          },
          localStorage: localStorageMock,
        }
      }
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.vm.user).toEqual(userData);

    const logoutButton = wrapper.findAll('.btn-outline-secondary')[1];
    await logoutButton.trigger('click');

    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/login');
  });
});
