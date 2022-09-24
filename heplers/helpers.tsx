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


 export const priceUa = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₴');