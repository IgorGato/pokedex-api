import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(
    private http: HttpClient
  ) { }

  getByIdPokemon(id: any){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

  getByTypePokemons(id: any){
    return this.http.get(`https://pokeapi.co/api/v2/type/${id}`)
  }

  getAllPokemons(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=1118`)
  }
}
