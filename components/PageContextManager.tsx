import React, { useReducer } from "react";


const menuItems = [{
  title: "Home",
  link: '/',
  active: false
}, {
  title: "Ultra Brain ™",
  link: '/ultra-brain',
  active: false
},
{
  title: "Vibes",
  link: '/vibes',
  active: false
},
{
  title: "Vitamin C",
  link: '/vitaminc',
  active: false
},
{
  title: "Knowledge",
  link: '/knowledge',
  active: false
},
{
  title: "About Us",
  link: '/about',
  active: false
}
]

interface IPageState {
  sidebarShow: boolean;
  sidecartShow: boolean;
  menuItems: any[]
}
interface IAction {
  type: string;
  payload?: any;
}
interface IPageReducer {
  state: IPageState;
  action: IAction;
}
function reducer(state: IPageState, action: IAction) {
  switch (action.type) {
    case "toggleSidebar":
      return { ...state, sidebarShow: !state.sidebarShow };
    case "toggleSidecart":
      return { ...state, sidecartShow: action.payload ? action.payload : false };

    default:
      return state;
  }
}

const initPage: IPageState = {
  sidebarShow: false,
  sidecartShow: false,
  menuItems: menuItems
};
export const PageStateContext = React.createContext({} as any);

const PageStateManager = ({ children, ...props }: any) => {
  const [state, dispatch] = useReducer(reducer, initPage);
  return (
    <PageStateContext.Provider
      value={{ PageState: state, PageStateAction: dispatch, menuItems }}
    >
      {children}
    </PageStateContext.Provider>
  );
};

export default PageStateManager;
