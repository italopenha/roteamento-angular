import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-com-parametros',
  templateUrl: './pagina-com-parametros.component.html',
  styleUrls: ['./pagina-com-parametros.component.css']
})
export class PaginaComParametrosComponent {
  constructor(private route: ActivatedRoute) { }
  id: number | null = null;
  nome: string | null = '';
  idade: number | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })

    this.route.queryParamMap.subscribe(params => {
      this.nome = (params.get('nome'))
      this.idade = Number(params.get('idade'))
    })
  }
}
