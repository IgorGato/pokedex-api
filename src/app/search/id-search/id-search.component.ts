import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-id-search',
  templateUrl: './id-search.component.html',
  styleUrls: ['./id-search.component.css']
})
export class IdSearchComponent implements OnInit {
  idPokemon = 1
  pokemon: any
  secondType: boolean

  constructor(
    private pokeapi: PokeapiService
  ) { }

  ngOnInit(): void {
    this.getPokemon()
  }

  getPokemon(){
    this.pokeapi.getByIdPokemon(this.idPokemon).subscribe((resp: any) =>{
      this.pokemon = resp

      if(this.pokemon.types[1].type.name != ''){
        this.secondType = true
      }
    }, erro =>{
      if(erro.status == 404){
        alert('Pokemon nao encontrado, tente novamente')
      }
    })
    this.secondType = false
  }

}
