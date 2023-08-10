import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{

  listProducts: Product[] = []
  loading: boolean = false

  constructor(private _productService: ProductService){

  }

  ngOnInit(): void{
    this.getListProducts()
  }

  getListProducts(){
    this.loading = true;
    this._productService.getListProducts().subscribe((data: Product[])=>{
    this.listProducts = data
    this.loading = false
    })
  }
  deleteProduct(id: number){
    this.loading = true;
    this._productService.deleteProduct(id).subscribe(()=>{
    this.getListProducts();

    })
  
  }

  onDrop(event: CdkDragDrop<Product[]>) {
    moveItemInArray(this.listProducts, event.previousIndex, event.currentIndex);
  }
}

