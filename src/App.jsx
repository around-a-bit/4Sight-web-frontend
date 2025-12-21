import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { MainLayout } from './components/layout';
import { AuthModal, ProtectedRoute } from './components/auth';
import {
  HomePage,
  ProductPage,
  KnowledgeBasePage,
  ArticleDetailPage,
  CommunityPage,
  ROICalculatorPage,
  SEOAnalyzerPage,
  TrendTrackerPage,
  AIAssistantPage,
  LoginPage,
  SignupPage,
} from './pages';
import './styles/index.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          {/* Global Auth Modal */}
          <AuthModal />

          <Routes>
            {/* Auth Pages (outside layout) */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Main App Routes */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="product" element={<ProductPage />} />
              <Route path="knowledge" element={<KnowledgeBasePage />} />
              <Route path="knowledge/:slug" element={
                <ProtectedRoute>
                  <ArticleDetailPage />
                </ProtectedRoute>
              } />
              <Route path="community" element={<CommunityPage />} />

              {/* Protected Calculator Routes */}
              <Route path="community/roi-calculator" element={
                <ProtectedRoute>
                  <ROICalculatorPage />
                </ProtectedRoute>
              } />
              <Route path="community/seo-analyzer" element={
                <ProtectedRoute>
                  <SEOAnalyzerPage />
                </ProtectedRoute>
              } />
              <Route path="community/trend-tracker" element={
                <ProtectedRoute>
                  <TrendTrackerPage />
                </ProtectedRoute>
              } />
              <Route path="community/ai-assistant" element={
                <ProtectedRoute>
                  <AIAssistantPage />
                </ProtectedRoute>
              } />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
