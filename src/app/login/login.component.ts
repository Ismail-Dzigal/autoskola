import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: ''
  }
  users;

  constructor(private dataService: DataService,
              private toastr: ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.users = this.dataService.getUsers();
  }

  submitLoginForm(loginForm){
    if(!loginForm.valid){
      this.toastr.error('Neispravni podaci');
      return;
    }

    for (let i = 0; i < this.users.length; i++) {
      if(this.user.username === this.users[i].username && this.user.password === this.users[i].password){
        switch(this.user.username){
          case 'admin@as.ba':
            this.toastr.success(`Uspješno ste se prijavili`);
            this.router.navigate(['/main']); 
            break;
          case 'hasib@gmail.com':
            this.toastr.success(`Uspješno ste se prijavili`);
            this.router.navigate(['/instructor-pages/instructor-main']); 
            break;
          case 'ismail@edu.fit.ba':
            this.toastr.success(`Uspješno ste se prijavili`);
            this.router.navigate(['/candidate-pages/candidate-main']); 
            break;
        }
        return;
      }
    }
    this.toastr.error(`Unijeli ste pogrešno korisničko ime ili lozinku. Pokušajte ponovo.`);
  }
}
