export function sayHello(name?: string): string {
    if (name) {
        return `Hello ${name}`;
    }
    return 'Hello'
}