import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: [ './error.component.css'
  ]
})
export class ErrorComponent implements OnInit {

  year = new Date().getFullYear()

  constructor() { }

  ngOnInit(): void {
  }

}
