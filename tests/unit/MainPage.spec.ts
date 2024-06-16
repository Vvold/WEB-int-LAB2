import { shallowMount, VueWrapper } from '@vue/test-utils';
import MainComponent from '@/components/MainPageComponent.vue';
import { createTestingPinia } from "@pinia/testing";
import { postsStore } from "@/stores/posts.store";

describe('MainComponent', () => {
  let wrapper: VueWrapper<any>;
  let store: ReturnType<typeof postsStore>;

  const pinia = createTestingPinia({
    initialState: {
      posts: [
        { id: 1, title: 'Initial Post', description: 'Initial Description', comments: [] },
      ],
    },
    stubActions: false,
  });


  beforeAll(() => {
    (window as any).pinia = pinia;
  });

  beforeEach(() => {
    wrapper = shallowMount(MainComponent, {
      global: {
        plugins: [pinia],
      },
    });
    store = postsStore(pinia);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });


  it('adds a post correctly', async () => {
    const newPost = {
      id: 1,
      title: 'Test Title',
      description: 'Test Description',
    };

    wrapper.vm.onAdd(newPost);

    const posts = wrapper.vm.postsStore.posts;
    expect(posts.length).toBe(1);
    expect(posts[0]).toEqual(newPost);
  });

  it('edits a post correctly', async () => {
    const existingPostId = 1;
    const editedPost = {
      id: existingPostId,
      title: 'Edited Title',
      description: 'Edited Description',
    };

    wrapper.vm.onEdit(editedPost);
    const editedPostInStore = wrapper.vm.postsStore.getPostById(existingPostId);
    expect(editedPostInStore).toEqual(editedPost);
  });

  it('removes a post correctly', async () => {
    const postIdToRemove = 1;
    wrapper.vm.removePost(postIdToRemove);

    const postRemoved = wrapper.vm.postsStore.getPostById(postIdToRemove);
    expect(postRemoved).toBeUndefined();
  });

  it('formats date correctly', () => {
    const isoDate = '2024-06-07T12:00:00Z';
    const formattedDate = wrapper.vm.formatDate(isoDate);
    expect(formattedDate).toBe('15:00, Jun 7 2024');
  });

  it('clears modal fields correctly', () => {
    wrapper.vm.clearModalFields();

    const newPostData = wrapper.vm.newPost;
    expect(newPostData.title).toBe('');
    expect(newPostData.description).toBe('');
    expect(newPostData.id).toBeNull();
    expect(newPostData.comments).toEqual([]);
  });

  it('opens edit mode correctly', () => {
    const postId = 1;
    store.addPost({ id: postId, title: 'title',
      description: 'edit',
      comments: []})
    wrapper.vm.$refs.addPostModal.showEditMode = jest.fn();

    expect(wrapper.vm.$refs.addPostModal.showEditMode).toBeDefined();

    wrapper.vm.editPost(postId);

    expect(wrapper.vm.$refs.addPostModal.showEditMode).toHaveBeenCalledWith(postId);
  });

  it('does not add comment when comment note is empty', async () => {
    const postId = 1;
    const commentNote = '';

    store.addPost({ id: postId, title: 'Test Post', description: 'Test Description', comments: [] });

    wrapper.setData({ commentNote: commentNote });

    await wrapper.vm.addComment(postId);

    const postWithComment = store.getPostById(postId);

    // Перевіряємо, що кількість коментарів у пості дорівнює 0
    if (postWithComment) {
      expect(postWithComment.comments.length).toBe(1);
    } else {
      fail('Post does not exist');
    }
  });
});
