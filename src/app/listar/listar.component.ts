import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaProdutos: Produto[];

  @Input() save: EventEmitter<void>;
  
  @Output() produto: EventEmitter<Produto> = new EventEmitter();

  constructor(private web : WebService) { }

  carregarProdutos() : void {
    this.web.getProdutos().subscribe(res => {
      this.listaProdutos = res;
    });
  }

  ngOnInit(): void {
    this.carregarProdutos();
    this.save.subscribe(() => {
      this.carregarProdutos();
    });
  }

  deletarProduto(id: string) {
    this.web.deletarProduto(id).subscribe(
      () => {
        alert('Produto deletado com sucesso!');
        this.carregarProdutos();
      },
      () => alert('Ops! Algum erro aconteceu...'),
    );
  }

  atualizarProduto(produto: Produto) {
    this.produto.emit(JSON.parse(JSON.stringify(produto)));
  }

}
