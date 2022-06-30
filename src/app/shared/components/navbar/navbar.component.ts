import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  darkModeEnabled$ = this.darkModeService.darkModeEnabled$;
  private unsubscribe$ = new Subject();

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeEnabled$.pipe(takeUntil(this.unsubscribe$));
  }
}
