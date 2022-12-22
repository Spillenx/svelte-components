<script>
	import { fly, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { toast } from './toast';
	import Portal from '../Portal.svelte';
	import ToastMessage from './ToastMessage.svelte';
</script>

<Portal>
	<div class="toast-wrapper">
		{#each $toast as message (message.id)}
			<div
				in:fly={{ opacity: 0, x: 100 }}
				out:fade
				animate:flip
				class={`toast ${message.type.toLowerCase()}`}
				on:click={toast.remove(message.id)}
			>
				<ToastMessage {message} />
			</div>
		{/each}
	</div>
</Portal>

<style>
	.toast-wrapper {
		position: fixed;
		bottom: 0;
		right: 20px;
	}

	.toast {
		overflow: hidden;
		position: relative;
		margin-bottom: 1rem;
		padding: 20px;
		border-radius: 15px;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
		color: white;
		background: var(--toast-background, #625df5);
	}

	.toast.info {
		color: gold;
		background: black;
	}

	.toast.success {
		color: black;
		background: aliceblue;
	}

	.toast.error {
		color: black;
		background: var(--toast-error-background, #e54b4b);
	}
</style>
