import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from 'src/app/ViewModels/DiscountOffers.enum';
import { ICategory } from 'src/app/ViewModels/ICategory';
import { IProduct } from 'src/app/ViewModels/IProduct';
import { Branch, Store } from 'src/app/ViewModels/Store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  noDiscount: DiscountOffers = DiscountOffers.NoDiscount;
  discount:DiscountOffers;
  store:Store;
  clientName: string;
  categories: ICategory[];
  selectedCategoryId: number;
  productList: IProduct[];
  columns: string[];
  isPurchased: boolean = false;
  constructor() {
    this.discount = DiscountOffers.Discount10;
    this.store = new Store("Adidas", [new Branch(1, "Boulak El Dakrour", "Boulak El Dakrour, Giza Governorate"), new Branch(2, "Mall of Arabia", "Mall of Arabia, 6th of October City")], "https://static.vecteezy.com/system/resources/thumbnails/010/994/239/small_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg");
    this.clientName = "";
    this.categories = [
      {id: 1, name: "Clothes"},
      {id: 2, name: "Pants"},
      {id: 3, name: "Shoes"},
      {id: 4, name: "Hats"},
    ];
    this.selectedCategoryId = 1;
    this.productList = [
      {id: 1, name: "T-Shirt", price: 200, quantity: 1, img: "https://www.pngitem.com/pimgs/m/146-1468479_t-shirt-png-image-t-shirt-png-transparent.png", categoryID: 1},
      {id: 2, name: "Pants", price: 300, quantity: 1, img: "https://www.pngitem.com/pimgs/m/146-1468479_t-shirt-png-image-t-shirt-png-transparent.png", categoryID: 2},
      {id: 3, name: "Shoes", price: 500, quantity: 1, img: "https://www.pngitem.com/pimgs/m/146-1468479_t-shirt-png-image-t-shirt-png-transparent.png", categoryID: 3},
      {id: 4, name: "Hat", price: 100, quantity: 1, img: "https://www.pngitem.com/pimgs/m/146-1468479_t-shirt-png-image-t-shirt-png-transparent.png", categoryID: 4},
    ];
    this.columns = Object.keys(this.productList[0]);
  }

  setSelectCategory(categoryId: number){
    this.selectedCategoryId = categoryId;
  }

  setIsPurchased(flag: boolean){
    this.isPurchased = this.clientName?flag:false;
  }

  setUserName(event: Event){
    this.clientName = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }

}
