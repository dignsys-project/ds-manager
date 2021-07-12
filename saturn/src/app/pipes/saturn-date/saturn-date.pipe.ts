import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({
  name: "saturnDate",
})
export class SaturnDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: Date, extension: string = "long"): string {
    if (extension === "short") {
      return this.datePipe.transform(value, "yyyy년 MM월 dd일");
    }

    return this.datePipe.transform(value, "yyyy년 MM월 dd일 HH시 mm분");
  }
}
