import { Guid } from 'guid-typescript';

export class ICanvasResolution {
  width: number;
  height: number;
  name: string;
  id: Guid;
  fixed: boolean;
}
