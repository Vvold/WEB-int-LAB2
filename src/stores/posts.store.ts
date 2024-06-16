import { defineStore } from 'pinia'
import type { IPost } from "@/interfaces/post.interface";
import type { IComment } from "@/interfaces/comment.interface";

export const postsStore = defineStore({
  id: 'posts',
  state: () => ({
    posts: [] as IPost[],
  }),
  actions: {
    setPostsFromLocalStorage(): void {
      this.posts = getItemFromLocalStorage('posts');
    },

    addPost(post: IPost): void {
      this.$state.posts.unshift(post);

      this.savePostsToLocalStorage();
    },

    addComment(postId: number,comment: IComment): void {
      this.getPostById(postId)?.comments?.unshift(comment);
      this.savePostsToLocalStorage();
    },

    removeComment(postId: number, commentId: number): void {
      const post = this.getPostById(postId);
      if (post && post.comments) {
        post.comments = post?.comments.filter(comment => comment.id !== commentId);
      }
      this.savePostsToLocalStorage();
      this.setPostsFromLocalStorage();
    },

    getPostById(postId: number): IPost | undefined {
      return this.posts.find(post => post.id === postId)
    },

    editPost(post: IPost): void {
      this.posts = this.posts.map((item) => (item.id === post.id ? post : item));
      this.savePostsToLocalStorage();
    },

    removePost(index: number): void {
      this.posts = this.posts.filter(post => post.id !== index)
      this.savePostsToLocalStorage();
    },

    savePostsToLocalStorage(): void {
      localStorage.setItem('posts', JSON.stringify(this.posts))
    },
  },
})

const getItemFromLocalStorage = (key: string): IPost[] => {
  return JSON.parse(localStorage.getItem(key) || '[]');
}
