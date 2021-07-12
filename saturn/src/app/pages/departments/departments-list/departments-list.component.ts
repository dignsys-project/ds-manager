import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ExpandTreeStatusKind,
  DepartmentsListService,
} from './departments-list.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { takeWhile, take, map, filter } from 'rxjs/operators';
import { DepartmentNodeElement } from 'src/app/models/department-node-element';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { DepartmentNode } from 'src/app/protocols/common_pb';
import { DepartmentsService } from 'src/app/pages/departments/departments.service';
import { isNullOrUndefined } from 'util';
import { DepartmentsHeaderService } from '../departments-header.service';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss'],
})
export class DepartmentsListComponent implements OnInit, OnDestroy {
  isEnableGoBack$: BehaviorSubject<boolean>;

  constructor(
    private headerService: DepartmentsHeaderService,
    private departmentsListService: DepartmentsListService,
    private service: DepartmentsService
  ) {
    this.isEnableGoBack$ = this.departmentsListService.enableGoBackItem$;

    this.headerService.title$.next('조직 관리');

    // for test
    // this.service.elements$.next(this.service.makeElements());

    this.departmentsListService.moved$
      .pipe(filter((element) => !isNullOrUndefined(element)))
      .subscribe(() => {
        this.requestGetDepartmentNodes();

        this.departmentsListService.moved$.next(null);
      });

    this.requestGetDepartmentNodes();
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.departmentsListService.elements$.next([]);
    this.departmentsListService.selected$.next(null);
    this.departmentsListService.deleted$.next(null);
    this.departmentsListService.moved$.next(null);
  }

  onClickedCollapseAll() {
    this.departmentsListService.expandStatus$.next(
      ExpandTreeStatusKind.Expanded
    );
  }

  onClickedExpandAll() {
    this.departmentsListService.expandStatus$.next(
      ExpandTreeStatusKind.Collapsed
    );
  }

  private requestGetDepartmentNodes() {
    this.service
      .requestGetDepartmentNodes()
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.departmentsListService.elements$.next(
            response
              .getNodesList()
              .map((x) => DepartmentNodeElement.fromMessage(x))
          );
        }
      });
  }
}
