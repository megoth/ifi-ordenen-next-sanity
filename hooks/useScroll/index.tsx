import React, { useEffect, useState } from "react";

export default function useScroll() {
  const [scrollEvent, setScrollEvent] = useState<React.UIEvent<Document>>(null);
  const setEvent = (event) => setScrollEvent(event);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.addEventListener("scroll", setEvent);
    }
    return () => document.removeEventListener("scroll", setEvent);
  });

  return scrollEvent;
}
