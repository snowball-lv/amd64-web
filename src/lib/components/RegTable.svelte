<script>
    let iregs = ["rdi", "rsi", "rdx", "rcx", "r8", "r9"];
    let fregs = [];
    for (let i = 0; i < 8; i++) {
        fregs.push(`xmm${i}`);
    }
</script>

<table class="frame" style="border-spacing: 0px;">
    <tr>
        <td>
            <div class="hdr text" style="min-width: 16ch;">gp regs</div>
            <br />
            {#each iregs as r}
                <div>
                    <span class="text">%{r}:</span>
                </div>
            {/each}
        </td>
        <td>
            <div class="hdr text" style="min-width: 16ch;">fp regs</div>
            <br />
            {#each fregs as r}
                <div>
                    <span class="text">%{r}:</span>
                </div>
            {/each}
        </td>
        <td>
            <div class="hdr text" style="min-width: 16ch;">stack</div>
            <br />
        </td>
    </tr>
</table>

<style>
    td {
        vertical-align: top;
        border-right: 1px solid black;
        padding: 8px;
    }
    .hdr {
        text-align: center;
    }
</style>
