<script lang="ts">
  import { onMount } from "svelte";

  let modalContainer = null;
  let portalRef = null;

  onMount(() => {
    modalContainer = document.querySelector('#modal');
    modalContainer.appendChild(portalRef)

    return () => {
      if (document) {
        document.body.removeChild(portalRef)
      }
    }
  })
</script>

<div bind:this={portalRef}>
    <slot></slot>
</div>

<style>

</style>
