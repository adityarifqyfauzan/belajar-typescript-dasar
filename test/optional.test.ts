import { sayHello } from '../src/say-hello';
describe('Optional Parameter', function() {
    it('should support null and undefined', function() {

        function sayHello(name?: string): string {
            if (name) {
                return `Hello ${name}`;
            }

            return `Hello`;
        }

        expect(sayHello("Aditya")).toBe("Hello Aditya")
        expect(sayHello(undefined)).toBe("Hello")
        // expect(sayHello(null)) <-- will error,
        // karena null adalah sebuah tipe data juga dalam ts
        
        function sayHelloWithNull(name?: string | null) {
            if (name) {
                return `Hello ${name}`;
            }
            
            return `Hello`;
        }
        expect(sayHelloWithNull(null))

    });
});