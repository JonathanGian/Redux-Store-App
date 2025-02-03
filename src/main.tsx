import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './Store/store.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <CssBaseline />
    <App />
    </Provider>
  </StrictMode>,
)
