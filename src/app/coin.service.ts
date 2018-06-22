import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class CoinService {
  result: any;
  constructor(private http: HttpClient) { }
  addCoin(name, price) {
    const uri = 'http://localhost:2000/coins/add';
    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getCoins() {
    const uri = 'http://localhost:2000/coins';
    return this
            .http
            .get(uri);
  }

  editCoin(id) {
    const uri = 'http://localhost:2000/coins/edit/' + id;
    return this
            .http
            .get(uri);
  }

  updateCoin(name, price, id) {
    const uri = 'http://localhost:2000/coins/update/' + id;

    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteCoin(id) {
    const uri = 'http://localhost:2000/coins/delete/' + id;

        return this
            .http
            .get(uri);
  }
}
