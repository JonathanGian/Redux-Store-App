import { Button, Container } from '@mui/material'


function App() {

  return (
    <>
    <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'lightgray'}}>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    </Container>
    </>
  )
}

export default App
