import { AuthProvider } from '@/lib/auth';
import { ToastProvider } from 'react-toast-notifications';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import '@/styles/globals.css';
import '@/styles/tailwind.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;
