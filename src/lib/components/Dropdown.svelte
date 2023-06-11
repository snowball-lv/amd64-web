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
    <button class="frame btn" id="val" on:click={onclick}>
        <span class="type">{values[selected]}</span>
    </button>
    {#if show}
        <div class="frame" id="list-container" style="margin-top: 4px;">
            {#each values as v, i}
                <button
                    class="btn opt"
                    on:click={() => onoptclick(i)}>
                    <span class="type">{v}</span>
                </button>
            {/each}
        </div>
    {/if}
</div>

<style>
    #val {
        display: inline-block;
    }
    .frame {
        margin: 0px;
        padding: 0px;
    }
    #list-container {
        position: absolute;
    }
    .opt {
        display: block;
        box-shadow: none;
        width: 100%;
        text-align: left;
    }
    .btn {
        font-size: inherit;
        border-radius: 0px;
        background-color: white;
        padding: 4px;
        user-select: none;
        padding-left: 1ch;
        padding-right: 1ch;
    }
    .btn:hover {
        background-color: ivory;
    }
    .btn:active {
        background-color: lightgray;
    }
</style>