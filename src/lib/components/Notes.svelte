<script>
</script>

<div class="frame">
    <p class="type" id="title">Notes</p>
    <p class="type" id="subtitle">(from the AMD64 SysV ABI)</p>
    <p class="text">
        Arguments are first classified into classes that have
        corresponding amd64 registers.
    </p>
    <p class="text">
        These are:
    </p>
    <table class="text">
        <tr>
            <td>INTEGER</td>
            <td>-</td>
            <td>types that fit into general purpose registers</td>
        </tr>
        <tr>
            <td>SSE</td>
            <td>-</td>
            <td>types that fit into vector registers</td>
        </tr>
        <tr>
            <td>SSEUP</td>
            <td>-</td>
            <td>types that fit into the upper bytes of vector registers</td>
        </tr>
        <tr>
            <td>MEMORY</td>
            <td>-</td>
            <td>types to be passed on the stack</td>
        </tr>
    </table>
    <p class="text">
        (n.b. there are more classes for more complex unimplemented types)
    </p>
    <p class="text">
        Classification:
    </p>
    <p class="text">
        Arguments are rounded up to 8 bytes (8-bytes from now on).
    </p>
    <p class="text">
        Scalars are assigned the following classes:
    </p>
    <ul class="text">
        <li>
            char, short, int, long, long long and pointers
            are classified as INTEGER
        </li>
        <li>
            float and double are classified as SSE
        </li>
    </ul>
    <p class="text">
        Classification of aggregate types:
    </p>
    <ol class="text">
        <li>
            If the object is larger than four 8-bytes, or if it contains
            unaligned fields it is classified as MEMORY.
        </li>
        <li>
            If the size of the object is larger than a single 8-byte then
            each 8-byte gets classified individually. The initial class
            of each 8-byte is set to NO_CLASS.
        </li>
        <li>
            The class of an 8-byte is determined by recursively combining
            the classes of the fields of an object that overlap this 8-byte.
            <ol>
                <li>If both classes are equal, this is the resulting class.</li>
                <li>If one class is NO_CLASS, the result is the other class.</li>
                <li>If one class is MEMORY, the result is MEMORY.</li>
                <li>If one class is INTEGER, the result is INTEGER.</li>
                <li>Otherwise the class is SSE.</li>
            </ol>
        </li>
    </ol>
    <p class="text">
        Post-processing for aggregate types:
    </p>
    <ul class="text">
        <li>
            If one of the classes is MEMORY then the entire argument
            is passed in memory.
        </li>
        <li>
            If the size of the object is larger than two 8-bytes
            and the first 8-byte isn't SSE and if any other 8-byte isn't
            SSEUP then the whole object is passed in memory.
        </li>
        <li>
            If SSEUP is not preceded by SSE or SSEUP, it is converted to SSE.
        </li>
    </ul>
    <p class="text">
        After classification arguments are assigned their registers in order.
    </p>
    <ul class="text">
        <li>If the class is MEMORY, pass it on the stack.</li>
        <li>
            If the class is INTEGER, pick the next available register
            from the list:
                <ul>
                    <li>%rdi, %rsi, %rdx, %rcx, %r8, %r9,</li>
                </ul>

        </li>
        <li>
            If the class is SSE, pick the next available register
            from %xmm0 to %xmm7
        </li>
        <li>
            If the class is SSEUP, pick the next available 8-byte in the
            last used vector register.
        </li>
        <li>
            If there are no more registers available for any 8-byte of an
            object, pass the entire object in memory. Previous register
            assignments are discarded.
        </li>
    </ul>
    <p class="text">
        After registers are assigned, the arguments passed in memory get
        pushed onto the stack in reverse order.
    </p>
    <p class="text">
        *** This is how I understood the ABI. Not necessarily correct.
    </p>
</div>

<style>
    .frame {
        max-width: 80ch;
    }
    #title {
        margin-left: 16px;
        margin-bottom: 0px;
        font-size: 2em;
    }
    #subtitle {
        margin-left: 16px;
        margin-top: 0px;
    }
    .text {
        margin: 16px;
    }
</style>