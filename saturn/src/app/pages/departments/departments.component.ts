import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { IHeaderSideMenu } from 'src/app/models/header-side-menu';
import { HeaderSideService } from 'src/app/header-side/header-side.service';
import { takeWhile } from 'rxjs/operators';
import { DepartmentsService } from './departments.service';
import { DepartmentsHeaderService } from './departments-header.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit, OnDestroy {
  menus$: BehaviorSubject<Array<IHeaderSideMenu>>;

  title$: BehaviorSubject<string>;

  enabledBack$: BehaviorSubject<boolean>;
  constructor(
    private headerSideService: HeaderSideService,
    private departmentHeaderService: DepartmentsHeaderService,
    private location: Location
  ) {
    this.menus$ = headerSideService.menus$;
    this.title$ = this.departmentHeaderService.title$;
    this.enabledBack$ = this.departmentHeaderService.enabledBack$;

    this.headerSideService.menus$.next([
      { name: '조직도', route: '/departments/items' },
      { name: '조직 관리', route: '/departments/list' },
      { name: '멤버', route: '/departments/members' },
      { name: '디바이스', route: '/departments/connectors' },
    ]);
  }
  ngOnDestroy(): void {
    this.headerSideService.menus$.next([]);
  }

  ngOnInit(): void {}

  onClickedLocationBack() {
    this.location.back();
  }
}
