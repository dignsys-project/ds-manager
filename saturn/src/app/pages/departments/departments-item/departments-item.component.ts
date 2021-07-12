import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentsService } from '../departments.service';
import { DepartmentsHeaderService } from '../departments-header.service';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { Location } from '@angular/common';
import { DepartmentElement } from 'src/app/models/department-element';
import { MemberBaseElement } from 'src/app/models/member-base-element';
import { DepartmentBaseElement } from 'src/app/models/department-base-element';

@Component({
  selector: 'app-departments-item',
  templateUrl: './departments-item.component.html',
  styleUrls: ['./departments-item.component.scss'],
})
export class DepartmentsItemComponent implements OnInit {
  private m_DepartmentId: number = 0;

  element: DepartmentElement;

  get hasConnectors(): boolean {
    return this.element.hasConnectors;
  }

  get hasEmergencyConnectors(): boolean {
    return (
      this.element?.connectorBases?.filter((x) => x.isEmergency)?.length > 0
    );
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DepartmentsService,
    private headerService: DepartmentsHeaderService,
    private location: Location,
    private router: Router
  ) {
    // get departmentId from activated route

    this.activatedRoute.paramMap.subscribe((params) => {
      this.m_DepartmentId = Number.parseInt(params.get('departmentId'));

      if (this.m_DepartmentId == undefined || 0 >= this.m_DepartmentId) {
        this.location.back();

        return;
      }

      try {
        this.service
          .requestGetDepartmentById(this.m_DepartmentId)
          .pipe(take(1))
          .subscribe((response) => {
            if (CommonExtensions.isSuccess(response.getCommon())) {
              this.element = DepartmentElement.fromMessage(
                response.getDepartment()
              );

              this.headerService.enabledBack$.next(true);
              this.headerService.title$.next(
                `조직 관리 : ${this.element.name}`
              );
            } else {
              this.location.back();
            }
          });
      } catch (error) {
        console.error(error);
        this.location.back();
      }
    });
  }

  async ngOnInit(): Promise<any> {
    const departmentId = this.m_DepartmentId;

    try {
      const response = await this.service
        .requestGetDepartmentById(this.m_DepartmentId)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.element = DepartmentElement.fromMessage(response.getDepartment());

        this.headerService.enabledBack$.next(true);
        this.headerService.title$.next(`조직 관리 : ${this.element.name}`);
      } else {
        this.location.back();
      }
    } catch (error) {
      console.error(error);
      this.location.back();
    }
  }

  onClickedDepartmentScene() {
    this.router.navigate([`/departments/scene/${this.m_DepartmentId}`]);
  }

  onClickedDepartmentSchedule() {
    this.router.navigate([`/departments/schedule/${this.m_DepartmentId}`]);
  }

  onClickedDepartmentEmergency(isEmergency: boolean) {
    this.router.navigate([`/departments/emergency/${this.m_DepartmentId}`], {
      queryParams: { emergency: isEmergency },
    });
  }

  // clicked selected member
  onSelectedComponentsMemberTable(member: MemberBaseElement) {
    this.router.navigate([`/departments/member/${member.id}`]);
  }

  // clicked selected connector
  onSelectedComponentsConnectorTable(connectorId: number) {
    this.router.navigate([`/departments/connector/${connectorId}`]);
  }

  // clicked selected department
  onSelectedComponentsDepartmentBaseItem(
    departmentBaseElement: DepartmentBaseElement
  ) {
    this.router.navigate([`/departments/item/${departmentBaseElement.id}`]);
  }
}
