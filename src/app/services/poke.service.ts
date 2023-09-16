import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getData(page: number = 0) {
    return this.http.get(`${this.baseUrl}`, {
      params: {
        offset: page,
        limit: '8'}
        }); 
  }

  getDetails(name: string) {
    return this.http.get(`${this.baseUrl}${name}`);
  }
}
