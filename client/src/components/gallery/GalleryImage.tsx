import React, { useState } from 'react';
import { Modal, Image } from '@mantine/core';

interface GalleryImageProps {
    src: string;
    alt: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => {
    const [opened, setOpened] = useState(false);

    const handleImageClick = () => {
        setOpened(true);
    };

    const closeModal = () => {
        setOpened(false);
    };

    return (
        <>
            <div style={{position: 'relative'}} onClick={handleImageClick}>
                <Image
                    src={src}
                    alt={alt}
                    radius="md"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        cursor: 'pointer',
                        transition: 'opacity 0.3s ease',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                    }}
                    className="hover-overlay"
                />
            </div>

            <Modal
                opened={opened}
                onClose={closeModal}
                size="full"
                zIndex={'9999'}
                withCloseButton={false}
            >
                <Image
                    src={src}
                    alt={alt}
                    radius="md"
                    style={{width: '100%', height: 'auto', objectFit: 'contain'}}
                />
            </Modal>
        </>
    );
};

export default GalleryImage;
