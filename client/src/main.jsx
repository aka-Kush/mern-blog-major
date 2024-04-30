import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-n08kvbzcv4v4b6ye.us.auth0.com"
    clientId="auo84b3vu0xplb0YVKrFwzwpp1J7zSjM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
)
