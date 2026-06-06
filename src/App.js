import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/pages';
import ScrollToTopBtn from './components/ScrollToTopBtn';

const LoginPage = lazy(() => import('./components/pages/login'));
const SignupPage = lazy(() => import('./components/pages/signup'));
const ContactPage = lazy(() => import('./components/pages/contact'));
const AboutPage = lazy(() => import('./components/pages/about'));
const JoinPage = lazy(() => import('./components/pages/join'));
const PageNotFoundPage = lazy(() => import('./components/pages/pagenotfound'));
const ReqApi = lazy(() => import('./components/Login/API/ReqApi'));

const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    color: '#FF7900',
    fontSize: '1.2rem',
    background: '#010606',
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#111',
                color: '#fff',
                border: '1px solid #333',
              },
              success: { iconTheme: { primary: '#FF7900', secondary: '#fff' } },
              error: { iconTheme: { primary: '#ff6b6b', secondary: '#fff' } },
            }}
          />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route
                path="/join"
                element={
                  <ProtectedRoute>
                    <JoinPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/admin/members" element={<ReqApi />} />
              <Route path="/*" element={<PageNotFoundPage />} />
            </Routes>
          </Suspense>
          {/* Global scroll-to-top button — visible on all pages */}
          <ScrollToTopBtn />
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
