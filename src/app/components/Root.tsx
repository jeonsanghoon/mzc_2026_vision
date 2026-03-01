import { Outlet, useNavigate, useLocation } from "react-router";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slideRoutes = ["/slide1", "/slide2", "/slide3", "/slide4"];

export function Root() {
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to slide1 if on root
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/slide1");
    }
  }, [location.pathname, navigate]);

  const currentSlideIndex = slideRoutes.indexOf(location.pathname);

  const goToPrevSlide = () => {
    if (currentSlideIndex > 0) {
      navigate(slideRoutes[currentSlideIndex - 1]);
    }
  };

  const goToNextSlide = () => {
    if (currentSlideIndex < slideRoutes.length - 1) {
      navigate(slideRoutes[currentSlideIndex + 1]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevSlide();
      } else if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="min-h-[100dvh] min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Outlet />

      {/* Navigation Controls - 콘텐츠와 겹치지 않도록 z-index */}
      {currentSlideIndex >= 0 && (
        <div className="fixed left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-4 bg-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-slate-200 max-w-[calc(100vw-2rem)] bottom-[max(0.5rem,env(safe-area-inset-bottom))] sm:bottom-8">
          <button
            onClick={goToPrevSlide}
            disabled={currentSlideIndex === 0}
            className="p-2 rounded-full hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-slate-700"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-1.5 sm:gap-2 shrink-0">
            {slideRoutes.map((route, index) => (
              <button
                key={route}
                onClick={() => navigate(route)}
                className={`h-1.5 sm:h-2 rounded-full transition-all shrink-0 ${
                  index === currentSlideIndex
                    ? "bg-blue-600 w-6 sm:w-8"
                    : "w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNextSlide}
            disabled={currentSlideIndex === slideRoutes.length - 1}
            className="p-2 rounded-full hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-slate-700"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Slide counter - 콘텐츠와 겹치지 않도록 z-index */}
      {currentSlideIndex >= 0 && (
        <div className="fixed z-30 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-slate-600 font-semibold border border-slate-200 top-[max(0.5rem,env(safe-area-inset-top))] right-[max(0.5rem,env(safe-area-inset-right))] sm:top-8 sm:right-8">
          {currentSlideIndex + 1} / {slideRoutes.length}
        </div>
      )}
    </div>
  );
}