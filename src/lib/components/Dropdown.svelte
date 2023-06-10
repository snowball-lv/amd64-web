<script>
    import { createEventDispatcher } from "svelte";

    /** @type {string[]} */
    export let values = [];
    export let selected = 0;
    
    const dispatch = createEventDispatcher();

    let show = false;
    function onclick() {
        show = true;
    }

    function onoptclick(i) {
        selected = i;
        show = false;
        dispatch("select", values[i]);
    }

    let container;
    function onwinclick(e) {
        if (container.contains(e.target) == false)
            show = false;
    }
</script>

<svelte:window on:click={onwinclick}/>

<div bind:this={container} style="display: inline-block;">
    <div class="frame btn" id="val" on:click={onclick}>
        <span class="type">{values[selected]}</span>
    </div>
    {#if show}
        <div class="frame" id="list-container">
            {#each values as v, i}
                <div class="btn" on:click={() => onoptclick(i)}>
                    <span class="type">{v}</span>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    #val {
        display: inline-block;
    }
    .frame {
        padding: 0px;
    }
    #list-container {
        position: absolute;
    }
    .btn {
        background-color: white;
        padding: 4px;
        user-select: none;
    }
    .btn:hover {
        background-color: ivory;
    }
    .btn:active {
        background-color: lightgray;
    }
</style>