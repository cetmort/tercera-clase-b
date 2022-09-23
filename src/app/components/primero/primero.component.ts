import { Component, OnInit, ElementRef,ViewChild,Renderer2,AfterViewInit } from '@angular/core';
enum PAISES{
  'MEXICO',
  'USA',
  'COLOMBIA'
}

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit, AfterViewInit{
  @ViewChild('texto',{static:true}) texto! : ElementRef

  public PAISES = PAISES;

  public flag : boolean = true;
  public paises:  any[] = [
    {
      id : "15",
      nombre : "Mexico"
    },
    {
      id : "10",
      nombre : "USA"
    },
    {
      id : "36",
      nombre : "Colombia"
    }
  ]

  public platillo : any[] = [
    {
      platillo : 'Taco',
      pais : PAISES.MEXICO
    },
    {
      platillo : 'Pambazo',
      pais : PAISES.MEXICO
    },
    {
      platillo : 'Hot-Dog',
      pais : PAISES.USA
    },
    {
      platillo : 'Pizza',
      pais : PAISES.USA
    },
    {
      platillo : 'Vodka',
      pais : PAISES.COLOMBIA
    },

  ];

  constructor(private renderer2 : Renderer2) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit():void{
    console.log(this.texto)
    this.renderer2.setAttribute(this.texto.nativeElement, "id", "otrotexto")
    this.renderer2.setStyle(this.texto.nativeElement, "color", 'black')
  }

  getButton(){
    let button = document.getElementById('btn')
    button?.addEventListener("click", ()=>{
      this.flag = !this.flag;
    })
  }
}
