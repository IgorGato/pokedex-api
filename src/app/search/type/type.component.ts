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
  pokemon: any
  lenghtPokemon: number
  tipo: number
  number = 10
  idPokemon = 1
  typePokemon = false

  constructor(
    private pokeapi: PokeapiService
  ) { }

  ngOnInit(){
    this.getPokemon()
  }

  getPokemonByType(type: string) {
    this.pokeapi.getByTypePokemons(type).subscribe((resp: any) =>{
      this.pokemonsList = resp.pokemon

      this.typePokemon = true

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

  getPokemonAll(){
    this.pokeapi.getAllPokemons().subscribe((resp: any) =>{
      this.pokemonsList = resp.results
      console.log(this.pokemonsList)

      this.typePokemon = true

      this.lenghtPokemon = 1118
        this.pokemonsList.forEach(result => {
          this.pokeapi.getByIdPokemon(result.name).subscribe((pokemonUnico: any) =>{
            this.pokemons.push(pokemonUnico)
            this.pokemons.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
          })
        });
      })
    
      this.pokemonsList = []
      this.pokemons = []
      this.lenghtPokemon = 0
  }

  getPokemon(){
    this.pokeapi.getByIdPokemon(this.idPokemon).subscribe((resp: any) =>{
      this.pokemon = resp

      this.typePokemon = false

      this.pokemonsList = []
      this.pokemons = []
      this.lenghtPokemon = 0
      
    }, erro =>{
      if(erro.status == 404){
        alert('Pokemon nao encontrado, tente novamente')
      }
    })
  }

}
