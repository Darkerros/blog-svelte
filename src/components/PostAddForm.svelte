<script lang='ts'>
	import { v4 as uuidv4 } from 'uuid';

	import type { PostResource } from '../types/post-resource.ts';

	export let onSubmit: (post: PostResource) => void;

	const post = {
		title: '',
		description: ''
	};

	const postValidateFieldsMessage = {
		title: '',
		description: ''
	};

	const handleSubmit = (evt: any) => {
		evt.preventDefault();

		postValidateFieldsMessage.title = post.title ? '' : 'Не должно быть пустым';
		postValidateFieldsMessage.description = post.description ? '' : 'Не должно быть пустым';

		if (Object.values(postValidateFieldsMessage).every(value => !value)) {
			const postToCreate: PostResource = {
				id: uuidv4(),
				title: post.title,
				description: post.description,
				createdAt: new Date().toISOString(),
				lastUpdatedAt: new Date().toISOString()
			};

			onSubmit(postToCreate);
		}
	};

</script>

<form class='form' on:submit={handleSubmit}>
	<input class='form__title-input' name='title' type='text' bind:value={post.title}
		   placeholder='Введите название поста'>
	<p class='form__validation-eror-message'>{postValidateFieldsMessage.title}</p>
	<textarea class='form__description-input' name='description' bind:value={post.description}
			  placeholder='Введите описание поста' />
	<p class='form__validation-eror-message'>{postValidateFieldsMessage.description}</p>
	<button class='form__submit-button' type='submit'>Создать пост</button>
</form>

<style lang='scss'>
  .form {
    padding: 20px;
    width: 600px;

    gap: 10px;
    display: flex;
    flex-direction: column;

    &__title-input {
      padding: 5px;
      border-radius: 3px;

      border: none;
      background: #ececec;
    }

    &__description-input {
      height: 170px;
      resize: none;
    }

    &__submit-button {
      padding: 10px;

      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;

      color: white;

      border: none;
      background: #00a884;

      cursor: pointer;
      transition: all linear .3s;

      &:hover {
        transform: scale(0.95);
      }

      &:active {
        transform: scale(1.05);
      }
    }

    &__validation-eror-message {
      margin: 0;

      color: red;
    }
  }
</style>
