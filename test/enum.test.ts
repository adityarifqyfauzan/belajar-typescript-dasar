import { Customer, CustomerType } from "../src/enum";

describe('Enum', function() {
    it('should support in ts', function() {

        const customer: Customer = {
            id: 1,
            name: "Aditya",
            type: CustomerType.PLATINUM
        }

        console.log(customer);

    });
});