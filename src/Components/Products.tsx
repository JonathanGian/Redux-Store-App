import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { useEffect } from "react";
import { fetchProducts } from "../Store/productsSlice";

import { useAppDispatch } from "../Hooks/Hooks";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { addToCart } from "../Store/cartSlice";
import CartTeacher from "./Cart";


const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center">
        Products
      </Typography>
      <CartTeacher />
      {isLoading ? (
        <CircularProgress style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="200"
                  sx={{ objectFit: "contain" }}
                  image={product.image || "https://via.placeholder.com/200"}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description.substring(0, 100)}...
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    ${product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: product.id,
                          title: product.title,
                          price: product.price,
                          image: product.image,
                        }),
                      )
                    }
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};
/* () => 
                                        dispatch(addToCart({
                                        id: product.id,
                                        title: product.title,
                                        price: product.price,
                                        image: product.image
                                    })) */
export default Products;
