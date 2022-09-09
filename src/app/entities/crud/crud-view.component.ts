import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-crud-view',
  templateUrl: './crud-view.component.html',
})
export class crudViewComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public crud: any) {}
  ngOnInit(): void {}
}
