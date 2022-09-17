import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioDTO} from "./dto/usuario-DTO";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{ //paso 2 implements OnInit
  title = 'clienteApi';

  constructor(private http:HttpClient) { // paso 3 constructor
  }

  ruta="http://localhost:3000/usuario/todos"
  usuarios:UsuarioDTO[]=[]

  ngOnInit(): void {

    //get
      this.http.get<UsuarioDTO[]>(this.ruta).subscribe(response=>{
        this.usuarios=response
      })
  }
}

