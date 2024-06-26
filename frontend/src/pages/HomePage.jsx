import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%", // Ensures the card takes full height of its container
  },
});

const products = {
  footwear: [
    {
      id: 1,
      name: "Men's Running Shoes",
      image: "/images/mens-running-shoes.jpg",
      price: "$99.99",
    },
    {
      id: 2,
      name: "Women's Sandals",
      image: "/images/womens-sandals.jpg",
      price: "$79.99",
    },
  ],
  clothing: [
    {
      id: 3,
      name: "Men's T-Shirt",
      image: "/images/mens-tshirt.jpg",
      price: "$29.99",
    },
    {
      id: 4,
      name: "Women's Dress",
      image: "/images/womens-dress.jpg",
      price: "$49.99",
    },
  ],
  bags: [
    {
      id: 5,
      name: "Leather Backpack",
      image: "/images/leather-backpack.jpg",
      price: "$129.99",
    },
    { id: 6, name: "Handbag", image: "/images/handbag.jpg", price: "$89.99" },
  ],
};

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {Object.keys(products).map((category) => (
        <Box key={category} sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Typography>
          <Grid container spacing={4}>
            {products[category].map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View Details
                    </Button>
                    <Button size="small" color="secondary">
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default HomePage;
