import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from './store';
import { AppRouter } from './router';

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <RouterProvider router={AppRouter} />
      </Provider>
    </div>
  );
};

export default App;
