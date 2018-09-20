import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  portfolioOwner = 'Vinicius Moder';
  developer = 'Jonas Rafael Duarte dos Santos';
  test = 'assets\\mainPicture.jpg';
  titles = ['Drawner', 'Artist', 'Big dog', 'Writer', 'RPG master'];
}
