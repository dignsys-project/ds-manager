import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  ScheduleElement,
  WeekElement,
  DayOfWeekElement,
} from 'src/app/models/schedule-element';
import { isNullOrUndefined } from 'util';

export interface IWeekElement {
  name: string;
  element: DayOfWeekElement;
}

@Component({
  selector: 'app-components-schedule-item',
  templateUrl: './components-schedule-item.component.html',
  styleUrls: ['./components-schedule-item.component.scss'],
})
export class ComponentsScheduleItemComponent implements OnInit, OnDestroy {
  private m_Element: ScheduleElement;
  private m_Interval: any;

  @Output()
  update: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  delete: EventEmitter<ScheduleElement> = new EventEmitter<ScheduleElement>();

  @Input()
  read: boolean = false;

  @Input()
  set element(value: ScheduleElement) {
    this.m_Element = value;

    this.weekElements = new Array<IWeekElement>();
    this.weekElements.push(<IWeekElement>{
      name: '월',
      element: value.week.mon,
    });
    this.weekElements.push(<IWeekElement>{
      name: '화',
      element: value.week.tue,
    });
    this.weekElements.push(<IWeekElement>{
      name: '수',
      element: value.week.wed,
    });
    this.weekElements.push(<IWeekElement>{
      name: '목',
      element: value.week.thu,
    });
    this.weekElements.push(<IWeekElement>{
      name: '금',
      element: value.week.fri,
    });
    this.weekElements.push(<IWeekElement>{
      name: '토',
      element: value.week.sat,
    });
    this.weekElements.push(<IWeekElement>{
      name: '일',
      element: value.week.sun,
    });
  }

  get element(): ScheduleElement {
    return this.m_Element;
  }

  weekElements: Array<IWeekElement>;

  expiredName: string = '기간제';
  isExpired: boolean = false;

  constructor() {}

  ngOnDestroy(): void {
    if (!isNullOrUndefined(this.m_Interval)) {
      clearInterval(this.m_Interval);
      this.m_Interval = null;
    }
  }

  ngOnInit(): void {
    if (this.element.useDate) {
      setTimeout(() => {
        this.checkDateExpired();
        this.m_Interval = setInterval(() => {
          this.checkDateExpired();
        }, 10 * 60 * 1000);
      }, 0);
    }
  }

  checkDateExpired() {
    const current = new Date().getTime();

    const endDate = this.element.endDate;
    endDate.setHours(23);
    endDate.setMinutes(59);
    endDate.setSeconds(59);

    const end = endDate.getTime();
    const diff = end - current;

    if (0 < diff) {
      this.expiredName = '기간제';
      this.isExpired = false;
    } else {
      this.expiredName = '기간 만료';
      this.isExpired = true;
    }
  }

  onClickedUpdateSchedule() {
    this.update.next(this.element.id);
  }

  onClickedDeleteSchedule() {
    this.delete.next(this.element);
  }
}
