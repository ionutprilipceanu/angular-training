import { Component, OnInit } from '@angular/core';
import { PostService } from '..//..//services/post.service';
import { tap } from 'rxjs';

const users: { name: string; id: number }[] = [
  { name: 'John Doe', id: 1 },
  { name: 'Jane Doe', id: 2 },
  { name: 'Billy Doe', id: 3 },
];

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],
})
export class MyTestComponent implements OnInit {
  count = 0;
  userArray = users;
  inputValue = '';
  handleText = true;
  handleInputField = '';
  firstValue: number;
  secondValue: number;
  totalSum: number;
  myData: any;
  myData$: any;

  constructor(private myPostService: PostService) {}

  ngOnInit(): void {
    console.log(this.inputValue);

    this.myData$ = this.myPostService
      .getData()
      .pipe(tap((data: any) => (this.myData = data)));
  }

  increase() {
    this.count++;
  }

  decrese() {
    this.count--;
  }

  handleToggle() {
    this.handleText = !this.handleText;
  }

  handleSum() {
    this.totalSum = this.firstValue + this.secondValue;
  }
}
