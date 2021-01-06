import React, { useContext, useEffect } from 'react'
import style from './drawer.module.css'
import { DrawerAccessContext } from './DrawerManager';
 
import ScrollLock from 'react-scrolllock';
 
 
 
interface Props {

}

const Drawer = (props: any) => {
    const { openDrawer, closerDrawer, isDrawerOpen, position, setPosition, drawerContent } = useContext(DrawerAccessContext);
    useEffect(() => {

    }, [closerDrawer, isDrawerOpen])
    return (
        <div className={style.drawerWrapper}>

                <React.Fragment><ScrollLock isActive={isDrawerOpen} /></React.Fragment>
            <div className={style.drawerContainer}>
            {/*     {isDrawerOpen && drawerContent === "SIDENAV" && <SideNavDrawer />} */}
          

            </div>
        </div>
    )
}

export default Drawer


const RenderChildren = (props: any) => {
    console.log(props)
    return <React.Fragment>{props.children}</React.Fragment>
}