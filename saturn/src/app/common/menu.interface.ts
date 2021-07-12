export interface IMenu {
  name: string;
  url: string;
  children?: Array<IMenu>;
}
