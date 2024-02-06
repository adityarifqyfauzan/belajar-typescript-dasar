describe('Union', function() {
    // union type digunakan ketika
    // kita mempunyai case yang mana tipe data
    // dari variable nya tidak tetap/berubah ubah
    
    // secara otomatis, ts akan membolehkan mengubah
    // tipe data, namun sesuai yang sudah
    // ditentukan di union type nya
    it('should support in ts', function() {
        let sample: number | string = "10";
        sample = 10;
        // sample = true; <-- will error
    });

    // notes:
    // ketika union type digunakan sebagai param
    // function, maka di dalam function tersebut
    // haruslah dilakukan pengecekan type
    // menggunakan keyword 'typeof'
    // untuk masing masing tipe data

    it('should handle union type as param', function() {
        function process(value: number | string | boolean) {
            if (typeof value === "number") {
                return value + 1;
            } else if (typeof value === "string") {
                return value.toUpperCase();
            } else {
                return !value;
            }
        }

        expect(process(10)).toBe(11);
        expect(process("a")).toBe("A");
        expect(process(false)).toBe(true);
    })
});