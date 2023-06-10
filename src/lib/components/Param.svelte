<script>
    import { ALL_TYPES } from "../stores";
    import List from "./List.svelte";

    /** @type {CType} */
    export let type;
    /** @type {string} */
    export let name;

    function options() {
        return $ALL_TYPES.map(t => t.name);
    }

    let showdropdown = false;
    function onclcik() {
        showdropdown = true;
    }

    let container;
    function onwinclick(e) {
        if (container.contains(e.target) == false)
            showdropdown = false;
    }

    function onselect(e) {
        const tname = e.detail;
        type = $ALL_TYPES.find(t => t.name == tname);
        showdropdown = false;
    }

</script>

<svelte:window on:click={onwinclick}/>

<div bind:this={container}>
    <div class="frame" on:click={onclcik}>
        <span class="type">{type.name}</span>
        <span class="text">{name}</span>
    </div>
    {#if showdropdown}
        <div class="dropdown-container">
            <List values={options()} on:select={onselect}/>
        </div>
    {/if}
</div>
    
<style>
    .dropdown-container {
        position: absolute;
    }
    .frame {
        padding: 0px;
        margin: 0px;
        margin-top: 4px;
        margin-bottom: 4px;
        padding-left: 1ch;
        padding-right: 1ch;
        line-height: 1.5em;
        user-select: none;
    }
    .frame:hover {
        background-color: ivory;
    }
    .frame:active {
        background-color: lightgray
    }
</style>
