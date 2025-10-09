import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  isCollapsed: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
