import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartsService } from 'src/app/shared/services/ls.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public counter: number = 0;
  public autoparts: any[] = [];
  public sum: number = 0;
  public fixedSum: number = 0;
  public isVisible: boolean = false;
  public isFormValid: boolean = false;
  public myForm!: FormGroup;

  constructor(
    private lsService: PartsService,
    private fb: FormBuilder // public http: PartsService
  ) {
    // $(".phone").mask("+375(99)-999-99-99");
  }

  ngOnInit(): void {
    this.autoparts = this.lsService.loadParts();
    console.log(this.autoparts);
    this.sumPrice();
    this.form();
    this.subscription();
  }

  sumPrice() {
    this.sum = this.autoparts.reduce((accum, parts) => accum + parts.price, 0);
    this.fixedSum = Number(this.sum.toFixed(2));
    console.log(this.fixedSum);
    this.counter = this.autoparts.length;
  }

  deleteParts(indexPart: number) {
    this.autoparts.forEach((part, i) => {
      if (indexPart == i) {
        this.lsService.deletePart(indexPart);
        this.autoparts.splice(indexPart, 1);
      }
    });
    this.sumPrice();
  }

  showMessage() {
    if (this.counter == 0) return !this.isVisible;
    else return this.isVisible;
  }

  hideDiv() {
    if (this.counter == 0) return this.isVisible;
    else return !this.isVisible;
  }

  form() {
    this.myForm = this.fb.group({
      userName: [
        null,
        [Validators.required, Validators.pattern(/^[0-9a-z_а-яА-ЯЁё]{4,}/i)],
      ],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i),
        ],
      ],
      phoneNumber: [
        '+375',
        [
          Validators.required,
          Validators.pattern(/^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/),
        ],
      ],
      city: [
        null,
        [Validators.required, Validators.pattern(/^[0-9a-z_а-яА-ЯЁё]{4,}/i)],
      ],
      deliveryAddress: [null],
    });
  }

  onSubmit() {
    console.log('myForm', this.myForm.value);
    let form = {
      userName: this.myForm.controls['userName'].value,
      email: this.myForm.controls['email'].value,
      phoneNumber: this.myForm.controls['phoneNumber'].value,
      city: this.myForm.controls['city'].value,
      deliveryAddress: this.myForm.controls['deliveryAddress'].value,
      parts: this.autoparts,
      fullPrice: this.fixedSum,
    };

    this.lsService.sendEmail('http://localhost:3000/sendmail', form).subscribe({
      next: (data) => {
        let result: any = data;
        console.log(result);
        console.log(`!!! MAIL SEND successfully!!!`);
      },
      error: (err) => console.log(err),
    });

    // this.myForm.reset();
  }

  private subscription(): void {
    this.myForm.valueChanges.subscribe(
      () => (this.isFormValid = this.myForm.valid)
    );
  }
}
