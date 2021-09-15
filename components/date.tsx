import React from "react";
import { isValid, parseISO, format } from "date-fns";

interface Props {
  dateString: string;
}

export default function Date({ dateString }: Props) {
  if (!isValid(parseISO(dateString))) {
    return <span>No date</span>;
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
}
