import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private auth: AuthService, private route: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  login () {
    this.auth.signIn().then((res)=> {
      localStorage.setItem('token', res.credential['accessToken']);
      this.zone.run(() => {
        this.route.navigate(['/posts']);
      })
      
      console.log(res);
    }).catch((error)=> {
      console.log(error());
    })
  }
}
