import './main.scss';
import App from './App.svelte';
import { countStore } from './store';

const app = new App({
	target: document.body,
	props: {
		name: 'Svelte',
		countStore: countStore
	}
});

window.app = app;

export default app;
