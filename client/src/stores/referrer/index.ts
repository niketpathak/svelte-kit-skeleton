import { writable } from 'svelte/store';

export const referrer = writable<string>('');
