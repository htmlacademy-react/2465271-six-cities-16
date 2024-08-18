import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { cities, SortList, RATING, Sign } from './const';
import { fetchOffers } from './store/offers';
import { fetchFavorites } from './store/favorite';
import { checkAuthAction } from './store/user';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffers());
store.dispatch(checkAuthAction()).then((response) => {
  if (response.meta.requestId === 'fulfilled') {
    store.dispatch(fetchFavorites());
  }
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App citiesWithLocation={cities} sortType={SortList} sign={Sign} rating={RATING} />
    </Provider>
  </React.StrictMode>
);
