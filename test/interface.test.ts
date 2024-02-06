import { Employee, Manager } from "../src/employee";
import { Seller } from "../src/interface";
import { AddFunction } from "../src/interface-function";

describe('Interface', function() {
    it('should support interface', function() {

        const seller: Seller = {
            id: 1,
            name: "taufiq",
            nik: "3222310508990002",
            npwp: "10239218309218"
        }

        console.log(seller);
        
        // seller.npwp = 0;  <-- will error because read only
    });

    it('should support interface function', function() {
    
        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        expect(add(1, 2)).toBe(3);

    });

    it('should support indexable interface', function() {

        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["adit", "taufiq", "rafid"]

        expect(names[0]).toBe("adit")

    })

    it('should support indexable interface for non number index', function() {

        // dictionary
        interface StringDictionary {
            [index: string]: string
        }

        const dictionary: StringDictionary = {
            "name": "Aditya",
            "address": "Indonesia"
        }

        expect(dictionary["name"]).toBe("Aditya")
        expect(dictionary["address"]).toBe("Indonesia")

    })

    it('should support extendsible interface', function() {

        const employee: Employee = {
            id: 1,
            name: "taufiq",
            division: "IT Developer"
        }

        const manager: Manager = {
            id: 2,
            name: "aditya",
            division: "IT Developer",
            numberOfEmployees: 15
        }

        expect(employee.name).toBe("taufiq")
        expect(manager.name).toBe("aditya")

    })

    it('should support function in interface', function() {

        interface Person {
            name: string;
            sayHello(name: string): string
        }

        const person: Person = {
            name: "Aditya",
            sayHello(name) {
                return `Hello ${name}, My name is ${this.name}`
            },
        }

        expect(person.sayHello("Taufiq")).toBe("Hello Taufiq, My name is Aditya")

    })

    it('should support intersection type', function() {

        interface HasName {
            name: string
        }

        interface HasID {
            id: number
        }

        // kita bisa menggunakan extends untuk menggabungkan
        // beberapa interface menjadi satu.
        // namun jika pada interface baru tersebut tidak terdapat
        // tambahan object, maka kita bisa menggunakan intersection type
        // dengan menambahkan keyword &
        // interface Person extends HasName, HasID {
        // }

        type Domain = HasID & HasName

        const person: Domain = {
            id: 1,
            name: "Aditya"
        }

        expect(person.name).toBe("Aditya")

    })

    it('should support type assertion', function() {

        interface Person {
            id: number,
            name: string
        }

        const person: any = {
            id: 1,
            name: "Aditya"
        }

        // cast variable person as Person type
        const person2: Person = person as Person
        expect(person2.name).toBe("Aditya")
        
    })

});
