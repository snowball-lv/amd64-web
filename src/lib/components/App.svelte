<script>
    import { PARAMS } from "$lib/stores";
import Call from "./Call.svelte";
    import RegTable from "./RegTable.svelte";
    import TypeList from "./TypeList.svelte";
</script>

<h1 class="text">
    amd64 sysv calling convention
</h1>

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
    </div>
</div>
<style>
    h1 {
        font-size: 3em;
        color: darkslategrey;
        margin-left: 2ch;
    }
    #main {
        display: flex;
        flex-direction: row;
        margin: 32px;
    }
</style>