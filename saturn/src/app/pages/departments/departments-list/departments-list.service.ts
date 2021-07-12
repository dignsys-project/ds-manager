import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ISelectDepartmentNodeElement } from "./departments-list-common/departments-list-common.component";
import { DepartmentNodeElement } from "src/app/models/department-node-element";
import { DepartmentElement } from "src/app/models/department-element";

export enum ExpandTreeStatusKind {
  Default = 0,
  Expanded = 1,
  Collapsed = 2,
}

@Injectable()
export class DepartmentsListService {
  // created
  public created$: BehaviorSubject<DepartmentNodeElement> = new BehaviorSubject<
    DepartmentNodeElement
  >(null);

  // deleted
  public deleted$: BehaviorSubject<DepartmentNodeElement> = new BehaviorSubject<
    DepartmentNodeElement
  >(null);

  // moved
  public moved$: BehaviorSubject<DepartmentNodeElement> = new BehaviorSubject<
    DepartmentNodeElement
  >(null);

  // loaded
  public elements$: BehaviorSubject<
    Array<DepartmentNodeElement>
  > = new BehaviorSubject<Array<DepartmentNodeElement>>([]);

  // selected
  public selected$: BehaviorSubject<
    ISelectDepartmentNodeElement
  > = new BehaviorSubject<ISelectDepartmentNodeElement>(null);

  public enableGoBackItem$: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(false);

  public expandStatus$: BehaviorSubject<
    ExpandTreeStatusKind
  > = new BehaviorSubject<ExpandTreeStatusKind>(ExpandTreeStatusKind.Default);

  constructor() {}

  public makeElements(): Array<DepartmentNodeElement> {
    const container = new Array<DepartmentNodeElement>();

    const financeCreativeDepartment = new DepartmentNodeElement();
    financeCreativeDepartment.id = this.makeId();
    financeCreativeDepartment.department = new DepartmentElement();
    financeCreativeDepartment.department.id = this.makeId();
    financeCreativeDepartment.department.name = "Finance & Creative Department";
    financeCreativeDepartment.department.created = new Date();
    financeCreativeDepartment.order = 0;
    container.push(financeCreativeDepartment);

    const financeServiceNode = new DepartmentNodeElement();
    financeServiceNode.id = this.makeId();
    financeServiceNode.department = new DepartmentElement();
    financeServiceNode.department.id = this.makeId();
    financeServiceNode.department.name = "Finance Service";
    financeServiceNode.department.created = new Date();
    financeServiceNode.order = 0;
    financeServiceNode.parentDepartmentNodeId = financeCreativeDepartment.id;
    container.push(financeServiceNode);

    let element = new DepartmentNodeElement();
    element.id = this.makeId();
    element.department = new DepartmentElement();
    element.department.id = this.makeId();
    element.department.name = "Finance Accounts Service";
    element.department.created = new Date();
    element.order = 0;
    element.parentDepartmentNodeId = financeServiceNode.id;
    container.push(element);

    element = new DepartmentNodeElement();
    element.id = this.makeId();
    element.department = new DepartmentElement();
    element.department.id = this.makeId();
    element.department.name = "Finance Customers Service";
    element.department.created = new Date();
    element.order = 0;
    element.parentDepartmentNodeId = financeServiceNode.id;
    container.push(element);

    element = new DepartmentNodeElement();
    element.id = this.makeId();
    element.department = new DepartmentElement();
    element.department.id = this.makeId();
    element.department.name = "Finance Products Service";
    element.department.created = new Date();
    element.order = 0;
    element.parentDepartmentNodeId = financeServiceNode.id;
    container.push(element);

    const creativeServices = new DepartmentNodeElement();
    creativeServices.id = this.makeId();
    creativeServices.department = new DepartmentElement();
    creativeServices.department.id = this.makeId();
    creativeServices.department.name = "Creative Service";
    creativeServices.department.created = new Date();
    creativeServices.order = 0;
    container.push(creativeServices);

    const productionNode = new DepartmentNodeElement();
    productionNode.id = this.makeId();
    productionNode.department = new DepartmentElement();
    productionNode.department.name = "Production Department";
    productionNode.department.created = new Date();
    productionNode.parentDepartmentNodeId = 0;
    container.push(productionNode);

    return container;
  }

  public makeId(): number {
    return Math.floor(Math.random() * 1000000) + 1;
  }
}
