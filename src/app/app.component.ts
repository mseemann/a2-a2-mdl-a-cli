import { Component } from '@angular/core';
import { MdlDialogService } from 'angular2-mdl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';

  constructor(private dialogService: MdlDialogService){}

  public test(){
   this.dialogService.alert("test");
  }
}
