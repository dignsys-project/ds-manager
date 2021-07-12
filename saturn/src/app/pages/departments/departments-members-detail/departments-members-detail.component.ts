import { Component, OnInit } from '@angular/core';
import { MemberElement } from 'src/app/models/member-element';
import { MembersService } from '../../../services/members.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { Location } from '@angular/common';
import { DepartmentsService } from '../departments.service';
import { DepartmentsHeaderService } from '../departments-header.service';
import { DepartmentBaseElement } from 'src/app/models/department-base-element';

@Component({
  selector: 'app-departments-members-detail',
  templateUrl: './departments-members-detail.component.html',
  styleUrls: ['./departments-members-detail.component.scss'],
})
export class DepartmentsMembersDetailComponent implements OnInit {
  element: MemberElement;
  constructor(
    private memberService: MembersService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private headerService: DepartmentsHeaderService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const memberId = params.memberId as number;
      if (isNullOrUndefined(memberId)) {
        this.location.back();
      }

      this.memberService
        .requestGetMemberById(memberId)
        .pipe(take(1))
        .subscribe((response) => {
          if (CommonExtensions.isSuccess(response.getCommon())) {
            this.element = MemberElement.fromMessage(response.getMember());

            this.headerService.title$.next(`${this.element.email} 멤버 정보`);
          }
        });
    });
  }
  ngOnDestroy(): void {}

  ngOnInit(): void {}

  onClickedArrowBack() {
    this.location.back();
  }

  onSelectedComponentsDepartmentBaseItem(
    departmentBaseElement: DepartmentBaseElement
  ) {
    this.router.navigate([`/departments/item/${departmentBaseElement.id}`]);
  }
}
