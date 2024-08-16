import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {

  ngAfterViewInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    const myCarousel = document.querySelector('#carouselExampleAutoplaying') as HTMLElement | null;
    if (myCarousel) {
      const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 4000,  // Cambia cada 2 segundos
        ride: 'carousel'
      });
    } else {
      console.error('No se encontró el elemento del carrusel.');
    }
  }
}
