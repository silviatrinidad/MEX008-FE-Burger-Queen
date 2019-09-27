import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getData(){
    return new Promise(((resolve, reject) => {
      this.http.get('assets/data/products.sjon')
    })
  })
}
}
