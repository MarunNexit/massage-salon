import React, {useEffect, useState} from 'react';
import './gallery.css';
import { Grid } from '@mantine/core';
import GalleryImage from "./GalleryImage.tsx";
import {IGallery} from "../../models/gallery.ts";
import {getGallery} from "../../api/gallery.ts";


const Gallery: React.FC = () => {

    const [images, setImages] = useState<IGallery[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await getGallery();
                console.log(response);
                setImages(response);
            } catch (error) {
                console.error('Error fetching gallery:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <>

            {/*USING CSS GRID

            <div className="photo-block" style={{ marginTop: '2rem', textAlign: 'start', paddingTop: '2rem' }}>
                <div className="photo-left">
                    <img src="https://via.placeholder.com/600x400" alt="Main" className="main-photo"/>
                </div>
                <div className="photo-right">
                    <div className="photo-row">
                        <div className="photo-item">
                            <img src="https://via.placeholder.com/300x200" alt="Photo 1" className="side-photo"/>
                        </div>
                        <div className="photo-item">
                            <img src="https://via.placeholder.com/300x200" alt="Photo 2" className="side-photo"/>
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo-item">
                            <img src="https://via.placeholder.com/300x200" alt="Photo 3" className="side-photo"/>
                        </div>
                        <div className="photo-item">
                            <img src="https://via.placeholder.com/300x200" alt="Photo 4" className="side-photo"/>
                        </div>
                    </div>
                </div>
            </div>*/}

            {images && images.length > 0 ? (
                <Grid id="gallery" gutter="md" style={{ marginTop: '3rem', textAlign: 'start', paddingTop: '2rem' }}>
                    <Grid.Col span={6}>
                        <GalleryImage src={images[0].imageUrl} alt={images[0].title ? images[0].title : ''} />
                    </Grid.Col>
                    <Grid.Col span={6}>

                        <Grid gutter="sm">
                            {images.slice(1).map((image, index) => (
                                <Grid.Col key={index} span={6}>
                                    <GalleryImage src={image.imageUrl} alt={image.title ? image.title : ''} />
                                </Grid.Col>
                            ))}
                        </Grid>
                    </Grid.Col>
                </Grid>
            ) : (
                <></>
            )}

        </>
    );
};

export default Gallery;
