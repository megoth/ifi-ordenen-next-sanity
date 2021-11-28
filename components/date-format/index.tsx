import React from "react";
import { format as formatFn } from "date-fns";
import { nb } from "date-fns/locale";

interface Props {
  date?: string;
  format: string;
  postFix?: string;
}

export default function DateFormat({ date, format, postFix }: Props) {
  if (!date) return null;
  return (
    <span>
      {formatFn(new Date(date), format, { locale: nb })}
      {postFix}
    </span>
  );
}
