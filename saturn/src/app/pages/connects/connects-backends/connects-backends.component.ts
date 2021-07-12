import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConnectsBackendsService } from './connects-backends.service';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { MatTableDataSource } from '@angular/material/table';
import { isNullOrUndefined } from 'util';
import { ConnectsHeaderService } from '../connects-header.service';

interface IAssemVersionElement {
  name: string;
  version: string;
}
interface IVersionElement {
  serviceName: string;
  os: string;
  runtime: string;

  assem: IAssemVersionElement;
  elapsed: number;
}

@Component({
  selector: 'app-connects-backends',
  templateUrl: './connects-backends.component.html',
  styleUrls: ['./connects-backends.component.scss'],
})
export class ConnectsBackendsComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<IVersionElement>;
  displayedColumns: Array<string> = [
    'service_name',
    'os',
    'runtime',
    'assem_name',
    'assem_version',
    'elapsed',
  ];

  private mTimer: any;

  constructor(
    private service: ConnectsBackendsService,
    headerService: ConnectsHeaderService
  ) {
    headerService.title$.next('서버');

    this.dataSource = new MatTableDataSource<IVersionElement>([]);
  }
  ngOnDestroy(): void {
    if (this.mTimer) {
      clearInterval(this.mTimer);
    }
  }

  ngOnInit(): void {
    this.mTimer = setInterval(() => this.onClickedVersion(), 1000);
  }

  onClickedVersion(): void {
    this.service
      .requestGetVersion()
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.dataSource.data = response.getVersionsList().map(
            (x) =>
              <IVersionElement>{
                serviceName: x.getServicename(),
                os: x.getOsversion(),
                runtime: x.getRuntimeversion(),
                assem: <IAssemVersionElement>{
                  name: x.getAssemversion().getName(),
                  version: x.getAssemversion().getVersion(),
                },
                elapsed: x.getElapsedmilliseconds(),
              }
          );

          const start = new Date().getTime();
          this.service
            .requestGetVersionPrometheus()
            .pipe(take(1))
            .subscribe(() => {
              const serviceVersion = this.dataSource.data.find(
                (x) => x.serviceName === 'Prometheus'
              );
              if (!isNullOrUndefined(serviceVersion)) {
                serviceVersion.elapsed = new Date().getTime() - start;
              }
            });
        }
      });
  }
}
