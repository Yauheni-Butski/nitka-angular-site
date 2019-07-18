import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-container',
  templateUrl: './spinner-container.component.html',
  styleUrls: ['./spinner-container.component.scss']
})
export class SpinnerContainerComponent {

@Input() isLoading = true;

}
