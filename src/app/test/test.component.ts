import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  someFunction6(){
    console.log('Надо убрать')
  }

  someFunction1(){
    console.log('Надо оставить')
  }

  someFunction2(){
    console.log('Надо оставить')
  }

  someFunction3(){
    console.log('Надо оставить')
  }

  someFunction4(){
    console.log('Надо убрать')
  }

  someFunction5(){
    console.log('Надо убрать')
  }
}
