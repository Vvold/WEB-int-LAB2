// tests/unit/SignUp.spec.ts
import { shallowMount, VueWrapper } from '@vue/test-utils';
import { SexValue } from "../../src/interfaces/user.interface";
import RegistrationComponent from "../../src/components/RegistrationComponent.vue";

describe('SignUp.vue', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(RegistrationComponent, {
      global: {
        mocks: {
          $store: {
            commit: jest.fn(),
          },
          $router: {
            push: jest.fn()
          }
        }
      }
    });
  });

  it('should create', () => {
    expect(wrapper.find('h3').text()).toBe('Sign Up');
  });

  it('has a form with the required fields', () => {
    expect(wrapper.find('#firstName').exists()).toBe(true);
    expect(wrapper.find('#lastName').exists()).toBe(true);
    expect(wrapper.find('#email').exists()).toBe(true);
    expect(wrapper.find('#password').exists()).toBe(true);
    expect(wrapper.find('#sex').exists()).toBe(true);
    expect(wrapper.find('#birth_date').exists()).toBe(true);
  });

  it('should update user data when input changes', async () => {
    const firstNameInput = wrapper.find('#firstName');
    await firstNameInput.setValue('John');
    expect((wrapper.vm as any).user.firstName).toBe('John');

    const lastNameInput = wrapper.find('#lastName');
    await lastNameInput.setValue('Doe');
    expect((wrapper.vm as any).user.lastName).toBe('Doe');

    const emailInput = wrapper.find('#email');
    await emailInput.setValue('john.doe@example.com');
    expect((wrapper.vm as any).user.email).toBe('john.doe@example.com');

    const passwordInput = wrapper.find('#password');
    await passwordInput.setValue('password123');
    expect((wrapper.vm as any).user.password).toBe('password123');

    const sexSelect = wrapper.find('#sex');
    await sexSelect.setValue(SexValue.FEMALE);
    expect((wrapper.vm as any).user.sex).toBe(SexValue.FEMALE);

    const birthDateInput = wrapper.find('#birth_date');
    await birthDateInput.setValue('1990-01-01');
    expect((wrapper.vm as any).user.birth).toBe('1990-01-01');
  });

  it('should call signUp method on form submit', async () => {
    const signUpMock = jest.spyOn(wrapper.vm as any, 'signUp').mockImplementation(() => {});

    await wrapper.find('form').trigger('submit.prevent');
    expect(signUpMock).toHaveBeenCalled();
  });

  it('should save user data to localStorage on signUp', async () => {
    const firstNameInput = wrapper.find('#firstName');
    await firstNameInput.setValue('John');
    const lastNameInput = wrapper.find('#lastName');
    await lastNameInput.setValue('Doe');
    const emailInput = wrapper.find('#email');
    await emailInput.setValue('john.doe@example.com');
    const passwordInput = wrapper.find('#password');
    await passwordInput.setValue('password123');
    const sexSelect = wrapper.find('#sex');
    await sexSelect.setValue(SexValue.MALE);
    const birthDateInput = wrapper.find('#birth_date');
    await birthDateInput.setValue('1990-01-01');

    await wrapper.find('form').trigger('submit.prevent');

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    expect(user.firstName).toBe('John');
    expect(user.lastName).toBe('Doe');
    expect(user.email).toBe('john.doe@example.com');
    expect(user.sex).toBe(SexValue.MALE);
    expect(user.birth).toBe('1990-01-01');

    const loginInfo = JSON.parse(localStorage.getItem('loginInfo') || '{}');
    expect(loginInfo.email).toBe('john.doe@example.com');
    expect(loginInfo.password).toBe('password123');
  });
});
