import { useEffect, useState } from "react";

export default function useOffset() {
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => setOffset(window.scrollY);
    }
  });

  return offset;
}
