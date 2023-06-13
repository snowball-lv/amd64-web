<script>
    import Field from "./Field.svelte";
    import { CField, CType } from "../ctypes";
    import { ALL_TYPES } from "../stores";

    /**
     * @type {CType}
     * */
    export let type;

    /**
     * @param name {string}
     * @returns {CType}
     */
    function findtype(name) {
        return $ALL_TYPES.find(t => t.name === name);
    }

    function addfield() {
        type.fields.push(new CField(findtype("int")));
        $ALL_TYPES = $ALL_TYPES;
    }

    function remfield() {
        if (type.fields.length > 0) {
            type.fields.pop();
            $ALL_TYPES = $ALL_TYPES;
        }
    }

</script>

<table class="frame">
    <tr>
        <td>
            <table style="width: 100%;">
                <tr>
                    <td>
                        <span class="type">{type.name}</span>
                    </td>
                    <td></td>
                    <td style="text-align: right;">
                        <span class="text">size</span>
                        <span class="num">{type.size}</span>
                        <span class="text">| align</span>
                        <span class="num">{type.align}</span>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    {#if type.user}
        <tr>
            <td>
                <table>
                    {#each type.fields as field, i}
                        <tr>
                            <Field parent={type} {field} name={"f" + i}/>
                        </tr>
                    {/each}
                </table>
            </td>
        </tr>
    {/if}
    <tr>
        <td>
            <span class="text">8-bytes:</span>
        </td>
    </tr>
    <tr>
        <td>
        <table>
            {#each type.argclasses as argcls, i}
            <tr>
                <td style="min-width: 2ch;"></td>
                <td style="min-width: 4ch;">
                    <span class="num">#{i}</span>
                </td>
                <td><span class="type">{argcls}</span></td>
            </tr>
            {/each}
        </table>
        </td>
    </tr>
    {#if type.user}
        <tr>
            <td style="text-align: right;">
                <button on:click={addfield}>+</button>
                <button on:click={remfield}>-</button>
            </td>
        </tr>
    {/if}
</table>

<style>
    .frame {
        padding: 4px;
        min-width: 40ch;
    }
</style>
