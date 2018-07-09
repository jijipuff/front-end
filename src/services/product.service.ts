import { Product } from "../models/product";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ProductService {

    private products: Array<Product>;

    constructor(private http: Http) {
        this.products = [];
    }

    getAllProducts() {
        this.products = [];

            var product1: Product = new Product();
            product1.id = 1;
            product1.name = "Product1";
            product1.description = "Cool Product 1";
            product1.price = 500;

            var product2: Product = new Product();
            product2.id = 2;
            product2.name = "Product2";
            product2.description = "Cool Product 2";
            product2.price = 600;

            var product3: Product = new Product();
            product3.id = 3;
            product3.name = "Product3";
            product3.description = "Cool Product3";
            product3.price = 700;

            this.products.push(product1);
            this.products.push(product2);
            this.products.push(product3);

            return this.products;
    }
}




