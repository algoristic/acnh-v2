import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public extendedOptions: boolean = false;

  public toggleExtended(): void {
    this.extendedOptions = (!this.extendedOptions);
  }
}
