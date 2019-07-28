import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit() {}
}
