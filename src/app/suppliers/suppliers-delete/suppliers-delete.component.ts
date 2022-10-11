import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { Supplier } from '../supplier.dto';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers-delete',
  templateUrl: './suppliers-delete.component.html',
  styleUrls: ['./suppliers-delete.component.css']
})
export class SuppliersDeleteComponent implements OnInit {

  constructor(private supplierService: SupplierService,
    private route: ActivatedRoute,
     private router: Router) { }

      supplier!: Supplier;
     supplierObservable!: Observable<Supplier>;

  async ngOnInit(){
    const id: Number = +(this.route.snapshot.paramMap.get('id') || 0)
    this.supplierObservable = this.supplierService.getById(id);
     this.supplier = await lastValueFrom(this.supplierObservable);

  }


  async confirmDelete(){
    this.supplierObservable = this.supplierService.delete(this.supplier.id)
     await lastValueFrom(this.supplierObservable)
    this.router.navigate(['/suppliers']);
  }

}
