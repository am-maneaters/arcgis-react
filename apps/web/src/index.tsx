import './index.css';
import '@esri/calcite-components/dist/calcite/calcite.css';

import { defineCustomElements as defineMapElements } from '@arcgis/map-components/dist/loader';
import { defineCustomElements } from '@esri/calcite-components/dist/loader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { ThemeProvider } from './contexts/ThemeProvider';

// Create a root element for the application
const root = createRoot(document.querySelector('#root') as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

// CDN hosted assets
defineMapElements(window, {
  resourcesUrl: 'https://js.arcgis.com/map-components/4.30/assets/',
});
// Local assets
defineCustomElements(window);

// Render the application
root.render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
