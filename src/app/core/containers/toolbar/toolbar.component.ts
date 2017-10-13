import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() isLoggedIn: boolean;
  @Output() logoff = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  signOut() {
    this.logoff.emit();
  }
}
