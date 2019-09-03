import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    mission: 'build something awesome!'
  }
});

export default app;
