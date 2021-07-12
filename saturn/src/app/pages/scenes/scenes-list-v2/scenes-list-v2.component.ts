import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScenesHeaderService } from '../scenes-header.service';
import { ScenesService } from '../../../services/scenes.service';

@Component({
  selector: 'app-scenes-list-v2',
  templateUrl: './scenes-list-v2.component.html',
  styleUrls: ['./scenes-list-v2.component.scss'],
  providers: [ScenesService],
})
export class ScenesListV2Component implements OnInit, OnDestroy {
  constructor(private headerService: ScenesHeaderService) {
    this.headerService.title$.next('씬 목록');
  }

  ngOnInit() {}

  ngOnDestroy(): void {}
}
