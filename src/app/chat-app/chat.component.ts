import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FirebaseService} from "../providers/firebase.service";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'chat-app',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public nuevoMensaje: string;
  mensajes: FirebaseListObservable<any>;

  constructor(public _angubaseService: FirebaseService) {
    this.mensajes = this._angubaseService.mensajes;
  }

  @ViewChild('scrollMensaje') private myScrollContainer: ElementRef;
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { console.log('Scroll hacia el final ha fallado') }
  }

  soyYo(email) {
    return email != this._angubaseService.email;
  }

  enviarMensaje(){
    if (this.nuevoMensaje !== '') {
    this._angubaseService.enviarMensaje(this.nuevoMensaje);
    this.nuevoMensaje='';
    }

  }

  ngOnInit() {
  }

}
