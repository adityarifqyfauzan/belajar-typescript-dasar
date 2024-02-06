describe('Any', function() {
    it('should support in ts', function() {
        const person: any = {
            id: 1,
            name: "aditya",
            age: 24
        }

        person.age = "24"
        person.name = 1
    });
});