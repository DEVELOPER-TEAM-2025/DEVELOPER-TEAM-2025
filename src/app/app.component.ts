import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Agregar CommonModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Nota: styleUrls (plural) está corregido
})
export class AppComponent {
  title = 'portfolio';
  showPopup: boolean = false;

  ngOnInit() {
    // Verificar si el pop-up ya fue mostrado
    const popupClosed = localStorage.getItem('popupClosed');
    if (!popupClosed) {
      this.showPopup = true; // Mostrar el pop-up si no hay registro en localStorage
    }
  }

  closePopup() {
    this.showPopup = false; // Cerrar el pop-up
    localStorage.setItem('popupClosed', 'true'); // Guardar en localStorage que el pop-up fue cerrado
  }
}
