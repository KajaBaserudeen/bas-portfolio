import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const scroll = window.scrollY;

      const height = document.documentElement.scrollHeight - window.innerHeight;

      setWidth((scroll / height) * 100);
    };

    window.addEventListener("scroll", update);

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      style={{
        width: `${width}%`,
      }}
      className="
        fixed
        top-0
        left-0
        h-1
        bg-accent
        z-[999]
      "
    />
  );
};

export default ScrollProgress;
