<script>
    import Type from "./Type.svelte";
    import { CType } from "../ctypes";
    import { ALL_TYPES } from "../stores";

    function addtype() {
        ALL_TYPES.update(t => [...t, new CType("NewType")]);
    }
</script>

{#each $ALL_TYPES as type}
    <Type {type} />
{/each}

<div style="margin: 4px;">
    <button on:click={addtype}>
        Add Type
    </button>
</div>
    