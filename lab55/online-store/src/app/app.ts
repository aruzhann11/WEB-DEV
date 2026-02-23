import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Category } from '../category.model';
import { Product } from '../product.model';
import { ProductListComponent } from './product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.filteredProducts = this.productService.getProductsByCategory(id);
  }
}