<script lang='ts'>
	import { dateFormater } from '../utils/date-formater.ts';
	import type { PostResource } from '../types/post-resource.ts';
	export let post: PostResource;

	const formater = dateFormater();

</script>

<div class='post-info-card'>
	<p class='post-info-card__title'>{post.title}</p>

	<div class='post-info-card__info-group'>
		<p class='post-info-card__info-group-title'>Описание:</p>
		<p class='post-info-card__info-group-content'>{post.description}</p>
	</div>

	<div class='post-info-card__flex-group'>
		<div class='post-info-card__info-group'>
			<p class='post-info-card__info-group-title'>Время создания:</p>
			<p class='post-info-card__info-group-content'>{formater(post.createdAt)}</p>
		</div>
		<div class='post-info-card__info-group'>
			<p class='post-info-card__info-group-title'>Время обновления:</p>
			<p class='post-info-card__info-group-content'>{formater(post.lastUpdatedAt)}</p>
		</div>
	</div>
</div>

<style lang='scss'>
	.post-info-card {
	  width: 500px;

	  &__title {
		font-size: 14px;
		font-weight: normal;

		text-align: center;
		text-transform: uppercase;
	  }

	  &__info-group {
        margin-top: 25px;

		&-title {
		  margin: 0;
		  font-size: 12px;
          font-weight: bold;

		  text-transform: uppercase;
		}

		&-content {
          margin: 5px 0 0;
          font-size: 16px;
          font-weight: normal;
		}
	  }

	  &__flex-group {
        margin-top: 20px;

		gap: 10px;
		display: flex;

		justify-content: space-between;

		border-top: solid 2px #00a884;
	  }
	}
</style>
