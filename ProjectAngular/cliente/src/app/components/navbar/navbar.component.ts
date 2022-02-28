import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //Dinamica de que cambien el titulo
  @Input() titulo_navbar: any;

  constructor() { }

  ngOnInit(): void {
  }

}
