import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/common/menu.interface';

@Component({
  selector: 'app-scene-developments',
  templateUrl: './scene-developments.component.html',
  styleUrls: ['./scene-developments.component.scss'],
})
export class SceneDevelopmentsComponent implements OnInit {
  menus: Array<IMenu>;

  hasChildren(menu: IMenu): boolean {
    return menu?.children?.length > 0;
  }

  constructor() {
    this.menus = [
      {
        name: 'connector-scene-stepper',
        url: 'connector-scene-stepper',
      },
      {
        name: 'component dialog test',
        url: 'scene-resource',
      },
      {
        name: 'scene list',
        url: 'scene-list',
      },
      {
        name: 'components',
        url: 'components',
        children: [
          { name: 'slide-image', url: 'components-slide-image' },
          { name: 'subtitle', url: 'components-subtitle' },
          { name: 'rss', url: 'components-rss' },
        ],
      },
    ];
  }

  ngOnInit(): void {}
}
