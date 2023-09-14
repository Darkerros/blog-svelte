import { writable } from "svelte/store";

import type { PostResource } from "../types/post-resource.ts";

const PostsStore = writable<PostResource[]>([],)

export default PostsStore;
