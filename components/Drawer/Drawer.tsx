import React, { useContext, useEffect } from 'react'
import style from './drawer.module.css'
import { DrawerAccessContext } from '../../core/DrawerManager/DrawerManager'
import SideNavDrawer from './SideNavDrawer';
import CartDrawer from './CartDrawer';
import SideAccount from './SideAccount';
import SearchDrawer from './SearchDrawer';
import ScrollLock from 'react-scrolllock';
interface Props {

}

const Drawer = (props: Props) => {
    const { openDrawer, closerDrawer, isDrawerOpen, position, setPosition, drawerContent } = useContext(DrawerAccessContext);
    useEffect(() => {

    }, [closerDrawer, isDrawerOpen])
    return (
        <div className={style.drawerWrapper}>

                <React.Fragment><ScrollLock isActive={isDrawerOpen} /></React.Fragment>
            <div className={style.drawerContainer}>
                {isDrawerOpen && drawerContent === "SIDENAV" && <SideNavDrawer />}
                {isDrawerOpen && drawerContent === "SIDECART" && <CartDrawer />}
                {isDrawerOpen && drawerContent === "SIDEACCOUNT" && <SideAccount />}
                {isDrawerOpen && drawerContent === "SEARCHDRAWER" && <SearchDrawer />}

            </div>
        </div>
    )
}

export default Drawer


const RenderChildren = (props: any) => {
    console.log(props)
    return <React.Fragment>{props.children}</React.Fragment>
}