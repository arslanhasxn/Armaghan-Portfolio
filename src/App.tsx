import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { OmnibarSearch } from "@/components/OmnibarSearch";
import { BottomNav, SiteHeader } from "@/components/SiteChrome";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { AboutPage } from "@/pages/AboutPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProjectPage } from "@/pages/ProjectPage";
import { ProjectsPage } from "@/pages/ProjectsPage";

export default function App() {
  return (
    <SmoothScrollProvider>
      <div className="page-shell">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/portfolio" element={<Navigate to="/" replace />} />
          <Route path="/portfolio/:slug" element={<PortfolioRedirect />} />
          <Route path="/contact" element={<Navigate to="/about" replace />} />
          <Route path="/resume" element={<Navigate to="/about#resume" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <BottomNav />
        <OmnibarSearch />
      </div>
    </SmoothScrollProvider>
  );
}

function PortfolioRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/projects/${slug ?? ""}`} replace />;
}
