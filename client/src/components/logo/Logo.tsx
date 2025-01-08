import React from 'react';
import {useMantineColorScheme} from "@mantine/core";
import {scrollToElement} from "../../utils/scrollToElement.ts";

interface LogoProps {
    src?: string | undefined;
    fullVersion?: boolean;
}

const Logo: React.FC<LogoProps> = ({src, fullVersion = false}: LogoProps) => {
    const {colorScheme} = useMantineColorScheme();

    const handleScroll = (id: string) => {
        scrollToElement(id);
    };

    return (
        <>
            <img
                src={src ? src : "https://firebasestorage.googleapis.com/v0/b/custom-qr-code.appspot.com/o/salon%2Flogo_dark.svg?alt=media"}
                alt="Logo"
                style={{
                    borderRadius: fullVersion ? '50%' : '0',
                    width: fullVersion ? '200px' : '70px',
                    height: fullVersion ? '100%' : '70px',
                    objectFit: 'cover',
                    filter: colorScheme === 'light' ? 'invert(0)' : 'invert(1)',
                }}
                onClick={(e) => {
                    e.preventDefault();
                    handleScroll('headerMain');
                }}
            />
        </>
    );
};

export default Logo;
