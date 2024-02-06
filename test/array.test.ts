describe('Array', function() {
    it('should must be', function() {

        const names: string[] = ["adit", "eko", "joko"];
        const values: number[] = [1,2,3];
        const students: Array<string> = ["adit", "eko", "joko"];

        console.log(names);
        console.log(values);
        console.log(students);

    });

    it('should support readonly array', function() {
        const rank: ReadonlyArray<number> = [1,2,3]

    });

    it('should support tuple', function() {
        const person: readonly[string, string, number] = ["aditya", "fauzan", 30];
    });
});