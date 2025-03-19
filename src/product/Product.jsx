import React, { useState, useEffect } from 'react';
import { Button, Container, Grid, Typography, TextField, Box, Drawer, List, ListItem, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Product() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [open, setOpen] = useState(false);

  const products = [
    { id: 1, name: 'Orange', description: 'This is a sweet orange.', price: 80.00, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.hHS7HSAJt2B2ZZ-UDS7WNwHaFQ&pid=Api&P=0&h=180' },
    { id: 2, name: 'Apple', description: 'One variety of apple might be sweet.', price: 140.00, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.E3zperyH1C7qyos0LbfglwHaEe&pid=Api&P=0&h=180' },
    { id: 3, name: 'Mango', description: 'A delicious tropical fruit.', price: 120.00, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.qkOauaasrS61B8hzg9gJzwHaHa&pid=Api&P=0&h=180' }
  ];

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    const initialQuantity = {};
    storedCart.forEach(item => {
      initialQuantity[item.id] = item.quantity;
    });
    setQuantity(initialQuantity);
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    const updatedCart = existingItem
      ? cart.map(item => item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
        )
      : [...cart, { ...product, quantity: quantity[product.id] || 1 }];

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setOpen(true); 
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300, padding: 2 }} role="presentation">
      <Typography variant="h5" sx={{ mb: 2 }}>Shopping Cart</Typography>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1}><RemoveIcon /></IconButton>
            <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
            <IconButton onClick={() => handleQuantityChange(item.id, item.quantity + 1)}><AddIcon /></IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
    =</Drawer>
      <Grid container spacing={12} justifyContent='center'>
        {products.map((product) => (
          <Grid item xs={0} sm={0} md={0} key={product.id} style={{ textAlign: 'center' }}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: '100%', padding: '20px' }}
            />
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="h6">${product.price}</Typography>

            <Box mt={2}>
              <TextField
                type="number"
                label="Quantity"
                value={quantity[product.id] || 1}
                onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}    
              />
            </Box>

            <Box mt={2}>
              <Button
                variant="contained"
                color="info"
                onClick={() => handleAddToCart(product)}
                sx={{ marginBottom: '30px', borderRadius: '20px' }}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Product;