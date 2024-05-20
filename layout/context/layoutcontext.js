import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Router from 'next/router';

import jpJson from '@/public/locales/jp/lang.json'
import enJson from '@/public/locales/en/lang.json'

export const LayoutContext = React.createContext();

export const LayoutProvider = (props) => {
    const router = useRouter();
    const [layoutConfig, setLayoutConfig] = useState({
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'default',
        scale: 14
    });
    const [layoutState, setLayoutState] = useState({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    });
    const [localeJson, setLocaleJson] = useState(jpJson);
    const [locale, setLocale] = useState();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const handleRouteChangeComplete = (url) => {
            updateLayoutConfigState();
        };

        Router.events.on('routeChangeComplete', handleRouteChangeComplete);

        return () => {
            Router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, []);

    /**
     * Layout config state update
     */
    const updateLayoutConfigState = () => {
        setLayoutConfig(prevState => ({
            ...prevState,
            menuMode: 'static',
        }));
    }

    useEffect(() => {
        if (locale && locale == 'en') {
            localStorage.setItem('locale', 'en');
            setLocale("en");
            setLocaleJson(enJson);
        } else {
            localStorage.setItem('locale', 'ja');
            setLocale("ja");
            setLocaleJson(jpJson);
        }
    }, [])

    const onMenuToggle = () => {
        if (isOverlay()) {
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, overlayMenuActive: !prevLayoutState.overlayMenuActive }));
        }

        if (isDesktop()) {
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive }));
        } else {
            setLayoutState((prevLayoutState) => ({ ...prevLayoutState, staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive }));
        }
    };

    const showProfileSidebar = () => {
        setLayoutState((prevLayoutState) => ({ ...prevLayoutState, profileSidebarVisible: !prevLayoutState.profileSidebarVisible }));
    };

    const onChangeLocale = (props) => {
        if (locale != props) {
            if (props === "en") {
                setLocale("en");
                setLocaleJson(enJson);
                localStorage.setItem('locale', 'en');
                if (window.location.pathname.startsWith('/user/map')) {
                    window.location.reload();
                }
            } else {
                setLocale("ja");
                setLocaleJson(jpJson);
                localStorage.setItem('locale', 'ja');
                if (window.location.pathname.startsWith('/user/map')) {
                    window.location.reload();
                }
            }
        }
        setTimeout(() => {
            setLoader(false);
        }, 3000);
    }

    const isOverlay = () => {
        return layoutConfig.menuMode === 'overlay';
    };

    const isDesktop = () => {
        return window.innerWidth > 991;
    };

    const value = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar,
        locale,
        onChangeLocale,
        localeJson,
        loader,
        setLoader,
    };

    return <LayoutContext.Provider value={value}>{props.children}</LayoutContext.Provider>;
};
