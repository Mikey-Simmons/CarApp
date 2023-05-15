import { Component, OnInit } from '@angular/core';
import { Car } from './Car';
import { CarService } from './car.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars!: Car[];
  successMessage:any;
  errorMessage: any;

  constructor(private fb: FormBuilder, private carService: CarService){}
  carForm = this.fb.group({
    make: ["", Validators.required],
    model:["", Validators.required],
    year: ["", Validators.required],
    img_url: ["", Validators.required]
  })
  getCars(){
    this.carService.getCars().subscribe(
      cars=> this.cars = cars,
      error=> this.errorMessage = <any>error
    );
  
  }
  addCar(){
    this.successMessage = null;
    this.errorMessage =null;
    this.carService.AddCar(this.carForm.value).subscribe(
      (success)=> {this.successMessage = success.message},
      (error)=> {this.errorMessage = error.message}
    )
    this.getCars()
  }
  ngOnInit(){
    this.getCars()
  }
  
}
