import { Component } from '@angular/core';
import { MdlDialogService } from 'angular2-mdl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'app works!';


  otherCountryCode: string = null;
  countries: any = [
    {name: 'France', code: 'FR'},
    {name: 'Germany', code: 'DE'},
    {name: 'Italy', code: 'IT'},
    {name: 'Netherlands', code: 'NL'},
    {name: 'Poland', code: 'PL'},
    {name: 'Spain', code: 'ES'},
    {name: 'United Kingdom', code: 'UK'},
  ];

  constructor(private dialogService: MdlDialogService){}

  public test(){
   this.dialogService.alert("test");
  }
}
