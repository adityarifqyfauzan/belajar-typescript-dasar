import { sayHello } from "../src/say-hello";

describe('sayHello', function (): void {
    it('should return Hello Adit', function (): void {
        expect(sayHello('Adit')).toBe('Hello Adit');
    })
})