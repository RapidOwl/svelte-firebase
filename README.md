# Svelte + Firebase === Rapid Prototyping Joy

This is a project template to get you up and running quickly with Svelte and Firebase. Rapidly prototype to your heart's content without having to worry about building an API. Just build your front end in Svelte and let Firebase take care of the rest.

What this won't get you:

- Server side rendering. This is a SPA in the truest sense. If you want SSR go look at [Sapper](https://sapper.svelte.dev/).
- A production ready app. There's a lot your bundles will need that likely require advanced Rollup config not to mention all sorts of other things that this template isn't concerned with.

Knowledge gently extracted from these sources:

- https://svelte.dev
- https://github.com/sveltejs/template
- https://fireship.io/lessons/svelte-v3-overview-firebase/
- https://fireship.io/snippets/firestore-rules-recipes/

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit).

```bash
npx degit rapidowl/svelte-firebase your-project-name
cd your-project-name
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and watch Rollup's hot module replacement provide you with joy.
