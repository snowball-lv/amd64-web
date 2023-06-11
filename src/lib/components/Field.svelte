<script>
    import { CField } from "../ctypes";
    import { ALL_TYPES } from "../stores";
    import Dropdown from "./Dropdown.svelte";

    /**
     * @type {CField}
     */
    export let field;
    export let name;
    export let parent;

    /**
     * @param name {string}
     * @returns {CType}
     */
     function findtype(name) {
        return $ALL_TYPES.find(t => t.name === name);
    }

    $: options = $ALL_TYPES
            .slice(0, $ALL_TYPES.indexOf(parent))
            .map(t => t.name);

    function onselect(e) {
        const tname = e.detail;
        field.type = findtype(tname);
        $ALL_TYPES = $ALL_TYPES;
    }

</script>

<td style="min-width: 2ch;"></td>
<td style="min-width: 8ch;">
    <span class="text">offset</span>
    <span class="num">{field.offset}</span>
</td>
<td>
    <Dropdown
        values={options}
        selected={$ALL_TYPES.indexOf(field.type)}
        on:select={onselect} />
</td>
<td><span class="text" style="margin-left: 1ch;">{name}</span></td>
