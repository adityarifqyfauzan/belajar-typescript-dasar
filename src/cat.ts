import { Animal } from "./animal";

export class Cat extends Animal {
    voice(): string {
        return `meoww!!`
    }
}