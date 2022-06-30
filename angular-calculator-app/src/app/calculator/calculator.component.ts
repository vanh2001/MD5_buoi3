import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cal() {
    // @ts-ignore
    const number1 = +document.getElementById('number1').value;
    // @ts-ignore
    const number2 = +document.getElementById('number2').value;
    // @ts-ignore
    alert('Tong: ' + (number1 + number2));
    // @ts-ignore
    $('#number1').val('');
    // @ts-ignore
    $('#number2').val('');
  }
}
