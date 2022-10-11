import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { Supplier } from '../supplier.dto';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers-show',
  templateUrl: './suppliers-show.component.html',
  styleUrls: ['./suppliers-show.component.css']
})
export class SuppliersShowComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private supplierService: SupplierService
    ) { }
  id!: Number;
  supplierObservable!: Observable<Supplier>;
  supplier!: Supplier;


  async ngOnInit() {
    this.id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.supplierObservable = this.supplierService.getById(this.id);
    this.supplier = await lastValueFrom(this.supplierObservable);

  }

}
