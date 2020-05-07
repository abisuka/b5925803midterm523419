import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormArray ,Validators } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  profileForm = new FormGroup({
    productType: new FormControl(''),
    id: new FormControl(''),
    name: new FormControl(''),
    detail: new FormControl(''),
    quantity : new FormControl('',[Validators.required,Validators.pattern('[0-9]')
  ,Validators.min(1),Validators.max(50)
  ]),
    price : new FormControl('',[Validators.required,Validators.pattern('[0-9]{1-100000}')]),
  });
  productForm = new FormGroup({
    
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  constructor() { }

  ngOnInit(): void {
  }

  
  get quantity(){
    return this.productForm.get('quantity');
  }
 
  get profilestatus(){
    return this.profileForm.status;
  }
}
