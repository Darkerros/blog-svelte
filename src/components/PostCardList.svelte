<script lang='ts'>
	import { onMount } from 'svelte';

	import postsKey from '../consts/posts-key.ts';
	import PostsStore from '../stores/posts-store.ts';
	import PostEditModalStore from '../stores/post-edit-modal-store.ts';
	import PostShowModalStore from '../stores/post-show-modal-store.ts';

	import PostCard from './PostCard.svelte';

	import type { PostResource } from '../types/post-resource.ts';

	let posts: PostResource[] = [];

	onMount(() => {
		const localStoragePosts = localStorage.getItem(postsKey) ?? '[]';
		PostsStore.set(JSON.parse(localStoragePosts));

		PostsStore.subscribe((newPosts) => {
			localStorage.setItem(postsKey, JSON.stringify(newPosts));
			posts = newPosts;
		});
	});

	const handlePostEditClick = (post: PostResource) => {
		PostEditModalStore.update(store => {
			store.post = post;
			store.isModalOpen = true;
			return store;
		});
	};

	const handlePostShowClick = (post: PostResource) => {
		PostShowModalStore.update(store => {
			store.post = post;
			store.isModalOpen = true;
			return store;
		});
	};
</script>

<div
	class="{!posts.length ? 'post-not-created-container' : 'post-not-created-container post-not-created-container__hide'}">
	<p>Посты не найдены, создайте новые</p>
</div>

{#if posts.length }
	<ul class='post-list'>
		{#each posts as post (post.id)}
			<li>
				<PostCard post='{post}' onEditClick='{handlePostEditClick}' onShowClick='{handlePostShowClick}' />
			</li>
		{/each}
	</ul>
{/if}


<style lang='scss'>
  .post-list {
    width: 100%;
    max-width: 600px;

    padding: 0;
    list-style: none;

    gap: 10px;
    display: grid;

    grid-template-columns: repeat(2, minmax(260px, 1fr));
  }

  .post-not-created-container {
    width: 100%;
    max-width: 600px;

    display: flex;
    justify-content: center;

    opacity: 1;
    visibility: visible;
    transition: all linear .3s;

    &__hide {
      opacity: 0;
      visibility: hidden;
      transition: all linear .3s;
    }
  }
</style>
