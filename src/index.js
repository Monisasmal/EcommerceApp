import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/productcontext';
import { FilterProviderContext } from './context/filterContext';
import {CartProvider} from './context/cartContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { HashRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <Auth0Provider 
    domain="dev-ie3ypbqs6izl0f3m.us.auth0.com"
    clientId="JmoCYNBsshzzrCjXgAnCzDqkux6w0J9t"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <AppProvider>
    <FilterProviderContext>
    <CartProvider>
    <App />
    </CartProvider>
    </FilterProviderContext>
    </AppProvider>
    </Auth0Provider>
    </HashRouter>
  
);

