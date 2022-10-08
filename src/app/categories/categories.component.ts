import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Category } from './category.dto';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Category>;
  dataSource!: MatTableDataSource<Category>;
  showForm: boolean = false;
  category!: Category;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description', 'actions'];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
      this.refreshData()
  }

  onNewCategoryClick(){
    this.category = {id: 0, description: '', name: ''};
    this.showForm= true;
  }
  onBack(){
    this.showForm = false;
    this.refreshData();
  }

  refreshData(){
    this.categoryService.getAll().subscribe(
      (categories: Category[]) =>{

        this.dataSource = new MatTableDataSource(categories);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      }
    )
  }

  onSave(category: Category){
    this.categoryService.save(category).subscribe(()=>{
      this.showForm = false;
      this.refreshData();
    })
  }
  onEditCategoryClick(category: Category): void{
    this.showForm = true;
    this.category = category;
  }
  onDelete(category: Category){
    if(confirm(`Delete "${category.name}" with id ${category.id} ?`)){
      this.categoryService.delete(category.id).subscribe(()=>{
        this.refreshData()
      })
    }

  }
}
