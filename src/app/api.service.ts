import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { 

  }

  getMovie(){
    let url = "http://localhost:3000/api/movies";
    return this.httpClient.get(url);
  }
  getNaves(id:number){
    let url = "http://localhost:3000/api/movies/"+id;
    return this.httpClient.get(url);
  }
  getNave(id:number){
    let url = "http://localhost:3000/api/starships/" + id;
    return this.httpClient.get(url);
  }
  setData(data:any){
    let url = "http://localhost:3000/nave/";
    return this.httpClient.post(url,data);
  }
  getData(){
    let url = "http://localhost:3000/nave/";
    return this.httpClient.get(url);
  }
}
