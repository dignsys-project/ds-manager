import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  OnDestroy,
  ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__,
  EventEmitter,
} from '@angular/core';
import { SelectionElement } from 'src/app/models/selection-element';
import { MatTableDataSource } from '@angular/material/table';
import { MemberElement } from 'src/app/models/member-element';
import { takeWhile, filter, tap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { AppService } from 'src/app/app.service';
import {
  BreakpointObserver,
  Breakpoints,
  MediaMatcher,
  BreakpointState,
} from '@angular/cdk/layout';
import { isNullOrUndefined } from 'util';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { MemberBaseElement } from 'src/app/models/member-base-element';
import { ComponentsMemberTableService } from './components-member-table.service';

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
  selector: 'app-components-member-table',
  templateUrl: './components-member-table.component.html',
  styleUrls: ['./components-member-table.component.scss'],
})
export class ComponentsMemberTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true })
  m_Paginator: MatPaginator = null;

  @Input()
  set elements(value: Array<MemberBaseElement>) {
    if (!isNullOrUndefined(value)) {
      this.m_Elements = value;

      this.dataSource.data = value;
      this.selection.clear();
    }
  }

  @Input()
  disabled: boolean = false;

  @Output()
  selected: EventEmitter<Array<MemberBaseElement>> = new EventEmitter<
    Array<MemberBaseElement>
  >();

  @Output()
  clicked: EventEmitter<MemberBaseElement> = new EventEmitter<
    MemberBaseElement
  >();

  private m_Elements: Array<MemberBaseElement>;

  private isSubscribe: boolean = true;

  isDarkMode: boolean = false;

  private mediaMatchKind$: BehaviorSubject<
    MEDIA_MATCH_KIND
  > = new BehaviorSubject<MEDIA_MATCH_KIND>(
    MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_DEFAULT
  );

  displayedColumns: Array<string> = [
    'select',
    'email',
    'member_kind',
    // 'register', // 멤버 타입으로 변경
    // 'permission',
    'created',
    'last_connected',
  ];

  dataSource: MatTableDataSource<MemberBaseElement>;
  selection: SelectionElement<MemberBaseElement>;

  constructor(
    private service: ComponentsMemberTableService,
    private appService: AppService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.mediaMatchKind$
      .pipe(takeWhile(() => this.isSubscribe))
      .pipe(filter((x) => x !== MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_DEFAULT))
      .subscribe((mediaMatchKind) => {
        switch (mediaMatchKind) {
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_425PX:
            this.displayedColumns = ['select', 'email'];
            break;
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_XSMALL:
            this.displayedColumns = ['select', 'email', 'member_kind'];
            break;

          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_850PX:
            this.displayedColumns = [
              'select',
              'email',
              'member_kind',
              // 'register',
            ];
            break;
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_SMALL:
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_MEDIUM:
            this.displayedColumns = [
              'select',
              'email',
              'member_kind',
              // 'register',
            ];
            break;
          case MEDIA_MATCH_KIND.MEDIA_MATCH_KIND_LARGE:
          default:
            this.displayedColumns = [
              'select',
              'email',
              'member_kind',
              // 'register',
              'created',
              'last_connected',
            ];
            break;
        }
      });
    this.dataSource = new MatTableDataSource<MemberElement>();
    this.selection = new SelectionElement<MemberBaseElement>(this.dataSource);

    appService.isDarkMode$.subscribe(
      (isDarkmode) => (this.isDarkMode = isDarkmode)
    );

    this.service.deletedElements$
      .pipe(takeWhile(() => this.isSubscribe))
      .pipe(filter((elements) => !isNullOrUndefined(elements)))
      .subscribe((elements) => {
        const items = this.m_Elements;
        elements.forEach((element) => {
          const index = items.findIndex((x) => x.id === element.id);
          if (-1 != index) {
            items.splice(index, 1);
          }
        });

        this.dataSource.data = items;
        this.selection.clear();
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

  ngOnDestroy(): void {
    this.service.deletedElements$.next(null);
  }

  onClickedMemberItem(memberElement: MemberBaseElement) {
    this.clicked.next(memberElement);
  }

  onChangeCheckboxSelectItem(
    event: MatCheckboxChange,
    element: MemberBaseElement
  ) {
    this.selection.toggle(element);

    this.selected.next(this.selection.items());
  }
  onChangeCheckboxSelectAllItems(event: MatCheckboxChange) {
    this.selection.masterToggle();

    this.selected.next(this.selection.items());
  }
}
