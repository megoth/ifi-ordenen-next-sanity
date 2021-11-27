import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

const NavigationContext = createContext<{
  isOpen: boolean;
  setOpen: (_: boolean) => void;
}>({
  isOpen: false,
  setOpen: () => {},
});

export default NavigationContext;

interface Props {
  children: ReactNode;
}

export function NavigationProvider({ children }: Props) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) setOpen(false);
  }, [router]);

  return (
    <NavigationContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </NavigationContext.Provider>
  );
}
