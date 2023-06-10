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
            <table>
                <tr>
                    <td style="min-width: 20ch;">
                        <span class="type">{type.name}</span>
                    </td>
                    <td>
                        <span class="text">size</span>
                        <span class="num">{type.size}</span>
                    </td>
                    <td>
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
    }
</style>
