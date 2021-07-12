import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  DayOfWeekElement,
  ScheduleElement,
} from 'src/app/models/schedule-element';
import { isNullOrUndefined, isDate } from 'util';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-components-schedule',
  templateUrl: './components-schedule.component.html',
  styleUrls: ['./components-schedule.component.scss'],
})
export class ComponentsScheduleComponent implements OnInit {
  private m_Element: ScheduleElement;

  private m_bRead: boolean = false;

  @Input()
  set read(value: boolean) {
    this.m_bRead = value;
    if (this.m_bRead) {
      this.nameControl.disable();
      this.dateForms.get('disabled').disable();
      this.dateForms.get('start_date').disable();
      this.dateForms.get('end_date').disable();
    } else {
      this.nameControl.enable();
      this.dateForms.get('disabled').enable();
      this.dateForms.get('start_date').enable();
      this.dateForms.get('end_date').enable();
    }
  }

  @Input()
  set element(value: ScheduleElement) {
    this.m_Element = value;
    if (!isNullOrUndefined(value)) {
      if (!isNullOrUndefined(value.name)) {
        this.nameControl.setValue(value.name);
      } else {
        this.nameControl.setValue('');
      }

      this.dateForms.get('disabled').setValue(!value.useDate);
      this.dateForms.get('start_date').setValue(value.startDate);
      this.dateForms.get('end_date').setValue(value.endDate);
    }
  }

  get read(): boolean {
    return this.m_bRead;
  }

  get element(): ScheduleElement {
    return this.m_Element;
  }

  // 스케줄 이름
  nameControl: FormControl;

  // 요일별 설정
  dateForms: FormGroup;

  // 현재 선택된 요일
  currentDayOfWeekElement: DayOfWeekElement;

  public get isValidate(): boolean {
    if (!this.isValidateDate) {
      return false;
    }

    if (!this.isValidateWeek) {
      return false;
    }

    return true;
  }

  public get isValidateWeek(): boolean {
    if (isNullOrUndefined(this.element.week)) {
      return false;
    }
    if (!this.element.week.isValidate) {
      return false;
    }

    return true;
  }

  public get isValidateDate(): boolean {
    const startDate: Date = this.dateForms.get('start_date').value;
    const endDate: Date = this.dateForms.get('end_date').value;
    const disabled: boolean = this.dateForms.get('disabled').value;
    if (!disabled) {
      if (!isDate(startDate) || !isDate(endDate)) {
        return false;
      }

      if (startDate > endDate) {
        return false;
      }
    }

    return true;
  }

  constructor(builder: FormBuilder, private dialog: MatDialog) {
    // create date forms
    this.dateForms = builder.group({
      start_date: [''],
      end_date: [''],
      disabled: [false],
    });

    // useDate save to element
    this.dateForms
      .get('disabled')
      .valueChanges.subscribe((isDisabled: boolean) => {
        if (isDisabled) {
          this.dateForms.get('start_date').disable();
          this.dateForms.get('end_date').disable();
        } else {
          this.dateForms.get('start_date').enable();
          this.dateForms.get('end_date').enable();
        }
        this.element.useDate = !isDisabled;
      });

    // start date save to element
    this.dateForms
      .get('start_date')
      .valueChanges.subscribe((startDate: Date) => {
        if (isDate(startDate)) {
          this.element.startDate = startDate;
        }
      });
    // end date save to element
    this.dateForms.get('end_date').valueChanges.subscribe((endDate: Date) => {
      if (isDate(endDate)) {
        this.element.endDate = endDate;
      }
    });

    // create name forms
    this.nameControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]);
    this.nameControl.valueChanges.subscribe((x) => (this.element.name = x));
  }

  ngOnInit(): void {}

  isSelectedDayOfWeek(element: DayOfWeekElement): boolean {
    return this.currentDayOfWeekElement === element;
  }

  onClickedDayOfWeek(element: DayOfWeekElement) {
    if (this.read) {
      return;
    }
    if (element === this.currentDayOfWeekElement) {
      this.currentDayOfWeekElement = null;

      return;
    }

    this.currentDayOfWeekElement = element;
  }

  onTimePickerStartTimeChanged(time: string) {
    this.currentDayOfWeekElement.startTime = time;
  }
  onTimePickerEndTimeChanged(time: string) {
    this.currentDayOfWeekElement.endTime = time;
  }
}
