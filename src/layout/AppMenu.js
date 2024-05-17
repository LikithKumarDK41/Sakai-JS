import React, { useContext } from 'react';
import { MdSettings } from "react-icons/md";
import { BsHouseGearFill } from "react-icons/bs";

import AppMenuitem from '@/layout/AppMenuitem';
import { LayoutContext } from '@/layout/context/layoutcontext';
import { MenuProvider } from '@/layout/context/menucontext';
import { getValueByKeyRecursively as translate } from '@/helper';

const AppMenu = () => {
    const { localeJson } = useContext(LayoutContext);
    const url = window.location.pathname;

    // Admin side bar information
    const adminModel = [
        {
            label: translate(localeJson, 'event_information_'),
            icon: <MdSettings size={16} />,
            class: "without-top-element",
            items: [
                {
                    label: translate(localeJson, 'event_status_list'),
                    icon: <BsHouseGearFill size={16} />,
                },
            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {url.startsWith('/') && (
                    adminModel.map((item, i) => {
                        return !item.seperator ? <AppMenuitem item={item} root={true} active={item.active} index={i} key={i} /> : <li className="menu-separator"></li>;
                    })
                )}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
