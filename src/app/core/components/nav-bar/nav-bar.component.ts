import { Component, OnInit, Input,Output, EventEmitter,HostListener} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @HostListener('onWindowScroll', ['$event'])
  showProduct = false;
  @Output() pageScroll = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  showProducts()
  {
    this.showProduct = !this.showProduct;
    let element = document.querySelector('.main-navbar');
    let element2 = document.querySelector('.navbar');
    const animHeight =  element.clientHeight-element2.clientHeight;
    console.log("animHeight",animHeight);
    if(this.showProduct)
    {
      element2.classList.add('navbar-inverse');
    }
    else
    {
      if(window.pageYOffset < animHeight && (this.showProduct === false))
      {
        element2.classList.remove('navbar-inverse');
      }

    }


  }


}
