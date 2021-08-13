import { writable } from 'svelte/store';

export const heroesStore = writable<[]>([]);
