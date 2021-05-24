import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  @Input() produto: Produto;
  @Input() save: EventEmitter<void>;
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  constructor(private web : WebService) { }

  ngOnInit(): void {
  }

  atualizar() {
    this.web.atualizarProduto(this.produto).subscribe(
      () => {
        alert('Produto atualizado com sucesso!');
        this.save.emit();
      },
      () => alert('Ops! Algum erro aconteceu...'),
    );
  }

  cancelar() {
    this.cancel.emit();
  }

}
