import { Anchor, Button, Menu, useMantineTheme } from "@mantine/core";
import React from "react";
import "./mainmenu.css";
import { IconChevronDown } from "@tabler/icons-react";
import {scrollToElement} from "../../utils/scrollToElement.ts";

interface MainMenuProps {
    fullVersion?: boolean;
    isDrawer?: boolean;
    isFooter?: boolean;
}

const MainMenu: React.FC<MainMenuProps> = ({ fullVersion = false, isDrawer = false, isFooter = false }) => {
    const theme = useMantineTheme();

    enum MenuList {
        AboutUs = "aboutUs",
        Gallery = "gallery",
        Services = "services",
        Team = "team",
        Reviews = "reviews",
        Locations = "locations",
        Questions = "questions",
    }

    const handleScroll = (id: string) => {
        scrollToElement(id);
    };

    const menuItems = [
        { label: "Про нас", id: MenuList.AboutUs },
        { label: "Галерея", id: MenuList.Gallery },
        { label: "Послуги", id: MenuList.Services },
        { label: "Команда", id: MenuList.Team },
    ];

    const additionalMenuItems = [
        { label: "Відгуки", id: MenuList.Reviews },
        { label: "Локації", id: MenuList.Locations },
        { label: "Питання", id: MenuList.Questions },
    ];

    const renderAnchor = (label: string, id: string) => (
        <Anchor
            className={"anchor"}
            size="sm"
            style={{ color: theme.colors.text[9] }}
            onClick={(e) => {
                e.preventDefault();
                handleScroll(id);
            }}
        >
            {label}
        </Anchor>
    );

    return (
        <>
            <section className={isDrawer || isFooter ? 'main-menu-column' : ''}>
                {menuItems.map((item) => (
                    <React.Fragment key={item.id} >
                        {renderAnchor(item.label, item.id)}
                    </React.Fragment>
                ))}

                {!fullVersion ? (
                    <Menu shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400}>
                        <Menu.Target>
                            <Button
                                className={"dropdownButton"}
                                style={{ color: theme.colors.text[9] }}
                                variant={"outline"}
                                size="sm"
                            >
                                Ще <IconChevronDown size={16} style={{ margin: "0 4px" }} />
                            </Button>
                        </Menu.Target>

                        <Menu.Dropdown style={{ align: "center", zIndex: 9999 }}>
                            {additionalMenuItems.map((item) => (
                                <Menu.Item key={item.id}>{renderAnchor(item.label, item.id)}</Menu.Item>
                            ))}
                        </Menu.Dropdown>
                    </Menu>
                ) : (
                    additionalMenuItems.map((item) => (
                        <React.Fragment key={item.id}>
                            {renderAnchor(item.label, item.id)}
                        </React.Fragment>
                    ))
                )}
            </section>
        </>
    );
};

export default MainMenu;
