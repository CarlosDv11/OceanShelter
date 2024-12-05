import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    if (this.username === 'admin' && this.password === '1234') {
      console.log('Login bem-sucedido. Redirecionando...');
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Usuário ou senha incorretos!';
      console.log('Login falhou.');
    }
  }
}
