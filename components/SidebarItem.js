import React from 'react'

const SidebarItem = ({ label, Icon, ...props }) => {
    return (
        <button { ...props } className='flex'>
            <Icon className='w-5 h-5' />
            <p>{ label }</p>
        </button>
    )
}

export default SidebarItem