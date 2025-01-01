import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Menu, Tag } from "antd";
import navigation from "../../../../navigation/vertical";

export default function MenuItem(props) {
    const [authorizedMenuItems, setAuthorizedMenuItems] = useState(navigation);
    const customise = useSelector(state => state.customise);
    const { authorizedPages } = useSelector((state) => state.settings);
    const location = useLocation();

    const { pathname } = location;
    const { onClose } = props;

    const splitLocation = pathname.split("/");

    useEffect(async () => {
        getData();
    }, []);

    // useEffect(() => {
    //     const data = [];

    //     if (navigation) {
    //         navigation.forEach((eachMenuItem) => {
    //             if (eachMenuItem.header) {
    //                 const filteredHeaderGroup = navigation.filter((eachItem) => (eachItem.group === eachMenuItem.header &&
    //                     authorizedPages?.some((authPage) => authPage.screen === eachItem.navLink && authPage.permission)));

    //                 if (filteredHeaderGroup?.length > 0) {
    //                     data.push(eachMenuItem);
    //                 };
    //             }
    //             else {
    //                 const matchedPage = authorizedPages?.find((eachPage) => (eachPage.screen === eachMenuItem.navLink));

    //                 if (matchedPage && matchedPage.permission) {
    //                     data.push(eachMenuItem);
    //                 };
    //             };
    //         });
    //         setAuthorizedMenuItems(data);
    //     };
    // }, [navigation, authorizedPages]);

    const getData = async () => {

    };

    const menuItem = authorizedMenuItems?.map((item, index) => {
        if (item.header) {
            return <Menu.ItemGroup key={index} title={item.header}></Menu.ItemGroup>;
        }
        else {
            const itemNavLink = item.navLink ? item.navLink.split("/") : '';

            return (
                <Menu.Item key={item.id} icon={item.icon} onClick={onClose} style={item.tag && { pointerEvents: 'none' }}
                    className={splitLocation[splitLocation.length - 2] + "/" + splitLocation[splitLocation.length - 1] === itemNavLink[itemNavLink.length - 2] + "/" + itemNavLink[itemNavLink.length - 1] ?
                        "ant-menu-item-selected" : "ant-menu-item-selected-in-active"}
                >
                    {item.tag ?
                        (<a href="#" className="hp-d-flex hp-align-items-center hp-d-flex-between">
                            <span>{item.title}</span>
                            <Tag className="hp-mr-0 hp-border-none hp-text-color-black-100 hp-bg-success-3 hp-border-radius-full hp-px-8" style={{ marginRight: -14 }}>{item.tag}</Tag>
                        </a>)
                        : (<Link to={item.navLink}>{item.title}</Link>)}
                </Menu.Item>
            );
        };
    });

    return (
        <Menu mode="inline" theme={customise.theme == "light" ? "light" : "dark"}
            defaultOpenKeys={[splitLocation.length === 5 ? splitLocation[splitLocation.length - 3] : null, splitLocation[splitLocation.length - 2],]}
        >
            {menuItem}
        </Menu>
    );
};