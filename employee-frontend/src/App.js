import { RouterProvider } from 'react-router-dom';
import { globalRouter } from './router';
import { QueryClient, QueryClientProvider } from 'react-query';
import ToastProvider from './providers/ToastProvider';
const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider />
      <RouterProvider router={globalRouter} />;
    </QueryClientProvider>
  );
}

export default App;
