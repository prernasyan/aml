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
      <Title>
        Alliance Media Labs | Creative Tech & Branding Company for Real Estate
      </Title>
      <Meta
        name="description"
        content="Alliance Media Labs partners with real estate brands to design immersive visuals, digital ecosystems, and impactful brand experiences."
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

      <MetaLink rel="icon" href="/favicon.ico" />

      <BrowserRouter basename={__BASE_PATH__}>
        <ScrollToTop />
        <AppRoutes />
        <WhatsAppFloat />
      </BrowserRouter>
    </>
  );
}

export default App;
