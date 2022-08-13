
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
  category:MenuItem[];
}