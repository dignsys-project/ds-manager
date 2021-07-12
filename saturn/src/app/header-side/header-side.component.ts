import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs';
import { IHeaderSideMenu } from '../models/header-side-menu';
import { HeaderSideService } from './header-side.service';

@Component({
  selector: "app-header-side",
  templateUrl: "./header-side.component.html",
  styleUrls: ["./header-side.component.scss"]
})
export class HeaderSideComponent implements OnInit {

  menus$: BehaviorSubject<IHeaderSideMenu[]>;
  constructor(private router: Router, headerSideService: HeaderSideService) {
    this.menus$ = headerSideService.menus$;
  }

  ngOnInit(): void {}

  onClickedMoveDashboard() {
    this.router.navigate(["dashboard"]);
  }
}
