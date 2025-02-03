import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { useAppDispatch } from "../Hooks/Hooks";
import { useEffect } from "react";
import { fetchRecipes } from "../Store/recipeSlice";
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const Recipes = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const isLoading = useSelector((state: RootState) => state.recipes.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  console.log(recipes);

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center">
        Recipes
      </Typography>

      {isLoading ? (
        <CircularProgress style={{ display: "block", margin: "20px auto" }} />
      ) : (
        <Grid container spacing={3}>
          {recipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <Card sx={{ maxWidth: 345, p: 2 }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="200"
                    sx={{ objectFit: "contain" }}
                    image={recipe.image || "https://via.placeholder.com/200"}
                    alt={recipe.name}
                  ></CardMedia>
                  <Typography variant="h6" component="div">
                    {recipe.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {recipe.ingredients.join(",")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Recipes;
