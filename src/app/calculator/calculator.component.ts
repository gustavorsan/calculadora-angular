import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1 = '';
  num2 = '';
  operator = '';

  result = '';

  calculatorService:CalculatorService; 
  constructor() { this.calculatorService = new CalculatorService}

  ngOnInit(): void {
  }

  operation(){
    return this.result !== '' ? `${this.result}` : `${this.num1} ${this.operator} ${this.num2}` 
  }

  handleNumberClick(num:string){
    if(this.result !== ''){
      this.clear()
    }

    if(this.operator === ''){
      this.num1+= num; 
    }else{
     this.num2+=num;
    }
  }

  handleOperationClick(op:string){
    if(this.num1 !== ''){
      this.operator = op;
    }
  }

  handleZeroClick(){
    if(this.num1 !== '' && this.operator === ''){
      this.num1+= '0';
    }else if(this.num2 !== '' && this.operator !== ''){
      this.num2+= '0';
    }
  }

  handleFractionClick(){
    if(this.num1 !== '' && this.operator === '' && this.num1.match(/^[0-9]+$/)){
      this.num1+= '.';
    }else if(this.num2 !== '' && this.operator !== ''&& this.num2.match(/^[0-9]+$/)){
      this.num2+= '.';
    }
  }

  clear(){
    this.result = '';
    this.num1 = '';
    this.num2 = '';
    this.operator = '';
  }


  handleEqualClick(){
    if(this.num2 !== ''){
        this.result = this.calculatorService.calculate(Number(this.num1), this.operator, Number(this.num2));
    }
  }
}
