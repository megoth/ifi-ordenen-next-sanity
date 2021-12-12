import React, { useContext } from "react";
import Link from "../../link";
import { getHref } from "../../../lib/utils";
import { useRouter } from "next/router";
import useHistory from "../../../hooks/useHistory";
import EventsContext from "../../../contexts/eventsContext";
import { containerStyle } from "./styles.css";

interface Props {
  years: string[];
}

export default function EventsExpandAll({ years }: Props) {
  const router = useRouter();
  const history = useHistory();
  const { setYears } = useContext(EventsContext);
  const expandAll = (event) => {
    event.preventDefault();
    setYears(years);
    history.pushState({ years }, "", event.target.href);
  };
  return (
    <div className={containerStyle}>
      <Link
        href={getHref(router, {
          query: {
            year: years,
          },
        })}
        onClick={expandAll}
      >
        + Utvid alle
      </Link>
    </div>
  );
}
