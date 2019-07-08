import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

constructor(private _http: HttpClient) {
    this.getPokemon();
}
getPokemon(){
    console.log("Getting");
    let bulbasaur = this._http.get('http://pokeapi.co/api/v2/pokemon/1');
    bulbasaur.subscribe(data => console.log(data.name));
    let ability = this._http.get('https://pokeapi.co/api/v2/ability/34');
    ability.subscribe(data => console.log(data.name))
    let otherPokemon = this._http.get('https://pokeapi.co/api/v2/ability/34');
    otherPokemon.subscribe(data => console.log(data.pokemon));
    otherPokemon.subscribe(data => console.log(data.pokemon.length))
}
}