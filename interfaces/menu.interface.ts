
export interface PageItem {
  alias:string;
  title:string;
  _id:string;
  category:string;
}
export interface MenuItem {
  _id: {
    secondaryCategory:string;
  };
  category:MenuItem[];
}