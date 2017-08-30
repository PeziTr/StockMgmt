import { AddCategoryDb } from './../service/add-category-db';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { RefreshService } from './../service/refresh-service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  providers: [AddCategoryDb]
})
export class AddCategoryComponent implements OnInit {

  title = 'Adding Category Details';
   
  public categoryDetails: FormGroup;

  constructor(private addCategoryDb: AddCategoryDb, private refreshService: RefreshService) { }

  ngOnInit() {
    this.categoryDetails = new FormGroup({
      categoryName: new FormControl()
    })
  }

  public postCategoryData() {
    let categoryList = (String)(this.categoryDetails.value.categoryName).split('\n');
    categoryList.forEach(element => {
      this.addCategoryDb.postCategory({categoryName: element}) //, parentId:''
      .subscribe(res => {
        console.log(res);
        if (res.status === 201) {
          console.log("Success");
          alert("Category added successfully in DB");
          this.refreshService.refresh.emit();
        } else {
          console.log("Failed")
        }
      });
    });
    
  }

}
