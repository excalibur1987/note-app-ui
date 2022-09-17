<script lang="ts">
  import type { INote } from "@Types";
  import NoteCard from "./NoteCard.svelte";

  export let notes: INote[];
</script>

<section class="note-list-container">
  {#each notes as note}
    <NoteCard todo={note} preview />
  {/each}
</section>

<style lang="scss">
  section.note-list-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50vw;
    max-height: 91vh;
    height: 91vh;
    margin: auto;
    padding-top: 2vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;
  }
</style>
