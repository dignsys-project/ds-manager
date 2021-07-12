import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ConnectorScheduleSceneElement } from 'src/app/models/connector-schedule-scene-element';
import { PaginatorElement } from 'src/app/models/paginator-element';
import { ConnectorScheduleService } from 'src/app/services/connector-schedule.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-components-connector-schedules-container',
  templateUrl: './components-connector-schedules-container.component.html',
  styleUrls: ['./components-connector-schedules-container.component.scss'],
})
export class ComponentsConnectorSchedulesContainerComponent implements OnInit {
  private m_ConnectorId: number;
  private m_Elements: Array<ConnectorScheduleSceneElement>;

  displayedColumns: Array<string> = ['select', 'schedule', 'scene', 'updated'];

  dataSource: MatTableDataSource<ConnectorScheduleSceneElement>;

  @Input()
  set connectorId(connectorId: number) {
    this.m_ConnectorId = connectorId;
  }
  get connectorId(): number {
    return this.m_ConnectorId;
  }

  @Input()
  set elements(elements: Array<ConnectorScheduleSceneElement>) {
    this.m_Elements = elements;

    this.dataSource.data = this.m_Elements;
  }
  get elements(): Array<ConnectorScheduleSceneElement> {
    return this.m_Elements;
  }

  @Output()
  select: EventEmitter<ConnectorScheduleSceneElement> = new EventEmitter<
    ConnectorScheduleSceneElement
  >();

  constructor(private service: ConnectorScheduleService) {
    this.dataSource = new MatTableDataSource<ConnectorScheduleSceneElement>([]);
  }

  ngOnInit(): void {}

  onRadioGroupChanged(connectorScheduleScene: ConnectorScheduleSceneElement) {
    this.select.emit(connectorScheduleScene);
  }
}
