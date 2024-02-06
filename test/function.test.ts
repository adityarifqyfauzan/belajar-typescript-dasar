describe('Function', function() {

    it('should support in ts', function() {

        function sayHello(name: string): string {
            return `Hello ${name}`
        }

        expect(sayHello('Adit')).toBe('Hello Adit')

        function printHello(name:string): void {
            console.log(`Hello ${name}`);
        }

        printHello('Adit')

    })

    it('should support default value in ts', function() {

        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`
        }

        expect(sayHello()).toBe('Hello Guest')
        expect(sayHello('Aditya')).toBe('Hello Aditya')

    })

    it('should support rest parameter', function() {

        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value
            }
            return total
        }

        expect(sum(1, 2, 3)).toBe(6)

    })

    it('should support optional parameter', function() {

        function sayHello(firstName: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`
            }
            return `Hello ${firstName}`
        }

        expect(sayHello('Aditya')).toBe("Hello Aditya")

    })

    it('should support function overloading', function() {

        function callMe(value: number): number;
        function callMe(value: string): string;

        function callMe(value: any) {
            if (typeof value === 'number') {
                return value + 1
            }

            if (typeof value === 'string') {
                return `Hello ${value}`
            }
        }

        expect(callMe(1)).toBe(2)
        expect(callMe('Adit')).toBe('Hello Adit')

    });

    it('should support function as parameter', function() {

        function sayHello(name:string, filter: (name: string) => string) {
            return `Hello ${filter(name)}`
        }

        function toUpper(name:string): string {
            return name.toUpperCase()
        }

        expect(sayHello('Aditya', toUpper)).toBe("Hello ADITYA")
        expect(sayHello('Aditya', (name:string): string => {
            return name.replace('a', 'A')
        })).toBe('Hello AdityA')

    })

})