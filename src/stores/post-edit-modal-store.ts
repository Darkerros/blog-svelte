import { writable } from "svelte/store";

import { v4 as uuidv4 } from 'uuid';

import type {PostResource} from "../types/post-resource.ts";

interface PostEditModalStoreState {
  post: PostResource;
  isModalOpen: boolean;
}

const PostEditModalStore = writable<PostEditModalStoreState>({
  post: {
    id: uuidv4(),
    title: '',
    description: '',
    createdAt: new Date(),
    lastUpdatedAt: new Date(),
  },
  isModalOpen: false
})

export default PostEditModalStore;
