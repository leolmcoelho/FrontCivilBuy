import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItemTabelaProduct } from 'src/app/models/product';
import { DataService } from 'src/app/service/data.service';

import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pedidos-table',
  templateUrl: './pedidos-table.component.html',
  styleUrls: ['./pedidos-table.component.scss']
})
export class PedidosTableComponent implements OnInit, OnChanges {

  @Input() filterValue: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  dataSource: MatTableDataSource<ItemTabelaProduct> = new MatTableDataSource<ItemTabelaProduct>();
  displayedColumns: string[] = ['nome', 'descricao', 'categoria', 'unidadeMedida', 'precoUnitario', 'estoqueDisponivel', 'fornecedor', 'dataCadastro', 'dataAtualizacao', 'imagem'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
    if (changes['filterValue']) {
      //console.log('Filter Value Changed:', this.filterValue);
      this.applyFilter();
    }
  }
  

  loadData() {
    const produtos = this.dataService.getProdutosConstrucaoCivil();
    this.dataSource.data = produtos;
    this.dataSource.paginator = this.paginator; // Verifique se está sendo atribuído corretamente.

  }

  openFormPopup(element: ItemTabelaProduct) {
    console.log(element);
    // Your code to open the form popup goes here
  }

  applyFilter() {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }
}
