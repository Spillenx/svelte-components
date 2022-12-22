import { writable } from 'svelte/store';

const newToast = () => {
	const { subscribe, update } = writable([]);

	function send(message, { duration = 1000, type = 'INFO' } = {}) {
		const id = Math.floor(Math.random() * 1000);
		const newMessage = {
			id,
			duration,
			type,
			message
		};

		update((state) => {
			return [...state, newMessage];
		});
	}

	function remove(id) {
		update((state) => {
			let newStore = state.filter((item) => item.id !== id);
			return [...newStore];
		});
	}

	return {
		subscribe,
		send,
		remove
	};
};

export const toast = newToast();
