import { Tab, Tabs } from '@mui/material'
import React from 'react'

type NavbarLinkProps = {
    links: string[]
    selectedTab: number;
    handleTabChange: (newValue: number) => void;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({links, selectedTab, handleTabChange}) => {
    return (
        <Tabs value={selectedTab} onChange={(event, newValue) => handleTabChange(newValue)}>
            {links.map((link, index) => (
                <Tab key={index} label={link} />
            ))}
        </Tabs>
    )
}