<script lang='ts'>
	import Portal from './Portal.svelte';

	export let isModalOpen: boolean = false
	export let onClose: () => void;

	const handleClose = () => {
		onClose()
	}

</script>

<Portal>
	<div class='{isModalOpen ? "modal modal_open" : "modal"}' on:click={handleClose}>
		<div class='{isModalOpen ? "modal__content modal__content_open" : "modal__content"}' on:click|stopPropagation>
			<slot></slot>
		</div>
	</div>
</Portal>


<style lang='scss'>
  .modal {
    top: 0;
    left: 0;
    position: fixed;

    z-index: -1;
    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.4);

	display: flex;
	align-items: center;
	justify-content: center;


	opacity: 0;
    visibility: visible;

	transition: all linear .3s;

	&_open {
      z-index: 5;
	  opacity: 1;
      visibility: visible;
	}

	&__content {
	  padding: 20px;
      width: fit-content;

      background: white;
	  border-radius: 5px;

      transform: translateX(75vw);
	  transition: all linear .5s;

	  &_open {
		transform: translateX(0);
	  }
	}
  }
</style>

