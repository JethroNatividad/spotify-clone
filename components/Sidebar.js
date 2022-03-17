import React from 'react'
import { HeartIcon, HomeIcon, LibraryIcon, PlusCircleIcon, RssIcon, SearchIcon } from '@heroicons/react/outline'
import SidebarItem from './SidebarItem'
const Sidebar = () => {
    return (
        <div className='text-gray-600'>
            <div className='p-5 space-y-2'>
                <SidebarItem Icon={ HomeIcon } label="Home" />
                <SidebarItem Icon={ SearchIcon } label="Search" />
                <SidebarItem Icon={ LibraryIcon } label="Your library" />
                <hr className='border-t-1 border-gray-900' />
                <SidebarItem Icon={ PlusCircleIcon } label="Create Playlist" />
                <SidebarItem Icon={ HeartIcon } label="Liked Songs" />
                <SidebarItem Icon={ RssIcon } label="Your Episodes" />
                <hr className='border-t-1 border-gray-900' />
            </div>
        </div>
    )
}

export default Sidebar