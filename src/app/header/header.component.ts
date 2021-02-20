import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links = [{ text: 'Home', link: 'home' }, { text: 'Address', link: 'address' }, { text: 'About', link: 'about' }];

  constructor() { }

  ngOnInit(): void {
  }

}
