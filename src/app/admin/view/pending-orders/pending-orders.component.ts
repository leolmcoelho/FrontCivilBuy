import { Component, ViewChild, Input } from '@angular/core';
import { ItemTabela } from 'src/app/models/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormPopupComponent } from '../form-popup/form-popup.component';


import { productItems } from '../../../data/product';
import { DataService } from 'src/app/service/data.service';
import { ItemTabelaProduct } from 'src/app/models/product';


import { tableColumns1, tableColumns2 } from './columns';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss']
})
export class PendingOrdersComponent {
  dataSource: MatTableDataSource<ItemTabela>;
  
  @Input() selectedOption: string = 'lojistas'; // Input para receber a opção selecionada
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  displayedColumns = tableColumns1.map(column => column.def);
  
  constructor(private dialog: MatDialog, private dataService: DataService) {

    const data2 = this.dataService.getClientes();
    this.dataSource = new MatTableDataSource<ItemTabela>(data2);

  }

  ngAfterViewInit() {
    //console.log(this.displayedColumns);
    this.dataSource.paginator = this.paginator;

    //this.openFormPopup('');

  }

  openFormPopup(element: any) {
    console.log(element);
    const dialogRef = this.dialog.open(FormPopupComponent, {
      //width: '400px',
      maxHeight:'90vh'
      // Outras configurações do diálogo, se necessário
    });
  }

  ngOnInit() {
    this.loadData();
  }

  ngOnChanges() {
    this.loadData();
  }

  loadData() {
    if (this.selectedOption == 'Lojistas') {
      const data = this.dataService.getClientes();
      this.displayedColumns = tableColumns1.map(column => column.def);
      this.dataSource = new MatTableDataSource<ItemTabela>(data);
    } else if (this.selectedOption === 'Clientes') {
      const data = this.dataService.getClientes();
      this.displayedColumns = tableColumns2.map(column => column.def);
      this.dataSource = new MatTableDataSource<ItemTabela>(data);
    } 

  }
}
