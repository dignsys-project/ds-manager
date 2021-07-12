import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ConnectorBaseElement } from 'src/app/models/connector-base-element';
import { SelectionElement } from 'src/app/models/selection-element';
import { ConnectorsService } from 'src/app/services/connectors.service';
import { AppService } from 'src/app/app.service';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { takeWhile, filter } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FormControl, Validators } from '@angular/forms';

enum MEDIA_MATCH_KIND {
  MEDIA_MATCH_KIND_DEFAULT = 0,
  MEDIA_MATCH_KIND_425PX,
  MEDIA_MATCH_KIND_XSMALL,
  MEDIA_MATCH_KIND_850PX,
  MEDIA_MATCH_KIND_SMALL,
  MEDIA_MATCH_KIND_MEDIUM,
  MEDIA_MATCH_KIND_LARGE,
}

@Component({
  selector: 'app-components-connector-select',
  templateUrl: './components-connector-select.component.html',
  styleUrls: ['./components-connector-select.component.scss'],
})
export class ComponentsConnectorSelectComponent implements OnInit {
  @Input()
  set elements(value: Array<ConnectorBaseElement>) {
    this.dataSource.data = value;
  }

  @Output()
  selected: EventEmitter<ConnectorBaseElement> = new EventEmitter<
    ConnectorBaseElement
  >();

  @ViewChild(MatPaginator, { static: true })
  m_Paginator: MatPaginator = null;

  private m_bSubscribe: boolean = true;

  isDarkMode: boolean = false;

  private mediaMatchKind$: BehaviorSubject<
    MEDIA_MATCH_KIND
  > = new BehaviorSubject<MEDIA_MATCH_KIND>(
    MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_DEFAULT
  );

  displayedColumns: Array<string> = ['select', 'name', 'device_id', 'created'];

  dataSource: MatTableDataSource<ConnectorBaseElement>;

  formControl: FormControl;

  constructor(
    private appService: AppService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.formControl = new FormControl(null, [Validators.required]);
    this.formControl.valueChanges.subscribe((element: ConnectorBaseElement) =>
      this.selected.next(element)
    );

    this.mediaMatchKind$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .pipe(filter((x) => x !== MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_DEFAULT))
      .subscribe((mediaMatchKind) => {
        switch (mediaMatchKind) {
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_425PX:
            this.displayedColumns = ['select', 'name'];
            break;
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_XSMALL:
            this.displayedColumns = ['select', 'name', 'device_id'];
            break;

          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_850PX:
            this.displayedColumns = ['select', 'name', 'device_id'];
            break;
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_SMALL:
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_MEDIUM:
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_LARGE:
          default:
            this.displayedColumns = ['select', 'name', 'device_id', 'created'];
            break;
        }
      });
    this.dataSource = new MatTableDataSource<ConnectorBaseElement>();

    appService.isDarkMode$.subscribe(
      (isDarkmode) => (this.isDarkMode = isDarkmode)
    );

    this.breakpointObserver
      .observe(['(max-width: 424.9px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mediaMatchKind$.next(MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_425PX);
        }
      });

    this.breakpointObserver
      .observe(['(min-width: 425px) and (max-width: 599.9px)'])
      .subscribe((result) => {
        if (result.matches) {
          this.mediaMatchKind$.next(MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_XSMALL);
        }
      });

    this.breakpointObserver
      .observe(['(min-width: 600px) and (max-width: 849.9px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mediaMatchKind$.next(MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_850PX);
        }
      });

    this.breakpointObserver
      .observe(['(min-width: 850px) and (max-width: 959.9px)'])
      .subscribe((result) => {
        if (result.matches) {
          this.mediaMatchKind$.next(MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_SMALL);
        }
      });

    this.breakpointObserver
      .observe([Breakpoints.Medium])
      .subscribe((result) => {
        if (result.matches) {
          this.mediaMatchKind$.next(MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_MEDIUM);
        }
      });

    this.breakpointObserver.observe([Breakpoints.Large]).subscribe((result) => {
      if (result.matches) {
        this.mediaMatchKind$.next(MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_LARGE);
      }
    });
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.m_Paginator;
  }

  ngOnDestroy(): void {}

  onClickedRow(element: ConnectorBaseElement) {
    this.formControl.setValue(element);
  }

  onRadioGroupChanged(event: any) {}
}
