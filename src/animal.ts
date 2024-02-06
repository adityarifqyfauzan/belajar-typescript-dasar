export class Animal {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name
    }

    voice(): string {
        return `this is animal voice`
    }
}