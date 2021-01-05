import React, { useState, ReactElement, useEffect } from 'react'
 

interface Props {
}
export const DrawerAccessContext = React.createContext({} as any);

const DrawerManager = ({ children }: any) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState<Boolean>(false)
    const [position, setposition] = useState('left');
    const [drawerContent, setdrawerContent] = useState("")

    function openDrawer(position: any, container: any) {

        console.log('opne draw commonad', container)
        setIsDrawerOpen(!isDrawerOpen)
        if (isDrawerOpen) {
            setdrawerContent(container);
            setposition(position);
        }
        else {
            setdrawerContent(container);
            setposition(position);
        }


    }
    function closerDrawer() {

        setdrawerContent("");
        setposition("left");
        setIsDrawerOpen(false)

    }
    useEffect(() => {

    }, [drawerContent, isDrawerOpen])
    function setPosition(postion: string) {
        setposition(postion);

    }

    return (
        <DrawerAccessContext.Provider value={{
            openDrawer, closerDrawer, isDrawerOpen, position, setPosition, drawerContent
        }}>
            {children}  </DrawerAccessContext.Provider>

    )
}

export default DrawerManager
