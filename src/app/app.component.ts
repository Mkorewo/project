import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'project';
  content:string = `
  <p>a</p> <!--akapit-->
    <a href='#'>odnośnik</a> <!--odnośnik-->
    <ol className='questions-list'>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
    </ol> <!--lista-->
    <img src="obrazek.png" alt="obrazek"> <!--obrazek-->
  `;
}