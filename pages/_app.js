import { AuthProvider } from '@/lib/auth';
import { ToastProvider } from 'react-toast-notifications';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import '@/styles/globals.css';
import '@/styles/tailwind.css';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </ToastProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;
