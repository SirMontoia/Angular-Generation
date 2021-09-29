import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.put<UserDTO>('https://blogpessoal29.herokuapp.com/swagger-ui/#/usuarios-controladores/credenciaisUsingPUT', userLogin)

  }

  cadastrar(user:User): Observable<User>{
    return this.http.post <User>('https://blogpessoal29.herokuapp.com/swagger-ui/#/usuarios-controladores/salvarUsingPOST_2', User)

  }
}
