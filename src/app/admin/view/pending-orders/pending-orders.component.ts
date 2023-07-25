import { Component, ViewChild, Input } from '@angular/core';
import { ItemTabela } from 'src/app/models/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormPopupComponent } from '../form-popup/form-popup.component';

import { data2 } from './client';

import { produtosConstrucaoCivil } from './product';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss']
})
export class PendingOrdersComponent {
  dataSource: MatTableDataSource<ItemTabela>;
  
  @Input() selectedOption: string = 'lojistas'; // Input para receber a opção selecionada
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  tableColumns1 = [
    { def: 'numero', header: '#' },
    { def: 'nomeFantasia', header: 'Nome Fantasia' },
    { def: 'razaoSocial', header: 'Razão Social' },
    { def: 'cnpj', header: 'CNPJ' },
    { def: 'cep', header: 'CEP' },
    { def: 'uf', header: 'UF' }
  ];

  tableColumns2 = [
    { def: 'numero', header: '#' },
    { def: 'nomeFantasia', header: 'Nome Fantasia' },
    { def: 'razaoSocial', header: 'Razão Social' },
    { def: 'cnpj', header: 'CNPJ' },
    { def: 'cep', header: 'CEP' },
    { def: 'uf', header: 'UF' },
    { def: 'teste', header: 'Teste' },
  ];

  displayedColumns = this.tableColumns1.map(column => column.def);
  
  
  constructor(private dialog: MatDialog) {

    //const data1 = ;

    const data2 =  [
      { numero: 1, nomeFantasia: 'Cliente 1', razaoSocial: 'Razão Social 1', cnpj: '00.000.000/0000-01', cep: '00000-001', uf: 'UF1' },
      { numero: 2, nomeFantasia: 'Cliente 2', razaoSocial: 'Razão Social 2', cnpj: '00.000.000/0000-02', cep: '00000-002', uf: 'UF2' },
      { numero: 3, nomeFantasia: 'Cliente 3', razaoSocial: 'Razão Social 3', cnpj: '00.000.000/0000-03', cep: '00000-003', uf: 'UF3' },
      { numero: 4, nomeFantasia: 'Cliente 4', razaoSocial: 'Razão Social 4', cnpj: '00.000.000/0000-04', cep: '00000-004', uf: 'UF4' },
      { numero: 5, nomeFantasia: 'Cliente 5', razaoSocial: 'Razão Social 5', cnpj: '00.000.000/0000-05', cep: '00000-005', uf: 'UF5' },
      { numero: 6, nomeFantasia: 'Cliente 6', razaoSocial: 'Razão Social 6', cnpj: '00.000.000/0000-06', cep: '00000-006', uf: 'UF6' },
      { numero: 7, nomeFantasia: 'Cliente 7', razaoSocial: 'Razão Social 7', cnpj: '00.000.000/0000-07', cep: '00000-007', uf: 'UF7' },
      { numero: 8, nomeFantasia: 'Cliente 8', razaoSocial: 'Razão Social 8', cnpj: '00.000.000/0000-08', cep: '00000-008', uf: 'UF8' },
      { numero: 9, nomeFantasia: 'Cliente 9', razaoSocial: 'Razão Social 9', cnpj: '00.000.000/0000-09', cep: '00000-009', uf: 'UF9' },
      { numero: 10, nomeFantasia: 'Cliente 10', razaoSocial: 'Razão Social 10', cnpj: '00.000.000/0000-10', cep: '00000-010', uf: 'UF10' }
    ];

    this.dataSource = new MatTableDataSource<ItemTabela>(data2);

  }

  ngAfterViewInit() {
    //console.log(this.displayedColumns);
    this.dataSource.paginator = this.paginator;


    this.openFormPopup('');

  }

  openFormPopup(element: any) {
    console.log(element);
    const dialogRef = this.dialog.open(FormPopupComponent, {
      //width: '400px',
      maxHeight:'90vh'
      // Outras configurações do diálogo, se necessário
    });
  }

  ngOnChanges() {


    const data1: ItemTabela[] = [
      { numero: 1, nomeFantasia: 'Empresa 1', razaoSocial: 'Razão Social 1', cnpj: '00.000.000/0000-01', cep: '00000-001', uf: 'UF1' },
      { numero: 2, nomeFantasia: 'Empresa 2', razaoSocial: 'Razão Social 2', cnpj: '00.000.000/0000-02', cep: '00000-002', uf: 'UF2' },
      { numero: 3, nomeFantasia: 'Empresa 3', razaoSocial: 'Razão Social 3', cnpj: '00.000.000/0000-03', cep: '00000-003', uf: 'UF3' },
      { numero: 4, nomeFantasia: 'Empresa 4', razaoSocial: 'Razão Social 4', cnpj: '00.000.000/0000-04', cep: '00000-004', uf: 'UF4' },
      { numero: 5, nomeFantasia: 'Empresa 5', razaoSocial: 'Razão Social 5', cnpj: '00.000.000/0000-05', cep: '00000-005', uf: 'UF5' },
      { numero: 6, nomeFantasia: 'Empresa 6', razaoSocial: 'Razão Social 6', cnpj: '00.000.000/0000-06', cep: '00000-006', uf: 'UF6' },
      { numero: 7, nomeFantasia: 'Empresa 7', razaoSocial: 'Razão Social 7', cnpj: '00.000.000/0000-07', cep: '00000-007', uf: 'UF7' },
      { numero: 8, nomeFantasia: 'Empresa 8', razaoSocial: 'Razão Social 8', cnpj: '00.000.000/0000-08', cep: '00000-008', uf: 'UF8' },
      { numero: 9, nomeFantasia: 'Empresa 9', razaoSocial: 'Razão Social 9', cnpj: '00.000.000/0000-09', cep: '00000-009', uf: 'UF9' },
      { numero: 10, nomeFantasia: 'Empresa 10', razaoSocial: 'Razão Social 10', cnpj: '00.000.000/0000-10', cep: '00000-010', uf: 'UF10' }
    ];

    


    // Atualiza as colunas e os dados com base na opção selecionada
    if (this.selectedOption == 'Lojistas') {
      console.log("lojistas selecionados");
      this.displayedColumns = this.tableColumns1.map(column => column.def);
      this.dataSource = new MatTableDataSource<ItemTabela>(data1);

    } else if (this.selectedOption === 'Clientes') {
      console.log("clientes selecionados");
      this.displayedColumns = this.tableColumns2.map(column => column.def);
      this.dataSource = new MatTableDataSource<ItemTabela>(data2);
    }


}
}
