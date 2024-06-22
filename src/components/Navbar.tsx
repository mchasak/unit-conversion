import { Tab, Tabs } from '@mui/material'
import React from 'react'

type NavbarLinkProps = {
    links: string[]
    selectedTab: number;
    handleTabChange: (event: any, newValue: number) => void;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({links, selectedTab, handleTabChange}) => {
    return (
        <Tabs value={selectedTab} onChange={handleTabChange}>
            {links.map((link, index) => (
                <Tab key={index} label={link} />
            ))}
        </Tabs>
    )
}