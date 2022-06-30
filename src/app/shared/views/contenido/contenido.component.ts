import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DarkModeService } from 'src/app/services/dark-mode.service';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss'],
})
export class ContenidoComponent implements OnInit {
  darkModeEnabled$ = this.darkModeService.darkModeEnabled$;
  openMenuV: boolean = false;
  estilos: string = '';
  private unsubscribe$ = new Subject();

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeEnabled$.pipe(takeUntil(this.unsubscribe$));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }

  openMenu(dato: number) {
    if (dato == 1) {
      this.openMenuV = true;
    } else {
      this.openMenuV = false;
      // this.estilos = '';
    }
  }
}
