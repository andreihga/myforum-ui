import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../services/question.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories: any;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getMostPopularCategories();
  }

  getMostPopularCategories(){
    this.questionService.getPopularCategories().subscribe(
      data => {
        this.categories = data;
      },
      error => console.log(error),
      () => console.log('categories brought')
    );
  }

}
