import { TopLevelCategory } from './page.interface';

export interface PageItem {
  alias:string;
  title:string;
  _id:string;
  category:string;
}
export interface MenuItem {
  pages: any;
  _id: {
    secondCategory:string;
  };
  isOpened?:boolean;
  category:MenuItem[];
}

export interface FirstLevelMenuItem {
  route:string;
  name:string;
  icon:JSX.Element;
  id: TopLevelCategory;

}