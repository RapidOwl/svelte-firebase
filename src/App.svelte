<script>
  import MFEs from "./MFEs.svelte";

  export let mission;

  // =============================================================

  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";

  let user;

  authState(auth).subscribe(u => (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }

  // =============================================================

  import { db } from "./firebase";

  let thing = "";

  $: upperThing = thing.toUpperCase();

  function saveThingToFirestore() {
    db.collection("things").add({
      uid: user.uid,
      thing: thing,
      loggedOn: Date.now()
    });
  }

// TODO Store things against the user ID.
// TODO Move some stuff into other components.
// TODO See if I can move the auth stuff into another file.

</script>

<style>
  h1 {
    color: red;
  }
</style>

<section>
  {#if user}
    <p>You're logged in as {user.displayName} ({user.email}) {user.uid}</p>
    <button on:click={() => auth.signOut()}>Logout</button>
    <hr />
  {:else}
    <button on:click={login}>Signin with Google</button>
  {/if}
</section>

<h1>Let's {mission}</h1>

<label for="thing">Thing</label>
<input type="number" bind:value={thing} />

<button on:click={saveThingToFirestore} disabled={user ? '' : 'disabled'}>
  Save Thing
</button>

{#if user}
  <p>Your thing in upper case: {upperThing}</p>
{/if}
