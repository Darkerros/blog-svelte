<script lang="ts">
  import PostsStore from "../stores/posts-store.ts";

  import AddPostDorm from "../components/AddPostForm.svelte";
  import PostCardList from "../components/PostCardList.svelte";

  import type { PostResource } from "../types/post-resource.ts";

  const handleAddPost = (post: PostResource) => {
    PostsStore.update(posts => {
      posts.push(post)
      return posts
    })
  }
</script>

<section class="">
    <div class="main-page__content">
        <AddPostDorm onSubmit={handleAddPost}/>
        <PostCardList/>
    </div>
</section>

<style lang="scss">
  .main-page {
    &__content {
      gap: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
</style>
