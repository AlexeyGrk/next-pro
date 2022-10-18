import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import CoursesIcon from './icons/graduation-hat-grey.svg';
import { TopLevelCategory } from '../interfaces/page.interface';
import ServicesIcon from './icons/cloud-computing.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/box.svg';

export const firstLevelMenu: FirstLevelMenuItem[] = [{
  route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses
},
  {
    route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services
  },
  {
    route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books
  },
  {
    route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategory.Products
  }
];


export const priceUa = (price: number): string => Math.round(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₴');

export const declOfNum = (number: number, titles: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
export const arraySearch = (array, keyword) => {
  const searchTerm = keyword.toLowerCase();
  return array.filter(value => {
    return value.title.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
      value.category.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
      value.alias.toLowerCase().match(new RegExp(searchTerm, 'g'));
  });
};