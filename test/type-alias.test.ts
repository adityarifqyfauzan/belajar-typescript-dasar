import { Category, Product } from "../src/type-alias";

describe('Type Alias', function() {
    it('should support in ts', function() {
        const category: Category = {
            id: 1,
            name: "Handphone"
        }

        const product: Product = {
            id: "8735DBA6-3AC3-40DD-8DAC-3886047F87C0",
            name: "Samsung S32 Ultra",
            price: 18000000,
            category: category
        }

        console.log(category);
        console.log(product);
        
    });

    // penggunaan union type untuk type alias
});