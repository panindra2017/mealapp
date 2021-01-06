import React, { useState, useContext } from 'react'
import Drawer from '../components/Drawer/Drawer';
import { PageStateContext } from '../components/PageContextManager';
 

interface Props {

}

const DrawerContainer = (props: Props) => {



    const { PageState, PageStateAction, menuItems } = useContext(PageStateContext);

    const {  sidebarShow } = PageState;


    return (
        <div>

            <Drawer align="left" drawerComponent={ <div> NO LEFT </div>} show={sidebarShow}
                onClose={() => PageStateAction({ type: "toggleSidebar" })} />


           

        </div>
    )
}

export default DrawerContainer
