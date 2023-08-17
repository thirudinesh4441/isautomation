import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
