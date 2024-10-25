import { Student } from './entities/Student.ts';
import { Product } from './entities/Product.ts';

import { StudentFactory } from './factories/StudentFactory.ts';
import { ProductFactory } from './factories/ProductFactory.ts';

const studentService = StudentFactory.getInstance();
const productService = ProductFactory.getInstance();

const erick = new Student({ id: 1, name: 'Erick' })
const ana = new Student({ id: 2, name: 'Ana' })

const laptop = new Product({ id: 1, title: 'Laptop', price: 999.99 });

studentService.create(erick);
studentService.create(ana);

studentService.update(ana.id, new Student({ id: 2, name: 'Ana Silva' }));
studentService.delete(erick.id);

console.log("Students:");
for (const student of studentService.read()) {
    console.log(`ID: ${student.id}, Name: ${student.name}`);
}

productService.create(laptop);
console.log("Products:");
for (const product of productService.read()) {
    console.log(`ID: ${product.id}, Title: ${product.title}, Price: ${product.price}`);
}
