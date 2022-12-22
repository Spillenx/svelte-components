<script>
	import Toggle from '$lib/components/Toggle.svelte';
	import Accordian from '$lib/components/accordian/Accordian.svelte';
	import BetterAccordian from '$lib/components/accordian/BetterAccordian.svelte';
	import SearchFilter from '$lib/components/SearchFilter.svelte';
	// import Markdown from '$lib/components/Markdown.svelte';
	import Portal from '$lib/components/Portal.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Toast from '$lib/components/toast/Toast.svelte';
	import { toast } from '$lib/components/toast/toast';

	let isToggled = false;
	let isModalOpen = false;

	let search = '';
	let items = ['Peter', 'Erik', 'Kenneth', 'Scarlett', 'Charlotte', 'Bob'];
</script>

<div class="content">
	<h1>SvelteKit Components</h1>

	<!-- Toggle -->
	<div>
		<Toggle bind:isToggled label="Beta" />
		<Toggle bind:isToggled label="Beta" style="--toggleBackgroundColor : red;" />

		{#if isToggled}
			<h1>I'm toggled!</h1>
		{/if}
	</div>

	<!-- Accordian -->
	<div>
		<Accordian buttonText="Accordian">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas est corrupti voluptatem,
				quidem eius velit inventore quos facilis pariatur, sequi totam itaque et iusto dignissimos,
				ipsam rem porro at. Dolorem culpa excepturi animi repellendus, fuga possimus! Beatae
				voluptate libero fugiat aperiam eius doloribus voluptas eligendi asperiores aliquam,
				praesentium iste.
			</p>
		</Accordian>

		<BetterAccordian buttonText="Accordian">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas est corrupti voluptatem,
				quidem eius velit inventore quos facilis pariatur, sequi totam itaque et iusto dignissimos,
				ipsam rem porro at. Dolorem culpa excepturi animi repellendus, fuga possimus! Beatae
				voluptate libero fugiat aperiam eius doloribus voluptas eligendi asperiores aliquam,
				praesentium iste.
			</p>
		</BetterAccordian>
	</div>

	<!-- Search filter -->
	<div>
		Searching for: {search} <br />
		<SearchFilter {items} bind:search />
	</div>

	<!-- Portal -->
	<Portal>
		<h1>Hi</h1>
	</Portal>

	<!-- Modal -->
	<Modal {isModalOpen}>
		<div style="background: white; box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3)">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas est corrupti voluptatem,
				quidem eius velit inventore quos facilis pariatur, sequi totam itaque et iusto dignissimos,
				ipsam rem porro at. Dolorem culpa excepturi animi repellendus, fuga possimus! Beatae
				voluptate libero fugiat aperiam eius doloribus voluptas eligendi asperiores aliquam,
				praesentium iste.
			</p>
		</div>
	</Modal>
	<button on:click={() => (isModalOpen = true)}>Open Modal</button>

	<!-- Markdown -->
	<!-- <Markdown /> -->

	<!-- Toast -->
	<Toast />
	<button on:click={() => toast.send('CHEERS!' + Math.random())}>New Toast</button>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		background-color: peachpuff;
		padding: 2rem;
	}
</style>
