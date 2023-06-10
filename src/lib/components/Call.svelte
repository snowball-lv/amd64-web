<script>
    import { CType } from "../ctypes";
    import { ALL_TYPES, PARAMS } from "../stores";
    import Dropdown from "./Dropdown.svelte";

    function addparam() {
        $PARAMS.push($ALL_TYPES[0])
        $PARAMS = $PARAMS;
    }

    function remparam() {
        $PARAMS.pop();
        $PARAMS = $PARAMS;
    }

    function paramname(i) {
        return "p" + i;
    }

    function options() {
        return $ALL_TYPES.map(t => t.name);
    }

    function onselect(iparam, itype) {
        $PARAMS[iparam] = $ALL_TYPES.find(t => t.name == itype);
        $PARAMS = $PARAMS;
    }

</script>

<div class="frame">
    <p>
        <span class="type">void</span>
        <span class="text">foo(</span>
        {#each $PARAMS as param, i}
            <Dropdown values={options()}
                    on:select={(e) => onselect(i, e.detail)} />
            <span class="text">{paramname(i)}</span>
            <span class="text">{", "}</span>
        {/each}
        <button on:click={addparam}>+</button>
        <button on:click={remparam}>-</button>
        <span class="text">);</span>
    </p>
</div>

<style>
    .frame {
        padding-left: 4ch;
        padding-right: 4ch;
        font-size: large;
    }
</style>
