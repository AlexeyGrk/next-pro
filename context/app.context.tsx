import { createContext, ReactNode } from 'react';
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';
import { AppContext } from 'next/app';

export interface IAppContext {
  menu: MenuItem[],
  firstCategory:TopLevelCategory,
  setMenu?: (newMenu:MenuItem[])=> void;
}

// export const AppContext = createContext<IAppContext>({ menu:[],firstCategory:TopLevelCategory.Courses});


// export const AppContextProvider = ({menu,firstCategory,children}:IAppContext & {children: ReactNode}) => {
//   return <AppContext.Provider>
//     {children}
//   </AppContext.Provider>
// }
