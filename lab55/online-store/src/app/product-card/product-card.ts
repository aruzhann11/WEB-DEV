import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {

  @Input() product!: Product;

  currentImage: string = '';


  changeImage(image: string) {
    this.currentImage = image;
  }

  getStars(): number[] {
    return Array(Math.floor(this.product.rating)).fill(0);
  }

  getCategories(category: string){
    return category;
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    window.open(` https://wa.me/?text=Check out this product: {kaspi_link}
`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url={kaspi_link}&text={product_name}
`, '_blank');
  }
}
