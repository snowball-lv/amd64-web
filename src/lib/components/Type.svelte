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
        let name = "field_" + type.fields.length;
        type.fields.push(new CField(name, findtype("int")));
        type = type;
    }

    /**
     * @param idx {number}
     */
    function removefield(idx) {
        console.log("removing " + idx);
        type.fields.splice(idx, 1);
        type.fields = type.fields;
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
                            <Field {field} />
                            <td style="width: 100%;"></td>
                            <td>
                                <button on:click={() => removefield(i)}>
                                    X
                                </button>
                            </td>
                        </tr>
                    {/each}
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <button on:click={addfield}>Add Field</button>
            </td>
        </tr>
    {/if}
</table>

<style>
    .frame {
        padding: 4px;
    }
</style>
