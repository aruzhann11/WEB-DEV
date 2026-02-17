import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  
  @Input() product!: Product;

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro 256GB',
      description: 'Флагманский смартфон Apple с чипом A17 Pro. Отличная камера и премиальный дизайн.',
      price: 699000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h8d/83786086703134.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h8d/83786086703134.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h47/hc1/83786086735902.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h11/h1b/83786086768670.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-113138'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Мощный Android-смартфон с S-Pen и камерой 200MP.',
      price: 659000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/h8c/84892748251166.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/h8c/84892748251166.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h67/h11/84892748283934.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc4/h5e/84892748316702.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-112233'
    },
    {
  id: 3,
  name: 'Xiaomi 13T Pro 256GB',
  description: 'Производительный смартфон с AMOLED-дисплеем 144 Гц и мощным процессором MediaTek.',
  price: 349990,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h1b/84700000000001.jpg',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h5e/h1b/84700000000001.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h5e/h1b/84700000000001.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h5e/h1b/84700000000001.jpg'
  ],
  link: 'https://kaspi.kz/shop/p/xiaomi-13t-pro-256gb-111111'
},
{
  id: 4,
  name: 'MacBook Air 13 M2 256GB',
  description: 'Лёгкий и мощный ноутбук Apple с процессором M2 и автономностью до 18 часов.',
  price: 799990,
  rating: 4.9,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h1c/84600000000002.jpg',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h21/h1c/84600000000002.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h21/h1c/84600000000002.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h21/h1c/84600000000002.jpg'
  ],
  link: 'https://kaspi.kz/shop/p/macbook-air-13-m2-256gb-222222'
},
{
  id: 5,
  name: 'Sony PlayStation 5',
  description: 'Игровая консоль нового поколения с поддержкой 4K и SSD высокой скорости.',
  price: 329990,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h5b/84500000000003.jpg',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h32/h5b/84500000000003.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h32/h5b/84500000000003.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h32/h5b/84500000000003.jpg'
  ],
  link: 'https://kaspi.kz/shop/p/sony-playstation-5-333333'
},
{
  id: 6,
  name: 'Apple Watch Series 9',
  description: 'Умные часы с улучшенной производительностью и расширенными функциями здоровья.',
  price: 249990,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h22/84400000000004.jpg',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h11/h22/84400000000004.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h11/h22/84400000000004.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h11/h22/84400000000004.jpg'
  ],
  link: 'https://kaspi.kz/shop/p/apple-watch-series-9-444444'
},
{
  id: 7,
  name: 'Samsung 55" 4K Smart TV',
  description: 'Телевизор с разрешением 4K UHD, Smart TV и поддержкой HDR.',
  price: 399990,
  rating: 4.6,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h11/84300000000005.jpg',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h41/h11/84300000000005.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h41/h11/84300000000005.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h41/h11/84300000000005.jpg'
  ],
  link: 'https://kaspi.kz/shop/p/samsung-55-4k-tv-555555'
},
{
  id: 8,
  name: 'Dyson V15 Detect',
  description: 'Беспроводной пылесос с лазерной подсветкой и высокой мощностью всасывания.',
  price: 459990,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h77/h11/84200000000006.jpg',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h77/h11/84200000000006.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h77/h11/84200000000006.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h77/h11/84200000000006.jpg'
  ],
  link: 'https://kaspi.kz/shop/p/dyson-v15-detect-666666'
},
{
  id: 9,
  name: 'Lenovo Legion 5 Gaming Laptop',
  description: 'Игровой ноутбук с видеокартой RTX и экраном 144 Гц.',
  price: 699990,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/h66/84100000000007.jpg',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h55/h66/84100000000007.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h55/h66/84100000000007.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h55/h66/84100000000007.jpg'
  ],
  link: 'https://kaspi.kz/shop/p/lenovo-legion-5-777777'
},
{
  id: 10,
  name: 'Bose QuietComfort 45',
  description: 'Беспроводные наушники с активным шумоподавлением.',
  price: 199990,
  rating: 4.6,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h12/h34/84000000000008.jpg',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h12/h34/84000000000008.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h12/h34/84000000000008.jpg',
    'https://resources.cdn-kaspi.kz/img/m/p/h12/h34/84000000000008.jpg'
  ],
  link: 'https://kaspi.kz/shop/p/bose-quietcomfort-45-888888'
}

  ];
}
