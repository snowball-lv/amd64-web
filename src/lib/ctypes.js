
/**
 * @param {number} val
 * @param {number} alignment
 */
function alignval(val, alignment) {
    return Math.floor((val + alignment - 1) / alignment) * alignment;
}

export class CType {
    /**
     * @param {string} name
     */
    constructor(name, size = 0, align = 0, user = true) {
        this.name = name;
        this.size = size;
        this.align = align;
        this.user = user;
        /** @type {CField[]} */
        this.fields = [];
    }

    update() {
        if (!this.user) return;
        this.size = 0;
        this.align = 0;
        if (this.fields.length === 0) return;
        let offset = 0;
        for (let f of this.fields) {
            f.offset = alignval(offset, f.type.align);
            offset = f.offset + f.type.size;
        }
        this.align = this.fields.reduce((a, f) => Math.max(a, f.type.align), 0);
        this.size = Math.ceil(offset / this.align) * this.align;
    }
}

export class CField {
    /** 
     * @param {CType} type
    */
    constructor(type, offset = 0) {
        this.type = type;
        this.offset = offset;
    }
}

export const C_TYPES = [
    // new CType("void", 0, 0, false),
    new CType("char", 1, 1, false),
    new CType("short", 2, 2, false),
    new CType("int", 4, 4, false),
    new CType("long", 8, 8, false),
    new CType("float", 4, 4, false),
    new CType("double", 8, 8, false)
];

