import { Schedule } from '../protocols/common_pb';
import { isNullOrUndefined, isDate } from 'util';
import { CommonExtensions } from '../commons/common-extensions';

export class DayOfWeekElement {
  public startTime: string = '12:00';
  public endTime: string = '12:00';
  public isAllDay: boolean = true;
  public disabled: boolean = false;

  public fromMessage(message: Schedule.DayOfWeek) {
    this.startTime = `${this.pad(message.getStarthour())}:${this.pad(
      message.getStartminute()
    )}`;
    this.endTime = `${this.pad(message.getEndhour())}:${this.pad(
      message.getEndminute()
    )}`;
    this.isAllDay = message.getIsallday();
    this.disabled = message.getDisabled();
  }

  private pad(d: number) {
    return d < 10 ? '0' + d.toString() : d.toString();
  }

  public static fromMessage(message: Schedule.DayOfWeek): DayOfWeekElement {
    const element = new DayOfWeekElement();
    element.fromMessage(message);

    return element;
  }

  public toMessage(): Schedule.DayOfWeek {
    const message = new Schedule.DayOfWeek();
    message.setDisabled(this.disabled);
    message.setIsallday(this.isAllDay);
    if (!this.disabled && !this.isAllDay) {
      // set start time
      const start = this.startTime.split(':');

      const startHour = start[0];
      const startMinutes = start[1];
      message.setStarthour(Number.parseInt(startHour));
      message.setStartminute(Number.parseInt(startMinutes));

      const end = this.endTime.split(':');
      const endHour = end[0];
      const endMinutes = end[1];
      message.setEndhour(Number.parseInt(endHour));
      message.setEndminute(Number.parseInt(endMinutes));
    }

    return message;
  }

  public get isValidate(): boolean {
    if (!this.disabled) {
      if (!this.isAllDay) {
        if (
          isNullOrUndefined(this.startTime) ||
          isDate(this.startTime) ||
          isNullOrUndefined(this.endTime) ||
          isDate(this.endTime)
        ) {
          return false;
        }

        const start = this.startTime.split(':');
        if (2 > start.length) {
          return false;
        }

        const end = this.endTime.split(':');
        if (2 > end.length) {
          return false;
        }
      }
    }

    return true;
  }
}

export class WeekElement {
  public mon: DayOfWeekElement;
  public tue: DayOfWeekElement;
  public wed: DayOfWeekElement;
  public thu: DayOfWeekElement;
  public fri: DayOfWeekElement;
  public sat: DayOfWeekElement;
  public sun: DayOfWeekElement;

  private items: Array<DayOfWeekElement>;

  constructor() {
    this.mon = new DayOfWeekElement();
    this.tue = new DayOfWeekElement();
    this.wed = new DayOfWeekElement();
    this.thu = new DayOfWeekElement();
    this.fri = new DayOfWeekElement();
    this.sat = new DayOfWeekElement();
    this.sun = new DayOfWeekElement();

    this.items = new Array<DayOfWeekElement>(
      ...[this.mon, this.tue, this.wed, this.thu, this.fri, this.sat, this.sun]
    );
  }

  public get isValidate(): boolean {
    // 모두 사용 안함 일 경우
    if (this.items.filter((x) => x.disabled).length === this.items.length) {
      return false;
    }

    const validate =
      this.items.filter((x) => x.isValidate).length === this.items.length;
    return validate;
  }

  fromMessage(message: Schedule.Week) {
    if (message.getMon()) {
      this.mon.fromMessage(message.getMon());
    }

    if (message.hasTue()) {
      this.tue.fromMessage(message.getTue());
    }

    if (message.hasWed()) {
      this.wed.fromMessage(message.getWed());
    }

    if (message.hasThu()) {
      this.thu.fromMessage(message.getThu());
    }

    if (message.getFri()) {
      this.fri.fromMessage(message.getFri());
    }

    if (message.getSat()) {
      this.sat.fromMessage(message.getSat());
    }

    if (message.getSun()) {
      this.sun.fromMessage(message.getSun());
    }
  }

  toMessage(): Schedule.Week {
    const message = new Schedule.Week();
    message.setMon(this.mon.toMessage());
    message.setTue(this.tue.toMessage());
    message.setWed(this.wed.toMessage());
    message.setThu(this.thu.toMessage());
    message.setFri(this.fri.toMessage());
    message.setSat(this.sat.toMessage());
    message.setSun(this.sun.toMessage());

    return message;
  }
}

export class ScheduleElement {
  public id: number;
  public name: string;
  public startDate: Date;
  public endDate: Date;
  public useDate: boolean;

  public week: WeekElement;

  public getShortName(): string {
    return this.name?.length > 20 ? `${this.name.substr(0, 20)}...` : this.name;
  }

  public get isValidate(): boolean {
    // check name;
    if (isNullOrUndefined(this.name)) {
      return false;
    }

    // check name length
    if (this.name?.length <= 0) {
      return false;
    }

    // check week validate
    if (!this.week.isValidate) {
      return false;
    }

    // check period
    if (this.useDate) {
      if (
        isNullOrUndefined(this.startDate) ||
        !isDate(this.startDate) ||
        isNullOrUndefined(this.endDate) ||
        !isDate(this.endDate)
      ) {
        return false;
      }
    }

    return true;
  }

  constructor() {
    this.week = new WeekElement();
    this.useDate = false;
  }

  public static fromMessage(message: Schedule) {
    const element = new ScheduleElement();
    element.fromMessage(message);
    return element;
  }

  public fromMessage(message: Schedule) {
    this.id = message.getScheduleid();
    this.name = message.getName();

    this.useDate = message.getUsedate();

    if (message.getUsedate()) {
      this.startDate = CommonExtensions.utcSecondsToDate(
        message.getStartdateseconds()
      );
      this.endDate = CommonExtensions.utcSecondsToDate(
        message.getEnddateseconds()
      );
    }

    if (message.hasWeek()) {
      this.week.fromMessage(message.getWeek());
    }
  }

  public toMessage(): Schedule {
    const message = new Schedule();
    message.setScheduleid(this.id);
    message.setName(this.name);
    message.setUsedate(this.useDate);
    if (this.useDate) {
      message.setStartdateseconds(this.startDate.getTime() / 1000);
      message.setEnddateseconds(this.endDate.getTime() / 1000);
    }
    message.setWeek(this.week.toMessage());

    return message;
  }
}
