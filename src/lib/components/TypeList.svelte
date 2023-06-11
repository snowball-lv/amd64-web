<script>
    import Type from "./Type.svelte";
    import { CType, C_TYPES } from "../ctypes";
    import { ALL_TYPES, PARAMS } from "../stores";
    import { onDestroy } from "svelte";

    function addtype() {
        const i = $ALL_TYPES.length - C_TYPES.length;
        $ALL_TYPES.push(new CType("Type_" + i));
        $ALL_TYPES = $ALL_TYPES;
    }

    function remtype() {
        if ($ALL_TYPES.length > C_TYPES.length) {
            const last = $ALL_TYPES[$ALL_TYPES.length - 1];
            $ALL_TYPES.pop();
            $ALL_TYPES = $ALL_TYPES;
            $PARAMS = $PARAMS.filter(p => p !== last);
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
    