<script>
    import { ALL_TYPES } from "../stores";
    import { onDestroy } from "svelte";
    import Call from "./Call.svelte";
    import RegTable from "./RegTable.svelte";
    import TypeList from "./TypeList.svelte";
    import Notes from "./Notes.svelte";
    
    onDestroy(ALL_TYPES.subscribe(types => {
        for (const t of types) {
            t.update();
        }
    }));
</script>

<p class="text">
    amd64 sysv calling convention
</p>

<div id="main">
    <div><TypeList /></div>
    <div style="flex-grow: 2; padding-left: 32px;">
        <div>
            <Call />
        </div>
        <div style="height: 32px;"></div>
        <div>
            <RegTable />
        </div>
        <div style="height: 32px;"></div>
        <div>
            <Notes />
        </div>
    </div>
</div>
<style>
    p {
        font-size: 2em;
        color: darkslategrey;
        margin-left: 2ch;
    }
    #main {
        display: flex;
        flex-direction: row;
        margin: 32px;
    }
</style>