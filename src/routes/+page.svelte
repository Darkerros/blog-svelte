<script lang='ts'>
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	import PostsStore from '../stores/posts-store.ts';
	import PostEditModalStore from '../stores/post-edit-modal-store.ts';
	import PostShowModalStore from '../stores/post-show-modal-store.ts';

	import Modal from '../components/Modal.svelte';
	import PostInfo from '../components/PostInfo.svelte';
	import AddPostDorm from '../components/PostAddForm.svelte';
	import PostEditForm from '../components/PostEditForm.svelte';
	import PostCardList from '../components/PostCardList.svelte';

	import type { PostResource } from '../types/post-resource.ts';


	let postToEdit = get(PostEditModalStore).post;
	let isPostEditModalOpen = get(PostEditModalStore).isModalOpen;

	let postToShow = get(PostShowModalStore).post;
	let isPostShowModalOpen = get(PostShowModalStore).isModalOpen;

	onMount(() => {
		PostEditModalStore.subscribe(store => {
			isPostEditModalOpen = store.isModalOpen;
			postToEdit = store.post;
		});

		PostShowModalStore.subscribe(store => {
			postToShow = store.post;
			isPostShowModalOpen = store.isModalOpen;
		});
	});

	const handleAddPost = (post: PostResource) => {
		PostsStore.update(posts => {
			posts.push(post);
			return posts;
		});
	};

	const handlePostEdit = (editPost: PostResource) => {
		PostsStore.update(posts => {
			const postToEditIndex = posts.findIndex(post => post.id === editPost.id);
			posts[postToEditIndex] = editPost;
			handleCloseEditPostModal();
			return posts;
		});
	};
	const handleCloseEditPostModal = () => {
		PostEditModalStore.update((store) => {
			store.isModalOpen = false;
			return store;
		});
	};

	const handleCloseShowPostModal = () => {
		PostShowModalStore.update((store) => {
			store.isModalOpen = false;
			return store;
		});
	};

</script>

<section class=''>
	<div class='main-page__content'>
		<AddPostDorm onSubmit={handleAddPost} />
		<PostCardList />
	</div>

	<Modal isModalOpen='{isPostEditModalOpen}' onClose='{handleCloseEditPostModal}'>
		{#key postToEdit.id }
			<PostEditForm initPost='{postToEdit}' onSubmit='{handlePostEdit}' />
		{/key}
	</Modal>

	<Modal isModalOpen='{isPostShowModalOpen}' onClose='{handleCloseShowPostModal}'>
		{#if postToShow }
			<PostInfo post='{postToShow}' />
		{/if}
	</Modal>
</section>

<style lang='scss'>
  .main-page {
    &__content {
      gap: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
</style>
