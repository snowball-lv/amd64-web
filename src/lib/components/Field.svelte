<script>
    import { CField } from "../ctypes";
    import { ALL_TYPES } from "../stores";

    /**
     * @type {CField}
     */
    export let field;
    let fieldtype = field.type.name;

    /**
     * @param name {string}
     * @returns {CType}
     */
     function findtype(name) {
        return $ALL_TYPES.find(t => t.name === name);
    }

    function onchange() {
        field.type = findtype(fieldtype);
        field = field;
    }
</script>

<td style="min-width: 2ch;"></td>
<td style="min-width: 8ch;">
    <span class="text">offset </span>
    <span class="num">{field.offset}</span>
</td>
<td>
    <select bind:value={fieldtype} on:change={onchange}>
        {#each $ALL_TYPES as t}
            <option value={t.name}>{t.name}</option>
        {/each}
    </select>
</td>
<td>{field.name}</td>
