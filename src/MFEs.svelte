<script>
  import MFE from "./MFE.svelte";

  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  export let uid;

  const query = db
    .collection("mfes")
    .where("uid", "==", uid)
    .orderBy("loggedOn");

  const mfes = collectionData(query, "id").pipe(startWith([]));

  function removeItem(event) {
    const { id } = event.detail;
    db.collection("mfes")
      .doc(id)
      .delete();
  }
</script>

<h3>MFEs</h3>
{#each $mfes as mfe}
  <MFE
    id={mfe.id}
    motivation={mfe.motivation}
    focus={mfe.focus}
    energy={mfe.energy}
    loggedOn={mfe.loggedOn}
    on:remove={removeItem} />
{/each}
