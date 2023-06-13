
/**
 * @param {number} val
 * @param {number} alignment
 */
function alignval(val, alignment) {
    return Math.floor((val + alignment - 1) / alignment) * alignment;
}

export const ARGCLS = {
    NONE: "NONE",
    INTEGER: "INTEGER",
    SSE: "SSE",
    SSEUP: "SSEUP",
    X87: "X87",
    X87UP: "X87UP",
    COMPLEX_X87: "COMPLEX_X87",
    NO_CLASS: "NO_CLASS",
    MEMORY: "MEMORY"
};

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
        /** @type {string[]} */
        this.argclasses = [];
        this.classify();
    }

    combine(a, b) {
        if (a == b) return a;
        if (a == ARGCLS.NO_CLASS) return b;
        if (b == ARGCLS.NO_CLASS) return a;
        if ((a == ARGCLS.MEMORY) || (b == ARGCLS.MEMORY)) return ARGCLS.MEMORY;
        if ((a == ARGCLS.INTEGER) || (b == ARGCLS.INTEGER)) return ARGCLS.INTEGER;
        return ARGCLS.SSE;
    }

    classify() {
        this.argclasses = [];
        const nwords = Math.ceil(this.size / 8);
        this.argclasses = Array(nwords).fill(ARGCLS.NO_CLASS);
        switch (this.name) {
            case "char":
            case "short":
            case "int":
            case "long":
                this.argclasses[0] = ARGCLS.INTEGER;
                return;
            case "float":
            case "double":
                this.argclasses[0] = ARGCLS.SSE;
                return;
        }
        if (this.size > 4 * 8) {
            this.argclasses.fill(ARGCLS.MEMORY);
            return;
        }
        for (const f of this.fields) {
            const idx = Math.floor(f.offset / 8);
            for (let i = 0; i < f.type.argclasses.length; i++) {
                const argcls = f.type.argclasses[i];
                this.argclasses[idx + i] = this.combine(
                    this.argclasses[idx + i], argcls);
            }
        }
        if (this.argclasses.includes(ARGCLS.MEMORY)) {
            this.argclasses.fill(ARGCLS.MEMORY);
            return;
        }
        if (this.size > 2 * 8) {
            if (this.argclasses[0] != ARGCLS.SSE
                    || !this.argclasses.includes(ARGCLS.SSEUP)) {
                this.argclasses.fill(ARGCLS.MEMORY);
                return;
            }
        }
    }
    
    update() {
        if (!this.user) return;
        this.size = 0;
        this.align = 0;
        if (this.fields.length === 0) {
            this.classify();
            return;
        }
        let offset = 0;
        for (let f of this.fields) {
            f.offset = alignval(offset, f.type.align);
            offset = f.offset + f.type.size;
        }
        this.align = this.fields.reduce((a, f) => Math.max(a, f.type.align), 0);
        this.size = Math.ceil(offset / this.align) * this.align;
        this.classify();
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

