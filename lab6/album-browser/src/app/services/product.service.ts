import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
   {
      id: 1,
      name:' Apple iPhone 17 Pro ',
      description:'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      price:819978,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
     category:'smartphones'
    },
      {
      id: 2,
      name:'Apple iPhone 15',
      description:'Смартфон Apple iPhone 15 128Gb черный',
      price:402807,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      category:'smartphones'
    },

      {
      id: 3,
      name:'Apple iPhone 13',
      description:'Смартфон Apple iPhone 13 128Gb белый',
      price:330884,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
     category:'smartphones'
    },
      {
      id: 4,
      name:'Samsung Galaxy A16',
      description:'Смартфон Samsung Galaxy A16 8 ГБ/256 ГБ серый',
      price:169867,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pe3/p08/10325160.png?format=gallery-medium',
     
      category:'smartphones'
    },
    {
      id: 5,
      name:'Apple iPhone Air',
      description:'Смартфон Apple iPhone Air 256Gb голубой',
      price:575580,
      rating:5,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pb8/p40/64171189.png?format=gallery-medium',
     
  
      category:'smartphones'
    },
  ];



  getProductsByCategory(category: string) {
    return this.products.filter(p => p.category === category);
  }

  getProduct(id: number) {
    return this.products.find(p => p.id === id);
  }
}