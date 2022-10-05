import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  signUpForm!: FormGroup
  constructor(private fb:FormBuilder) {
    this.signUpForm = this.fb.group({
      uname : ['',[Validators.required]],
      email : ['',[Validators.required]],
      password : ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  signup(){
    console.warn(this.signUpForm.value);
    
  }

}
