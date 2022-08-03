import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'https://sheet.best/api/sheets/6c7f32f4-bc08-496b-8924-b11e689341a7';

  constructor(private httpClient: HttpClient) { }


  // C.R.U.D. - CREATE, READ, UPDATE, DELETE

  // Retorna a lista de usuarios READ
  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiURL);
  }
}
