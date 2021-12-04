import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getHashFromRouter } from "../../lib/utils";

const PeopleContext = createContext<{
  hidden: null | string;
  username: null | string;
  usernames: string[];
  toggleUsername: (_: string) => void;
}>({
  hidden: null,
  username: null,
  usernames: [],
  toggleUsername: () => {},
});

export default PeopleContext;

interface Props {
  children: ReactNode;
  usernames: string[];
}

export function PeopleProvider({ children, usernames }: Props) {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(
    getHashFromRouter(router)
  );
  const [hidden, setHidden] = useState<string | null>(null);
  const toggleUsername = (selectedUsername) => {
    const newUsername = selectedUsername === username ? null : selectedUsername;
    setUsername(newUsername);
    const selectedIndex = usernames.findIndex((name) => name === newUsername);
    setHidden(
      selectedIndex % 2 === 1
        ? usernames[selectedIndex - 1]
        : selectedIndex % 2 === 0
        ? usernames[selectedIndex + 1]
        : null
    );
  };
  return (
    <PeopleContext.Provider
      value={{
        hidden,
        username,
        usernames,
        toggleUsername,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
}
