import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { mainRouter } from './routes/mainRouter'
import { store } from './redux/store'
import './index.css'
import { SnackbarProvider } from 'notistack'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={1} autoHideDuration={3000} anchorOrigin={{vertical:'top', horizontal:'left'}}>
        <RouterProvider router={mainRouter} />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
)
