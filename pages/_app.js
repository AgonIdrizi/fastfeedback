import { AuthProvider } from '@/lib/auth';
import { ToastProvider } from 'react-toast-notifications';
import '@/styles/globals.css';
import '@/styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </AuthProvider>
  );
}

export default MyApp;
