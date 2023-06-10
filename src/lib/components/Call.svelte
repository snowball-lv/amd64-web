<script>
    import { CType } from "../ctypes";
    import { ALL_TYPES } from "../stores";
    import Param from "./Param.svelte";

    /**
     * @type {CType[]}
    */
    let params = [];

    function addparam() {
        params.push($ALL_TYPES[0]);
        params = params;
    }

    function paramname(i) {
        return "p" + i;
    }

</script>

<div class="frame">
    <p>
        <span class="type">void</span>
        <span class="text">foo(</span>
        {#each params as param, i}
            <div style="display: inline-block;">
                <Param type={param} name={paramname(i)} />
            </div>
            <span class="text">{", "}</span>
        {/each}
        <button on:click={addparam}>+</button>
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
