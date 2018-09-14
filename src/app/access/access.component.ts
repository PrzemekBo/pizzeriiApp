import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {AccessService} from './access.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {


  users: User[];
  sub: Subscription;
  user: User;

  accessForm = new FormGroup({name: new FormControl(), password: new FormControl()});


  constructor(readonly service: AccessService) {
    this.user = <User>{};
  }

  ngOnInit() {
    this.sub = this.service.getUsers().subscribe(res => this.users = res);
  }

  login(): void {
    this.user.name = this.accessForm.get('name').value;
    this.user.password = this.accessForm.get('password').value;
    let i;
    for (i = 0; i < this.users.length ; i++) {
      if (this.users.find(u => u.name === this.user.name && u.password === this.user.password)) {
        this.service.loginAdmin();
        alert('Zalogowales sie jako admin');
        return;
      }
    }
    alert('Niepoprawne haslo');
  }


}
