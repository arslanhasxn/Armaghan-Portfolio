import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { CursorLogoProvider } from "@/components/CursorLogo";
import { BottomNav, SiteHeader } from "@/components/SiteChrome";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { AboutPage } from "@/pages/AboutPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProjectPage } from "@/pages/ProjectPage";
import { ProjectsPage } from "@/pages/ProjectsPage";

export default function App() {
  return (
    <SmoothScrollProvider>
      <CursorLogoProvider>
        <div className="page-shell">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/portfolio" element={<Navigate to="/" replace />} />
          <Route path="/portfolio/:slug" element={<PortfolioRedirect />} />
          <Route path="/contact" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <BottomNav />
      </CursorLogoProvider>
    </SmoothScrollProvider>
  );
}

function PortfolioRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/projects/${slug ?? ""}`} replace />;
}
