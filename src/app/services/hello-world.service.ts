import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  names = ['Welcome To Angular Dashboard'];

  constructor(){}
}
