import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})



export class UpdateComponent implements OnInit {
  item:Product;
  ProductForm:FormGroup;
  constructor(private appservice:AppService,private fb:FormBuilder){
    this.ProductForm=fb.group({
      id:new FormControl([Validators.required]),
      title: new FormControl("",[Validators.required]),
      price: new FormControl([Validators.required]),
      quantity: new FormControl([Validators.required]),
      color: new FormControl("",[Validators.required]),
      expiryDate: new FormControl("",[Validators.required]),
      inStock: new FormControl(true,[Validators.required]),

    })
   }

  ngOnInit(): void {
  }
  updateData(){
    const a= this.ProductForm.controls['id'].value;

    console.log(a);
    this.appservice.putProduct(a,this.ProductForm.value).subscribe(data=>{});

  }
  

}