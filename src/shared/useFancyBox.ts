import { useEffect, useRef } from "react";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function useFancybox(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      Fancybox.bind(container, "[data-fancybox]", options);
      return () => {
        Fancybox.unbind(container, "[data-fancybox]");
        Fancybox.close();
      };
    }
  }, [options]);

  return containerRef;
}