import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category.dto';

@Component({
  selector: 'category-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  @Output() back = new EventEmitter()
  @Output() save = new EventEmitter();
  @Input() set category(c: Category){
    this.categoryForm.setValue(c)
  };

  categoryForm = this.fb.group({
    id: 0,
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ''
  })

  
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
