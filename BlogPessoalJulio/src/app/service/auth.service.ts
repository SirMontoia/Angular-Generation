import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserDTO } from '../model/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserDTO): Observable<UserDTO>{
    return this.http.put<UserDTO>('https://blogpessoal29.herokuapp.com/api/v1/usuario/credenciais', userLogin)

  }

  cadastrar(user:User): Observable<User>{
    return this.http.post <User>('https://blogpessoal29.herokuapp.com/api/v1/usuario/salvar', user)
  }

  

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://blogpessoal29.herokuapp.com/api/v1/usuario/${id}`)
  }

  logado(){
    let ok: boolean = false

    if(environment.token !=''){
      ok = true
    }

    return ok 
  }
}
