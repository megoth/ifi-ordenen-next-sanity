import { useEffect, useState } from "react";

export default function useHistory() {
  const [history, setHistory] = useState<null | History>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHistory(window.history);
    }
  });

  return history;
}
