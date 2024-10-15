import { ProductRepository } from './../repositories/ProductRepository.ts';
import { ProductService } from './../services/ProductService.ts';

export class ProductFactory {
    static getInstance() {
        const productRepository = new ProductRepository();
        const productService = new ProductService(productRepository);
        return productService;
    }
}

