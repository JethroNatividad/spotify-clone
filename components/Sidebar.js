import React from 'react'
import { HomeIcon, LibraryIcon, SearchIcon } from '@heroicons/react/outline'
import SidebarItem from './SidebarItem'
const Sidebar = () => {
    return (
        <div>
            <div>
                <SidebarItem Icon={ HomeIcon } label="Home" />
                <SidebarItem Icon={ SearchIcon } label="Search" />
                <SidebarItem Icon={ LibraryIcon } label="Your library" />
            </div>
        </div>
    )
}

export default Sidebar