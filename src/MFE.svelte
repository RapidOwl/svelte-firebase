<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let id;
  export let motivation;
  export let focus;
  export let energy;
  export let loggedOn;

  function getDate() {
    var newDate = new Date(loggedOn);
    return newDate.toUTCString();
  }

  function remove() {
    dispatch("remove", { id });
  }
</script>

<style>
  .remove {
    cursor: pointer;
  }
</style>

<h4>{motivation * focus * energy}</h4>
<p>
  Motivation:
  <strong>{motivation}</strong>
  , Focus:
  <strong>{focus}</strong>
  , Energy:
  <strong>{energy}</strong>
  <span class="remove" on:click={remove}>[Remove]</span>
</p>
<p>{getDate()}</p>
