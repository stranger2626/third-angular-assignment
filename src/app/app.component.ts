import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  clickCount = [];

  onToggleShowDetails() {
    this.showDetails = !this.showDetails;
    this.clickCount.push(this.clickCount.length + 1);
  }
}
