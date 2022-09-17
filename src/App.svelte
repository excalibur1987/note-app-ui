<script lang="ts">
  import NoteList from "./lib/NoteList.svelte";
  import type { INote } from "./types/note";

  const notes = Array(10)
    .fill(0)
    .map<INote>((_, i) => {
      return {
        createdAt: new Date(),
        title: `Todo #${i + 1}`,
        body: "Velit occaecat aute labore ipsum Lorem non proident proident culpa magna laboris esse minim Lorem. Consequat tempor irure proident irure dolore. Culpa nisi aliqua aute nulla ullamco elit.",
      };
    });
</script>

<main>
  <header>
    <span>Note App</span>
  </header>
  <NoteList {notes} />
</main>

<style lang="scss">
  header {
    height: 7vh;
    background-color: #7ae99b;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
