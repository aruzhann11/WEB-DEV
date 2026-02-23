import { Injectable } from '@angular/core';
import { Product } from '../../product.model';
import { Category } from '../../category.model';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  categories: Category[]=[
    { id: 1, name: 'Smartphones'},
    { id: 2, name: 'Phone Accessories'},
    { id: 3, name: 'Smart Watch'},
    { id: 4, name: 'Gadgets'}
  ]

  products: Product[]=[
    {
      id: 1,
      name:' Apple iPhone 17 Pro ',
      description:'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      price:819978,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbd/p1b/64464410.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      likes:1006,
      categoryId: 1
    },
      {
      id: 2,
      name:'Apple iPhone 15',
      description:'Смартфон Apple iPhone 15 128Gb черный',
      price:402807,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
      likes:4450,
      categoryId: 1
    },

      {
      id: 3,
      name:'Apple iPhone 13',
      description:'Смартфон Apple iPhone 13 128Gb белый',
      price:330884,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4b/h84/64209123573790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000',
      likes:4843,
      categoryId: 1
    },
      {
      id: 4,
      name:'Samsung Galaxy A16',
      description:'Смартфон Samsung Galaxy A16 8 ГБ/256 ГБ серый',
      price:169867,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pe3/p08/10325160.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1b/p09/10325162.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa8/p09/10325167.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/samsung-galaxy-a16-8-gb-256-gb-seryi-130609812/?c=750000000',
      likes:1178,
      categoryId: 1
    },
    {
      id: 5,
      name:'Apple iPhone Air',
      description:'Смартфон Apple iPhone Air 256Gb голубой',
      price:575580,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pb8/p40/64171189.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbf/p3d/64171195.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p86/p3d/64171197.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-iphone-air-256gb-goluboi-145468599/?c=750000000',
      likes:59,
      categoryId: 1
    },
     {
      id: 6,
      name:'Apple 20W USB-C Power Adapter',
      description:'Зарядное устройство Apple 20W USB-C Power Adapter белый',
      price:2963,
      rating:4.9,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/haa/h98/63961936723998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h81/h1a/63961938624542.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
      likes:12424,
      categoryId: 2
    },
      {
      id: 7,
      name:'A-case для Apple iPhone 15',
      description:'Стекло A-case для Apple iPhone 15 черный',
      price:850,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p30/pd4/1316888.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa9/p4a/1316889.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6c/p00/1316890.jpeg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/steklo-a-case-dlja-apple-iphone-15-a-case-dlja-apple-iphone-15-chernyi-124414260/?c=750000000',
      likes:37,
      categoryId: 2
    },

      {
      id: 8,
      name:'Xiaomi Redmi Power Bank 20000 мАч 18 Вт',
      description:'Внешний аккумулятор Xiaomi Redmi Power Bank 20000 мАч 18 Вт черный',
      price:4010,
      rating:4.3,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h34/h07/63928978014238.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h5b/63928980275230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h08/h51/63928983191582.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/vneshnii-akkumuljator-xiaomi-redmi-power-bank-20000-mach-18-vt-chernyi-100322086/?c=750000000',
      likes:2960,
      categoryId: 2
    },
      {
      id: 9,
      name:'Попсокет',
      description:'Попсокет 002 розовый',
      price:57,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pfd/p6d/47574716.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa9/p6d/47574719.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p04/p6b/47574722.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/popsoket-002-rozovyi-122283935/?c=750000000',
      likes:1082,
      categoryId: 2
    },
    {
      id: 10,
      name:'Чехол для Apple iPhone 13',
      description:'Чехол для Apple iPhone 13 прозрачный',
      price:500,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h4c/he3/86370186952734.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4c/he3/86370186952734.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb9/h55/86370187149342.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-prozrachnyi-120762119/?c=750000000',
      likes:58,
      categoryId: 2
    },
     {
      id: 11,
      name:'Смарт-часы YUNTEKO Gi20',
      description:'Смарт-часы YUNTEKO Gi20 47 мм розовый-розовый',
      price:15888,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h49/h9a/84355202383902.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha0/h23/84353783431198.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h24/h3f/84355202711582.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      likes:216,
      categoryId: 3
    },
      {
      id: 12,
      name:'Apple Watch Series 11',
      description:'Смарт-часы Apple Watch Series 11 M/L 46 мм черный',
      price:217890,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p89/pba/64468961.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p6d/pba/64468962.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p50/pba/64468963.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-watch-series-11-m-l-46-mm-chernyi-145555823/?c=750000000',
      likes:100,
      categoryId: 3
    },

      {
      id: 13,
      name:'Смарт-часы YUNTEKO i58',
      description:'Смарт-часы YUNTEKO i58 44 мм серебристый-белый',
      price:25885,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h51/h78/86126490877982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h48/hcb/86587812937758.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/hf9/86587813134366.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/yunteko-i58-44-mm-serebristyi-belyi-112859075/?c=750000000',
      likes:95,
      categoryId: 3
    },
      {
      id: 14,
      name:'Смарт-часы Margo GPS PRO2',
      description:'Смарт-часы Margo GPS PRO2 45 мм розовый',
      price:17800,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p33/p8c/44066722.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc9/p88/44066723.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5f/p85/44066724.jpeg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/samsung-galaxy-a16-8-gb-256-gb-seryi-130609812/?c=750000000',
      likes:67,
      categoryId: 3
    },
    {
      id: 15,
      name:'Apple Watch SE GPS Gen.2 2024',
      description:'Смарт-часы Apple Watch SE GPS Gen.2 2024 M/L 40 мм бежевый-бежевый',
      price:139000,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p1a/p83/5495067.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p37/p83/5495068.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p53/p83/5495069.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-m-l-40-mm-bezhevyi-bezhevyi-129157052/?c=750000000',
      likes:88,
      categoryId: 3
    },
     {
      id: 16,
      name:'Apple AirTag',
      description:'Bluetooth-трекер Apple AirTag (4 pack) белый',
      price:43117,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h33/h3b/64315450163230.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/h3f/64315485126686.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc0/h70/64315490369566.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-airtag-4-pack-belyi-101701962/?c=750000000',
      likes:101,
      categoryId: 4
    },
      {
      id: 17,
      name:'Huawei Band 10',
      description:'Фитнес-браслет Huawei Band 10 белый',
      price:14890,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pc3/p8a/45288129.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p57/p88/45288130.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pae/p87/45288136.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/huawei-band-10-belyi-138086715/?c=750000000',
      likes:46,
      categoryId: 4
    },

      {
      id: 18,
      name:'ONYX BOOX Go 6',
      description:'Электронная книга ONYX BOOX Go 6 белый',
      price:89990,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pc0/p95/55123111.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa2/p96/55123119.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4d/p96/55123116.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/onyx-boox-go-6-belyi-142956196/?c=750000000',
      likes:76,
      categoryId: 4
    },
      {
      id: 19,
      name:'Baofeng UV-5R 8W',
      description:'Рация Baofeng UV-5R 8W',
      price:9498,
      rating:4.5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/heb/h9a/64510804525086.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h70/64510806982686.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h60/hda/64510808784926.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/ratsija-baofeng-uv-5r-8w-101179267/?c=750000000',
      likes:39,
      categoryId: 4
    },
    {
      id: 20,
      name:'Oura Ring 4 10',
      description:'Смарт-кольцо Oura Ring 4 10 серебристый',
      price:219018,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p42/p04/54629679.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p47/p67/64285231.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p63/p67/64285232.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/smart-kol-tso-oura-ring-4-10-serebristyi-142956106/?c=750000000',
      likes:8,
      categoryId: 4
    },
    
    
  ]
  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  
}
