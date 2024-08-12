import { useEffect } from "react";

const useUpdateTitle = (title, favicon) => {
  useEffect(() => {
    document.title = title;

    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.rel = "icon";
    link.href = favicon;

    document.head.appendChild(link);

    return () => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, [title, favicon]);
};

export default useUpdateTitle;