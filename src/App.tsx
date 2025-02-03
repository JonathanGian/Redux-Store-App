import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import Recipes from './Components/Recipes'
import { AppBar, Button, Container, Toolbar } from '@mui/material'



function App() {

  return (
    <>
  <BrowserRouter>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" component={Link} to="/">Products</Button>
                    <Button color="inherit" component={Link} to="/recipes">Recipes</Button>
                </Toolbar>
            </AppBar>

            <Container sx={{ mt: 4 }}>
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/recipes" element={<Recipes />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </Container>
        </BrowserRouter>
    </>
  )
}

export default App
