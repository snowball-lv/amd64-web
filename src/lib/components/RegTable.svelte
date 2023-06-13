<script>
    import { onDestroy } from "svelte";
    import { ALL_TYPES, PARAMS } from "../stores";
    import { ARGCLS, alignval } from "../ctypes";
    import { each } from "svelte/internal";

    const IREGS = ["rdi", "rsi", "rdx", "rcx", "r8", "r9"];
    /** @type {string[]} */
    const FREGS = [];
    for (let i = 0; i < 8; i++)
        FREGS.push(`xmm${i}`);

    class Arg {
        constructor(name, type) {
            this.name = name;
            this.type = type;
            this.memory = false;
            this.regs = Array(type.argclasses.length);
            this.offset = 0;
        }
        assign(iregs, fregs) {
            for (let i = 0; i < this.regs.length; i++) {
                const argcls = this.type.argclasses[i];
                switch (argcls) {
                    case ARGCLS.INTEGER:
                        if (iregs.length < 1) {
                            this.memory = true;
                            return;
                        }
                        this.regs[i] = iregs.shift();
                        break;
                    case ARGCLS.SSE:
                        if (fregs.length < 1) {
                            this.memory = true;
                            return;
                        }
                        this.regs[i] = fregs.shift();
                        break;
                    case ARGCLS.MEMORY:
                        this.memory = true;
                        return;
                }
            }
        }
        getfields(reg) {
            if (this.memory) return [];
            if (!this.type.user) {
                if (this.regs[0] == reg)
                    return [this.name];
                return [];
            }
            const fields = [];
            for (let i = 0; i < this.regs.length; i++) {
                if (this.regs[i] != reg) continue;
                fields.push(...this.type.getfields(i, this.name + "."));
            }
            return fields;
        }
    }

    /** @type {Arg[]} */
    let args = [];

    function updateargs() {
        args = [];
        for (let i = 0; i < $PARAMS.length; i++) {
            args.push(new Arg(`p${i}`, $PARAMS[i]));
        }
        let iregs = [...IREGS];
        let fregs = [...FREGS];
        for (const arg of args) {
            arg.assign(iregs, fregs);
            if (!arg.memory) {
                iregs = iregs.filter(e => !arg.regs.includes(e));
                fregs = fregs.filter(e => !arg.regs.includes(e));
            }
        }
        let offset = 0;
        for (const arg of args) {
            if (!arg.memory) continue;
            arg.offset = alignval(offset, arg.type.align);
            offset = arg.offset + arg.type.size;
        }
        args = args;
    }

    let regtab = {};
    $: {
        regtab = {};
        for (const reg of [...IREGS, ...FREGS]) {
            regtab[reg] = [];
            for (const arg of args) {
                regtab[reg].push(...arg.getfields(reg));
            }
        }
    }

    $: memargs = args.filter(a => a.memory);

    onDestroy(ALL_TYPES.subscribe(updateargs));
    onDestroy(PARAMS.subscribe(updateargs));
</script>

<div class="frame" id="regtab">
    <div class="text">
        Allocated registers:
    </div>
    <table>
        {#each Object.entries(regtab) as [reg, fields]}
            {#if fields.length > 0}
                <tr>
                    <td>
                        <div class="frame reg" style="display: inline-block;">
                            <span class="type" style="padding: 1ch;">%{reg}</span>
                        </div>
                    </td>
                    <td>
                        <span class="text">{fields.join(", ")}</span>
                    </td>
                </tr>
            {/if}
        {/each}
        {#each memargs as arg}
            <tr>
                <td>
                    <div class="frame reg" style="display: inline-block;">
                        <span class="type" style="padding: 1ch;">"{arg.name}"</span>
                    </div>
                </td>
                <td>
                    <span class="text">stack offset</span>
                    <span class="num">{arg.offset}</span>
                </td>
            </tr>
        {/each}
    </table>
</div>

<style>
    td {
        min-width: 10ch;
    }
    #regtab {
        max-width: 80ch;
        padding: 2ch;
    }
    .reg {
        padding: 4px;
    }
</style>
