import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../components/interfaces/user';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: Subject<User> = new Subject();
  user$: Observable<User> = this.userSubject.asObservable();

  constructor(private sharedService: SharedService) { }


  logIn(email: string, pass: string) {
    this.sharedService.LoginUser({
      email,
      pass

    }).subscribe(user => {
      this.userSubject.next(user);


      setTimeout(() => {
        //user.fullName = "2";
        this.userSubject.next(user)
        

      }, 5000)
    })
  }
}


export interface LogInRequest {
  email: string;
  pass: string;
}