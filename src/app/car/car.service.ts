import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from './Car';
import {Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsUrl = 'http://localhost:3000/cars';
  constructor(private http: HttpClient) { }
  getCars(): Observable<Car[]>{
    return this.http.get<Car[]>(
      this.carsUrl
    )
  
  }
  AddCar(data: any): Observable<any>{
    console.log("testing123")
    return <Observable<any>> this.http.post(this.carsUrl,data )
  }
}
