import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import WhatsAppFloat from "./components/feature/WhatsAppFloat";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { Title, Meta, Link as MetaLink } from "react-head";

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function App() {
  return (
    <>
      {/* 🌍 Global Default SEO (Home page fallback) */}
      <Title>Alliance Media Labs - Where Real Estate Meets Innovation</Title>
      <Meta
        name="description"
        content="Creative technology company specializing in real estate content creation and virtual visualization. Cinematic content & virtual experiences for modern developers."
      />
      <Meta
        name="keywords"
        content="real estate visualization, 3D walkthrough, VR tours, drone cinematography, architectural rendering"
      />
      <Meta
        property="og:title"
        content="Alliance Media Labs - Where Real Estate Meets Innovation"
      />
      <Meta
        property="og:description"
        content="Creative technology company specializing in real estate content creation and virtual visualization."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://alliancemedialabs.com/" />
      <Meta
        property="og:image"
        content="https://alliancemedialabs.com/og-image.jpg"
      />
      <Meta name="robots" content="index, follow" />
      <Meta name="author" content="Alliance Media Labs" />
      <MetaLink rel="canonical" href="https://alliancemedialabs.com/" />

      <BrowserRouter basename={__BASE_PATH__}>
        <ScrollToTop />
        <AppRoutes />
        <WhatsAppFloat />
      </BrowserRouter>
    </>
  );
}

export default App;
