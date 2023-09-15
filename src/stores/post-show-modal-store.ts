import { writable } from 'svelte/store';
import type { PostResource } from '../types/post-resource.ts';

interface PostShowModalStoreState {
	isModalOpen: boolean,
	post: PostResource | null,
}

const PostShowModalStore = writable<PostShowModalStoreState>({
	isModalOpen: false,
	post: null,
})

export default PostShowModalStore;
