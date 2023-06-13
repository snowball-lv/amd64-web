<script>
    import { CType } from "../ctypes";
    import { ALL_TYPES, PARAMS } from "../stores";
    import Dropdown from "./Dropdown.svelte";

    function addparam() {
        $PARAMS.push($ALL_TYPES.find(t => t.name === "int"));
        $PARAMS = $PARAMS;
    }

    function remparam() {
        $PARAMS.pop();
        $PARAMS = $PARAMS;
    }

    $: options = $ALL_TYPES.map(t => t.name);

    function onselect(iparam, value) {
        $PARAMS[iparam] = $ALL_TYPES.find(t => t.name === value);
        $PARAMS = $PARAMS;
    }

</script>

<div class="frame">
    <p>
        <span class="type">void</span>
        <span class="text">foo(</span>
        {#each $PARAMS as param, i}
            <span class="param-container">
                <Dropdown
                    values={options}
                    selected={options.indexOf(param.name)}
                    on:select={(e) => onselect(i, e.detail)} />
                <span class="text">{"p" + i}</span>
                <span class="text">{","}</span>
            </span>
        {/each}
        <span style="display: inline-block;">
            <button on:click={addparam}>+</button>
            <button on:click={remparam}>-</button>
        </span>
        <span class="text">);</span>
    </p>
</div>

<style>
    .frame {
        padding-left: 4ch;
        padding-right: 4ch;
        max-width: 80ch;
    }
    .param-container {
        display: inline-block;
        margin-bottom: 4px;
    }
</style>
