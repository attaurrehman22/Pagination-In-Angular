import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paginationinangular';

  data=[
    {name:"raman",mobile:9623134},
    {name:"Nokia",mobile:9623134},
    {name:"Huwai",mobile:9623134},
    {name:"Infinix",mobile:9623134},
    {name:"Infinix 1",mobile:9623134},
    {name:"Infinix 2",mobile:9623134},
    {name:"Infinix 3",mobile:9623134},
    {name:"Infinix 4",mobile:9623134},
    {name:"Infinix 5",mobile:9623134},
    {name:"Infinix 7",mobile:9623134},
    {name:"Infinix 8",mobile:9623134},
    {name:"Infinix 9",mobile:9623134},
    {name:"Infinix 10",mobile:9623134},
    {name:"Infinix 11",mobile:9623134},
    {name:"raman",mobile:9623134},
    {name:"raman",mobile:9623134},
    {name:"raman",mobile:9623134},
    {name:"raman",mobile:9623134},
    {name:"raman",mobile:9623134},
    {name:"raman",mobile:9623134},
    {name:"raman",mobile:9623134},
    {name:"raman",mobile:9623134},
  ]

  psize=5;
  currentpage=1;
}
