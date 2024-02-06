describe('Object Type', function() {
    it('should support in ts', function() {

        // menjadikan sebuah object sebagai tipe data
        // dari sebuah variable
        const person: {id: string | number, name: string} = {
            id: 1,
            name: "Aditya",
        }

        console.log(person);
        
    });
});