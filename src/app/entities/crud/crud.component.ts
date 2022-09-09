import { CRUDService } from './crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CRUDComponent implements OnInit {
  constructor(private crudService: CRUDService) {}

  ngOnInit(): void {
    this.crudService.queryCrud().subscribe((res) => {
      if (res.body) {
        console.log(res.body);
      }
    });
  }
}
