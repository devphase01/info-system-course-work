import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './router';

function App() {
  return (
    <div className="">
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default App;
