import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Dialog, DialogContent, TextField } from '@mui/material';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://picsum.photos/v2/list?page=1&limit=50')
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error('Error fetching images:', error));
    }, []);

    const filteredImages = images.filter(image =>
        image.author.toLowerCase().includes(search.toLowerCase())
    );

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <div style={{ padding: 20 }}>
            <TextField
                label="Search Images"
                variant="outlined"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: 20 }}
            />
            <Grid container spacing={2}>
                {filteredImages.map(image => (
                    <Grid item xs={12} sm={6} md={4} key={image.id}>
                        <Card onClick={() => handleImageClick(image)}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={image.download_url}
                                alt={image.author}
                                style={{ borderRadius: 0 }}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary">
                                    {image.author}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog open={!!selectedImage} onClose={handleClose} maxWidth="md">
                <DialogContent>
                    {selectedImage && (
                        <img
                            src={selectedImage.download_url}
                            alt={selectedImage.author}
                            style={{ width: '100%' }}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Gallery;
