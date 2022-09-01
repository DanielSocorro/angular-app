import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private http: HttpClient ) { }

  static convertArrayItemsToUppercase(array) {
    return array.map((title) => title.toUppercase());
  }

}
