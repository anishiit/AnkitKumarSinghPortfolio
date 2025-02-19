import { useEffect } from "react";

export default function useLocomotiveScroll() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("locomotive-scroll").then((LocomotiveScroll) => {
        const scroll = new LocomotiveScroll.default({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
        });

        return () => {
          if (scroll) scroll.destroy();
        };
      });
    }
  }, []);
}