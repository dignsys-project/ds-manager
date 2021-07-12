import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { ScenesHeaderService } from '../scenes-header.service';

@Component({
  selector: 'app-scenes-resource-list-v2',
  templateUrl: './scenes-resource-list-v2.component.html',
  styleUrls: ['./scenes-resource-list-v2.component.scss'],
})
export class ScenesResourceListV2Component implements OnInit {
  constructor(private sceneHeaderService: ScenesHeaderService) {
    this.sceneHeaderService.title$.next('리소스 목록');
  }

  ngOnInit() {}
}
