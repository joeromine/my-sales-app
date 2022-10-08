import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category.dto';

@Component({
  selector: 'category-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {



  categoryForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('')
  })
  constructor() { }
  @Output() back = new EventEmitter()
  @Output() save = new EventEmitter();
  @Input() set category(c: Category){
    this.categoryForm.setValue(c)
  };
  
  //(category: Category){ this.categoryForm.setValue(category)}
  ngOnInit(): void {
  }

  onSubmit(){
    this.save.emit(this.categoryForm.value as Category)

    console.log('Submit', this.categoryForm.value as Category)
  }

  onBack(){
    this.back.emit()
  }

}
