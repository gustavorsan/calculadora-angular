import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calculate(num1:number,op:string,num2:number){
    let val:string;
    switch(op){
      case '/': val = (num1 / num2).toString(); break;
      case '+': val = (num1 + num2).toString(); break;
      case '*': val = (num1 * num2).toString(); break;
      case '-': val = (num1 - num2).toString(); break;
      default : val = ''; break;
    }
    
    return val
  }
}
