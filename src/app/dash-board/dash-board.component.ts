import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dash-board.component.html',  // Verifique o caminho aqui
  styleUrls: ['./dash-board.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated !== 'true') {
      this.router.navigate(['/login']);
    }
  }
}
