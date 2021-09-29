import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from '../model/UserDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userDTO: UserDTO = new UserDTO() 
  
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
  
    window.scroll(0,0)
  
  }


  entrar(){
    this.auth.entrar(this.userDTO).subscribe((resp:UserDTO)=>{
       this.userDTO = resp
       this.router.navigate(['/inicio'])
    } ,erro =>{
      if (erro.status == 500){
        alert('Usuário ou senha estão incorretos')
      }
    })
  }
}
