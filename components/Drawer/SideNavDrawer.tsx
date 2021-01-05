import Link from 'next/link';
import React, { useContext, useEffect } from 'react'
import style from './drawer.module.css'
import { DrawerAccessContext } from './DrawerManager';
 
interface Props {

}



 

const SideNavDrawer = () => {

    const { closerDrawer, isDrawerOpen, drawerContent } = useContext(DrawerAccessContext);
    useEffect(() => {

    }, [isDrawerOpen, drawerContent])
    return (<React.Fragment>{isDrawerOpen && <div className={style.drawerWrapper} style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10000 }}>

        <div className={style.drawerContainer} onClick={() => closerDrawer()} style={{ width: '100%', height: '100%', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: '#ffffff', opacity: '0.30' }}> </div>
        <div className={style.drawerContent} style={{width:'400px'}}>
            <div className="h-screen  bg-thm2  fixed top-0 bottom-0 left-0 flex flex-col">
          
                <div className="mx-auto px-8 py-2">{/*  <MobileLogo /> */}</div>
         
                <div className="py-2"><Link href="/myaccount">  My Account </Link></div> 
               
                <a href="" title="my account">  </a>
           
            </div>
           
            </div>
             
           </div>

    }</React.Fragment>
    )
}

export default SideNavDrawer


