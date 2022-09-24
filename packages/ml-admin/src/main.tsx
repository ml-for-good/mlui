import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Theme from './theme'
import 'virtual:uno.css'

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Theme rootElement={rootElement}>
      <App />
    </Theme>
  </React.StrictMode>,
);
