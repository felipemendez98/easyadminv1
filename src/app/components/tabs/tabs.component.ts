import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent{

  @Input() titulo : string ="";
  @Input() id_list: string ="";
  @Input() id_dash: string ="";

}
