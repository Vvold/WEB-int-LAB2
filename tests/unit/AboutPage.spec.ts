import { RouterLinkStub, shallowMount, VueWrapper } from '@vue/test-utils';
import About from "@/components/AboutComponent.vue";

describe('AboutComponent.vue', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(About, {
      global: {
        mocks: {
          $router: {
            push: jest.fn(),
          },
        },
        components: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  });

  it('should render the navigation links correctly', () => {
    const navLinks = wrapper.findAllComponents(RouterLinkStub);
    expect(navLinks).toHaveLength(2);

    expect(navLinks[0].props('to')).toBe('/main');
    expect(navLinks[1].props('to')).toBe('/profile');
  });

  it('should render the app logo and title correctly', () => {
    const logo = wrapper.find('.logo');
    expect(logo.exists()).toBe(true);
    expect(logo.find('svg').exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Blog APP');
  });

  it('should render the about app card correctly', () => {
    const aboutCard = wrapper.find('.about-app-card');
    expect(aboutCard.exists()).toBe(true);
    expect(aboutCard.find('.card-header').text()).toBe('ABOUT APP');
  });

  it('should render the description of the app correctly', () => {
    const appDescription = wrapper.find('.card-body');
    expect(appDescription.exists()).toBe(true);
    expect(appDescription.text()).toContain('Blog App');
    expect(appDescription.text()).toContain('express their opinions');
    expect(appDescription.text()).toContain('add new post');
    expect(appDescription.text()).toContain('remove and edit your own posts');
    expect(appDescription.text()).toContain('comments posts');
  });
});
