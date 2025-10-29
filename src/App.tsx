
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import WhatsAppFloat from './components/feature/WhatsAppFloat';
import { useScrollToTop } from './hooks/useScrollToTop';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollToTop />
      <AppRoutes />
      <WhatsAppFloat />
    </BrowserRouter>
  )
}

export default App
