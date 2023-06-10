
export class CType {
    /**
     * @param {string} name
     */
    constructor(name, size = 0, align = 0, user = true) {
        this.name = name;
        this.size = size;
        this.align = align;
        this.user = user;
        this.fields = [];
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

