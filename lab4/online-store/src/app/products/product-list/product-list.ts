import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  
  products: Product[] = [
    {
      id: 1,
      name: 'Dyson Airwrap HS05',
      description: 'Dyson Airwrap HS05 Long с дорожным чехлом и расческами стайлер синий, медный',
      price: 181500,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hd6/82992821239838.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h73/hc9/82992821764126.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/pdb/3378209.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Мощный Android-смартфон с S-Pen и камерой 200MP.',
      price: 659000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h16/h23/84963123527710.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000'
    },
    {
  id: 3,
  name: 'Apple AirPods 4',
  description: 'Наушники Apple AirPods 4 белый',
  price: 61875,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000'
},
{
  id: 4,
  name: 'MacBook Air 13 M2 256GB',
  description: 'Лёгкий и мощный ноутбук Apple с процессором M2 и автономностью до 18 часов.',
  price: 799990,
  rating: 4.9,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
},
{
  id: 5,
  name: 'Sony PlayStation 5',
  description: 'Игровая консоль нового поколения с поддержкой 4K и SSD высокой скорости.',
  price: 200,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
},
{
  id: 6,
  name: 'Apple Watch Series 9',
  description: 'Умные часы с улучшенной производительностью и расширенными функциями здоровья.',
  price: 249990,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h30/h30/83874225586206.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h91/hae/83874225651742.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h77/hcd/83874225717278.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-rozovyi-113398459/?c=750000000'
},
{
  id: 7,
  name: 'Samsung 55" 4K Smart TV',
  description: 'Телевизор с разрешением 4K UHD, Smart TV и поддержкой HDR.',
  price: 399990,
  rating: 4.6,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h5e/85887766167582.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h9f/h2f/85887766233118.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h95/hf0/85887766298654.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/samsung-ue55du7100uxce-140-sm-chernyi-118907988/?c=750000000'
},
{
  id: 8,
  name: 'Dyson V15 Detect',
  description: 'Беспроводной пылесос с лазерной подсветкой и высокой мощностью всасывания.',
  price: 459990,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/pdc/p32/77965057.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pf8/p32/77965058.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p75/p00/68409016.bin?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000'
},
{
  id: 9,
  name: 'Lenovo Legion 5 Gaming Laptop',
  description: 'Игровой ноутбук с видеокартой RTX и экраном 144 Гц.',
  price: 699990,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p7e/p5d/89085369.jpeg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/pe1/pc3/89085378.jpeg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p4a/pc7/89085379.jpeg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pcc/pe6/89085382.jpeg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/lenovo-loq-15-6-full-hd-gaming-laptop-15-6-16-gb-ssd-512-gb-win-11-home-83jc0olyus-152920147/?c=750000000'
},
{
  id: 10,
  name: 'Bose QuietComfort 45',
  description: 'Беспроводные наушники с активным шумоподавлением.',
  price: 199990,
  rating: 4.6,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/hb0/h6c/64374649651230.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/haf/h7a/64374651715614.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h40/h36/64374654369822.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-45-chernyi-102978612/?c=750000000'
}

  ];
}
