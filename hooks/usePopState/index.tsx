import { useEffect, useState } from "react";

export default function usePopState() {
  const [popStateEvent, setPopStateEvent] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onpopstate = (event) => setPopStateEvent(event);
    }
  });

  return popStateEvent;
}
