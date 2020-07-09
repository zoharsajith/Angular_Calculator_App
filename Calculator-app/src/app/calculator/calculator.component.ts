import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

	//create global variables
	currentNumber ='0';
	firstOperand = null;
	operator = null;
	waitForSecondNumber = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  //used to get the current Number
  public getNumber(v: string){
  	console.log(v);
  	if(this.waitForSecondNumber){
  	this.currentNumber = v;
  	this.waitForSecondNumber = false;
  	}else{
  		this.currentNumber === '0'? this.currentNumber =v: this.currentNumber += v;
  	}
  }

  //appends the decimal point to the current number 
  getDecimal(){
  	if(!this.currentNumber.includes('.')){
  	this.currentNumber += '.';
  	}
  }

  //performs the calulation based on the operator
  private doCalculation(op, secondOp){
  	switch(op){
		case '+':
		return this.firstOperand += secondOp;
		case '-':
		return this.firstOperand -= secondOp;
		case '*':
		return this.firstOperand *= secondOp;
		case '/':
		return this.firstOperand /= secondOp;
		case '=':
		return secondOp;  	
	  }
  }

  //function to get the perform the operation
  public getOperation(op: string){
  	console.log(op);

  	if(this.firstOperand === null){
  		this.firstOperand = Number(this.currentNumber);
  	}else{
  		const result = this.doCalculation(this.operator, Number(this.currentNumber))
  		this.currentNumber = String(result);
  		this.firstOperand = result;
  	}
  	this.operator = op;
  	this.waitForSecondNumber = true;
  	console.log(this.firstOperand);
  }

  //clear out all inputs
  public clear(){
  	this.currentNumber = '0';
  	this.firstOperand = null;
  	this.operator = null;
  	this.waitForSecondNumber = false;
  }
}
