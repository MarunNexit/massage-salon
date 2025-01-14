import React, { useState } from 'react';
import { Button, Stack, FileInput, Title } from '@mantine/core';
import Gallery from "../../gallery/Gallery.tsx";

const GalleryAdmin: React.FC = () => {
    const [images, setImages] = useState<File[]>([]);

    const handleUpload = (files: File[]) => {
        setImages(files);
    };

    const handleSave = () => {
        const formData = new FormData();
        images.forEach((image) => formData.append('images', image));

        fetch('/api/gallery', {
            method: 'POST',
            body: formData,
        }).then(() => alert('Gallery updated!'));
    };

    return (
        <Stack>
            <Title order={2}>Gallery</Title>
            <FileInput
                label="Upload Images"
                placeholder="Select images"
                multiple
                accept="image/*"
                onChange={(files) => handleUpload(files as File[])}
            />
            <Button onClick={handleSave}>Save</Button>
            <Gallery></Gallery>

        </Stack>
    );
};

export default GalleryAdmin;
