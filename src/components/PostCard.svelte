<script lang='ts'>
	import { onMount } from 'svelte';

	import { dateFormater } from '../utils/date-formater.ts';

	import type { PostResource } from '../types/post-resource.ts';

	export let post: PostResource;

	export let onEditClick: (post: PostResource) => void;
	export let onShowClick: (post: PostResource) => void;

	let isMounted = false;
	const formateDate = dateFormater();

	onMount(() => {
		setTimeout(() => {
			isMounted = true;
		}, 50);
	});

	const handleEditButtonClick = () => onEditClick(post);
	const handleShowButtonClick = () => onShowClick(post);
</script>

<div class="{isMounted ? 'post post_mounted' : 'post'}">
	<p class='post__title'>{post.title}</p>
	<div class='post__group-container'>
		<div class='post__group'>
			<p class='post__group-title'>Создан:</p>
			<p class='post__group-subtitle'>{formateDate(post.createdAt)}</p>
		</div>
		<div class='post__group'>
			<p class='post__group-title'>Обновлен:</p>
			<p class='post__group-subtitle'>{formateDate(post.lastUpdatedAt)}</p>
		</div>
		<div class='post__group post__button-container'>
			<button class='post__button' on:click={handleShowButtonClick}>Просмотреть</button>
			<button class='post__button' on:click={handleEditButtonClick}>Редактировать</button>
		</div>
	</div>
</div>

<style lang='scss'>
  p {
    padding: 0;
    margin: 0;
  }

  .post {
    padding: 20px;
    width: 100%;

    border: solid 1px #00a884;
    border-radius: 5px;

    box-sizing: border-box;

    opacity: 0;
    visibility: hidden;

    transition: all .5s linear;

    &_mounted {
      opacity: 1;
      visibility: visible;
    }

    &__title {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;

      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__group-container {
      margin-top: 10px;

      display: flex;
      flex-direction: column;
    }

    &__group {
      gap: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      &-title {
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
      }

      &-subtitle {
        font-size: 14px;
      }
    }

    &__button {
      padding: 10px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      color: white;
      border: none;
      background: #00a884;
      cursor: pointer;
    }

	&__button-container {
      margin-top: 10px;
	}
  }
</style>
