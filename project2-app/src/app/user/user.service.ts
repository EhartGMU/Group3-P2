import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../components/interfaces/user';
import { SharedService } from '../shared.service';
import { shareReplay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: Subject<User> = new Subject();
  user$: Observable<User> = this.userSubject.asObservable().pipe(shareReplay());

  constructor(private sharedService: SharedService) { }


  logIn(email: string, pass: string) {
    this.sharedService.LoginUser({
      email,
      pass

    }).subscribe(user => {
      this.userSubject.next(user);
      
    })
  }
  logOut() {
    this.userSubject.next(undefined);
  }
}


export interface LogInRequest {
  email: string;
  pass: string;
}