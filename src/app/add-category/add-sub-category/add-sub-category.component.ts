import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { GetCategoryDb } from './../../service/get-category-db';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css'],
  providers: [GetCategoryDb]
})

export class AddSubCategoryComponent implements OnInit {

  title = 'Adding Sub-Category Details';
  public categoryObj;

  public subCategoryDetails: FormGroup;

  constructor(private getCategoryDb: GetCategoryDb) { }

  ngOnInit() {
    this.getCategory();
    this.subCategoryDetails = new FormGroup({
      categoryName: new FormControl(), 
      subCategoryName: new FormControl()
    })
  }

  public postSubCategoryData() {
    console.log(this.subCategoryDetails);
    console.log("Category Name: "+this.subCategoryDetails.value.categoryName);
    console.log("Category Id: "+this.subCategoryDetails.value.parentId);
    console.log(this.subCategoryDetails.value)
    console.log("Subcategory Name: "+this.subCategoryDetails.value.subCategoryName);
  }

  public getCategory() {
    console.log("inside getCategory");
    this.getCategoryDb.getCategory().subscribe(
      (value) => {
        console.log("Data is :" + JSON.stringify(value.json().rows));
        this.categoryObj = value.json().rows;
      }, (error) => {
        console.log("Error is :" + error)
      }
    );
  }
}
