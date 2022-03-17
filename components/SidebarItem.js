import React from 'react'

const SidebarItem = ({ label, Icon, ...props }) => {
    return (
        <button { ...props } className='flex items-center space-x-2 text-sm md:text-lg hover:text-white'>
            <Icon className='w-5 h-5' />
            <p>{ label }</p>
        </button>
    )
}

export default SidebarItem