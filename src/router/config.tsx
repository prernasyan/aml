
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import WalkthroughVideosPage from "../pages/services/3d-walkthrough-videos/page";
import VirtualRealityToursPage from "../pages/services/virtual-reality-tours/page";
import ConstructionUpdateVideosPage from "../pages/services/construction-update-videos/page";
import DroneShootsPage from "../pages/services/drone-shoots/page";
import ArchitecturalScaleModelsPage from "../pages/services/architectural-scale-models/page";
import RenderIsometricsPage from "../pages/services/3d-renders-isometrics/page";
import Interactive3DToolsPage from "../pages/services/interactive-3d-tools/page";
import DigitalMarketingPage from "../pages/services/digital-marketing/page";
import GraphicsBrandingPage from "../pages/services/graphics-branding/page";
import RouteVideosPage from "../pages/services/route-videos/page";
import IsometricsPage from "../pages/services/3d-isometrics/page";
import InteriorCinematicWalkthroughPage from "../pages/services/interior-cinematic-walkthrough/page";
import ContactPage from '../pages/contact/page';
import PortfolioPage from '../pages/portfolio/page';
import RealEstateVideoProductionGurugram from '../pages/services/city-services/real-estate-video-production-gurugram/page';
import { lazy } from "react";

// City Services - 3D Walkthrough Videos
const WalkthroughVideosMumbai = lazy(() => import('../pages/services/city-services/3d-walkthrough-videos-mumbai/page'));
const WalkthroughVideosBangalore = lazy(() => import('../pages/services/city-services/3d-walkthrough-videos-bangalore/page'));
const WalkthroughVideosDelhi = lazy(() => import('../pages/services/city-services/3d-walkthrough-videos-delhi/page'));

// City Services - 3D Renders
const RendersMumbai = lazy(() => import('../pages/services/city-services/3d-renders-mumbai/page'));

// City Services - Drone Shoots
const DroneShootsBangalore = lazy(() => import('../pages/services/city-services/drone-shoots-bangalore/page'));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services/3d-walkthrough-videos",
    element: <WalkthroughVideosPage />,
  },
  {
    path: "/services/virtual-reality-tours",
    element: <VirtualRealityToursPage />,
  },
  {
    path: "/services/construction-update-videos",
    element: <ConstructionUpdateVideosPage />,
  },
  {
    path: "/services/drone-shoots",
    element: <DroneShootsPage />,
  },
  {
    path: "/services/architectural-scale-models",
    element: <ArchitecturalScaleModelsPage />,
  },
  {
    path: "/services/3d-renders-isometrics",
    element: <RenderIsometricsPage />,
  },
  {
    path: "/services/interactive-3d-tools",
    element: <Interactive3DToolsPage />,
  },
  {
    path: "/services/digital-marketing",
    element: <DigitalMarketingPage />,
  },
  {
    path: "/services/graphics-branding",
    element: <GraphicsBrandingPage />,
  },
  {
    path: "/services/route-videos",
    element: <RouteVideosPage />,
  },
  {
    path: "/services/3d-isometrics",
    element: <IsometricsPage />,
  },
  {
    path: "/services/interior-cinematic-walkthrough",
    element: <InteriorCinematicWalkthroughPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/portfolio',
    element: <PortfolioPage />
  },

  // City-based service pages
  {
    path: '/services/real-estate-video-production-gurugram',
    element: <RealEstateVideoProductionGurugram />
  },

  // City Services - 3D Walkthrough Videos
  {
    path: '/services/city-services/3d-walkthrough-videos-mumbai',
    element: <WalkthroughVideosMumbai />
  },
  {
    path: '/services/city-services/3d-walkthrough-videos-bangalore',
    element: <WalkthroughVideosBangalore />
  },
  {
    path: '/services/city-services/3d-walkthrough-videos-delhi',
    element: <WalkthroughVideosDelhi />
  },

  // City Services - 3D Renders
  {
    path: '/services/city-services/3d-renders-mumbai',
    element: <RendersMumbai />
  },

  // City Services - Drone Shoots
  {
    path: '/services/city-services/drone-shoots-bangalore',
    element: <DroneShootsBangalore />
  },

  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
