<script>
    import Type from "./Type.svelte";
    import { CType, C_TYPES } from "../ctypes";
    import { ALL_TYPES } from "../stores";

    function addtype() {
        $ALL_TYPES.push(new CType("NewType"));
        $ALL_TYPES = $ALL_TYPES;
    }
    function remtype() {
        if ($ALL_TYPES.length > C_TYPES.length) {
            $ALL_TYPES.pop();
            $ALL_TYPES = $ALL_TYPES;
        }
    }
</script>

{#each $ALL_TYPES as type}
    <Type {type} />
{/each}

<div style="margin: 4px;">
    <button on:click={addtype}>+</button>
    <button on:click={remtype}>-</button>
</div>
    