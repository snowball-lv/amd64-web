<script>
    import { CType } from "./ctypes";
    import { ALL_TYPES } from "./stores";

    /**
     * @type {CType[]}
    */
    let args = [];

    function addarg() {
        args.push($ALL_TYPES[0]);
        args = args;
    }
</script>

<div class="frame">
    <p>
        <span class="type">void</span>
        <span class="text">foo(</span>
        {#each args as arg}
            <span class="type">{arg.name}</span>
            <span class="text">, </span>
        {/each}
        <button on:click={addarg}>+</button>
        <span class="text">);</span>
    </p>
</div>

<style>
    .frame {
        padding-left: 4ch;
        padding-right: 4ch;
    }
    p {
        font-size: large;
    }
</style>
