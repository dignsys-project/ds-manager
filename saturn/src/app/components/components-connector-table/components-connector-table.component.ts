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
import { ConnectorsService } from 'src/app/services/connectors.service';
import { SelectionElement } from 'src/app/models/selection-element';
import { AppService } from 'src/app/app.service';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { takeWhile, filter, take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { isNullOrUndefined } from 'util';

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
  selector: 'app-components-connector-table',
  templateUrl: './components-connector-table.component.html',
  styleUrls: ['./components-connector-table.component.scss'],
})
export class ComponentsConnectorTableComponent implements OnInit {
  private m_Elements: Array<ConnectorBaseElement>;

  @ViewChild(MatPaginator, { static: true })
  m_Paginator: MatPaginator = null;

  @Output()
  selected: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  disabled: boolean = false;

  @Input()
  set elements(elements: Array<ConnectorBaseElement>) {
    this.m_Elements = elements;

    this.dataSource.data = elements;

    this.selection.clear();
  }

  get elements(): Array<ConnectorBaseElement> {
    return this.m_Elements;
  }

  private m_bSubscribe: boolean = true;

  isDarkMode: boolean = false;

  private mediaMatchKind$: BehaviorSubject<MEDIA_MATCH_KIND> = new BehaviorSubject<MEDIA_MATCH_KIND>(
    MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_DEFAULT
  );

  displayedColumns: Array<string> = [
    'select',
    'name',
    // 'device_id',
    'kind',
    'created',
  ];

  dataSource: MatTableDataSource<ConnectorBaseElement>;
  selection: SelectionElement<ConnectorBaseElement>;

  constructor(
    private service: ConnectorsService,
    private appService: AppService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.mediaMatchKind$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .pipe(filter((x) => x !== MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_DEFAULT))
      .subscribe((mediaMatchKind) => {
        switch (mediaMatchKind) {
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_425PX:
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_XSMALL:
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_850PX:
            this.displayedColumns = [
              'select',
              'name',
              'kind',
              'emergency_saturn',
            ];
            break;
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_SMALL:
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_MEDIUM:
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_LARGE:
          default:
            this.displayedColumns = [
              'select',
              'name',
              // 'device_id',
              'kind',
              'created',
              'updated',
              'emergency_saturn',
            ];
            break;
        }
      });
    this.dataSource = new MatTableDataSource<ConnectorBaseElement>();
    this.selection = new SelectionElement<ConnectorBaseElement>(
      this.dataSource
    );

    appService.isDarkMode$.subscribe(
      (isDarkmode) => (this.isDarkMode = isDarkmode)
    );

    this.service.deletedElements$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .pipe(filter((elements) => !isNullOrUndefined(elements)))
      .subscribe((deletedElements) => {
        let elements = this.dataSource.data;
        elements = elements.filter(
          (x) =>
            -1 ===
            deletedElements.findIndex((de) => de.connectorId === x.connectorId)
        );

        this.elements = elements;

        this.service.deletedElements$.next(null);
      });

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
    this.selected.next(element.connectorId);
  }

  onChangeCheckboxSelectItem(
    event: MatCheckboxChange,
    element: ConnectorBaseElement
  ) {
    this.selection.toggle(element);
    this.service.selectedElements$.next(this.selection.items());
  }

  onChangeCheckboxSelectAllItems(event: MatCheckboxChange) {
    this.selection.masterToggle();
    this.service.selectedElements$.next(this.selection.items());
  }
}
