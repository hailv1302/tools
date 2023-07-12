import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  @Input() listCate: string[] = [];
  @Input() nameCate: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
