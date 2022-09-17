<script lang="ts">
  import type { INote } from "@Types";
  import { tweened } from "svelte/motion";
  import { bounceInOut } from "svelte/easing";

  const height = tweened(10, {
    duration: 100,
    easing: bounceInOut,
  });

  export let preview = false;
  $: preview = preview;

  export let todo: INote;
  const {
    body,
    title,
    done = false,
    createdAt = new Date(),
    updatedAt = new Date(),
  } = todo;

  function noteView(e) {
    height.set(preview ? 60 : 10);
    preview = !preview;
  }
</script>

{#if !preview}
  <div class="backdrop" />
{/if}
<section
  on:click={noteView}
  class="todo"
  class:done
  class:preview
  class:emphasis={!preview}
  style={`--height:${$height}`}
>
  <h4>{title}</h4>
  <span>{body}</span>
</section>

<style lang="scss">
  div.backdrop {
    background-color: #808080;
    opacity: 0.5;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
  .todo {
    border: 2px solid #000;
    background-color: #ecec86;
    color: black;
    padding: 0 3px 0 3px;
    display: grid;
    grid-template-columns: 100%;
    transition: all 0.3s;
    height: calc(var(--height) * 1vh);
    &.done {
      background-color: #808080;
    }
    h4 {
      margin: 0;
    }
    &.emphasis {
      position: absolute;
      top: 20vh;
      left: 20vw;
      height: calc(var(--height) * 1vh);
      width: 60vw;
    }
    &.preview {
      cursor: pointer;
      position: initial;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>
