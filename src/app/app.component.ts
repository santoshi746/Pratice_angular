import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project49';
  public name = "MSB2249";
  public greet(){
    return "hello everyone";
  }
  public userid = "abc";
}
