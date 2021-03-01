import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  pokemons: any[] = [];
  pokemonsList: any[] = [];
  pokemonType = 1
  pokemon: any
  lenghtPokemon: number
  tipo: number
  number = 10

  constructor(
    private pokeapi: PokeapiService
  ) { }

  ngOnInit(){
    this.getPokemonByType()
  }

  getPokemonByType() {
    this.pokeapi.getByTypePokemons(this.pokemonType).subscribe((resp: any) =>{
      this.pokemonsList = resp.pokemon
      this.tipo = resp.name
      this.lenghtPokemon = resp.pokemon.length
        this.pokemonsList.forEach(result => {
          this.pokeapi.getByIdPokemon(result.pokemon.name).subscribe((pokemonUnico: any) =>{
            this.pokemons.push(pokemonUnico)
            this.pokemons.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
          })
        });
      })
    
      this.pokemonsList = []
      this.pokemons = []
      this.lenghtPokemon = 0
  }

  // progressBar(number)

}
