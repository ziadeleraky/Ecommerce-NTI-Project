import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css'],
})
export class UpdateProductsComponent implements OnInit {
  id: any;
  imgFile: any = null;
  isSubmitted: boolean = false;
  updateProducts = new FormGroup({
    title: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    categories: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    productImg: new FormControl('', [Validators.required]),
  });
  constructor(private activated: ActivatedRoute, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.id = this.activated.snapshot.paramMap.get('id');
  }

  get productData() {
    return this.updateProducts.controls;
  }

  handleImg(e: any) {
    this.imgFile = e.target.files;
    console.log(this.imgFile);
  }

  handleUpdateProducts() {
    this.isSubmitted = true;
    if (this.imgFile != null) {
      let formData = new FormData();
      formData.append('title', this.updateProducts.controls['title'].value);
      formData.append('desc', this.updateProducts.controls['desc'].value);
      formData.append(
        'categories',
        this.updateProducts.controls['categories'].value.split(' ')
      );
      formData.append(
        'size',
        this.updateProducts.controls['size'].value.split(' ')
      );
      formData.append('price', this.updateProducts.controls['price'].value);
      formData.append('productImg', this.imgFile[0]);
      this.auth.updateProducts(formData, this.id).subscribe((res) => {
        console.log(res);
        this.router.navigate(['dashboard'])
      });
      // console.log(this.updateProducts.controls['title'].value);
      // console.log(this.updateProducts.controls['desc'].value);
      // console.log(this.updateProducts.controls['categories'].value.split(' '));
      // console.log(this.updateProducts.controls['size'].value.split(' '));
      // console.log(this.updateProducts.controls['price'].value);
      // console.log(this.imgFile[0]);
    }
  }
}
