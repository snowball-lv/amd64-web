<script>
    import { createEventDispatcher } from "svelte";

    /** @type {string[]} */
    export let values = [];
    
    const dispatch = createEventDispatcher();

    function onclick(i) {
        dispatch("select", values[i]);
    }
</script>

<div class="frame">
    {#each values as v, i}
        <div class="opt" on:click={() => onclick(i)}>
            <span class="type">{v}</span>
        </div>
    {/each}
</div>

<style>
    .frame {
        margin: 0px;
    }
    .opt {
        background-color: white;
        padding: 4px;
        user-select: none;
    }
    .opt:hover {
        background-color: ivory;
    }
    .opt:active {
        background-color: lightgray;
    }
</style>