import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.scss']
})
export class ChildDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() message!:string;

  @Output() sendMessage= new EventEmitter<any>();

  handleClick(){
    this.sendMessage.emit("Received");
  }

}
