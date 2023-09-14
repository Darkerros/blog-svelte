<script lang="ts">
  import type {PostResource} from "../types/post-resource.ts";
  import {onMount} from "svelte";

  export let post: PostResource;

  let isMounted = false

  const formater = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    day: 'numeric',
    month: 'short',
  })

  const formateDate = (date: string): string => {
    return formater.format(Date.parse(date))
  }

  onMount(() => {
    setTimeout(() => {
      isMounted = true;
    },50)
  })

</script>

<div class="{isMounted ? 'post post_mounted' : 'post'}">
    <p class="post__title">{post.title}</p>
    <div class="post__group-container">
        <div class="post__group">
            <p class="post__group-title">Создан:</p>
            <p class="post__group-subtitle">{formateDate(post.createdAt)}</p>
        </div>
        <div class="post__group">
            <p class="post__group-title">Обновлен:</p>
            <p class="post__group-subtitle">{formateDate(post.lastUpdatedAt)}</p>
        </div>
    </div>
</div>

<style lang="scss">
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
  }
</style>
