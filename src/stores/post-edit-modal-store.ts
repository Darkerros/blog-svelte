import {writable} from "svelte/store";
import type {PostResource} from "../types/post-resource.ts";

interface PostEditModalStoreState {
  post: PostResource;
  isModalOpen: boolean;
}

const PostEditModalStore = writable<PostEditModalStoreState>({
  post: {
    title: '',
    description: '',
    createdAt: new Date(),
    lastUpdatedAt: new Date(),
  },
  isModalOpen: false
})
