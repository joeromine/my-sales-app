import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier.dto';
import { lastValueFrom, Observable } from 'rxjs';


@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class SuppliersListComponent implements OnInit {
  suppliers!: Supplier[];
  supplierObservable!: Observable<Supplier[]> //I like this
  constructor(private supplierService: SupplierService) { }

  async ngOnInit(): Promise<void> {
    this.supplierObservable = this.supplierService.getAll();
    this.suppliers = await lastValueFrom(this.supplierObservable);
  }

}
