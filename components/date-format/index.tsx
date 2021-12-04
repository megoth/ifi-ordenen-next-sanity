import React from "react";
import { format as formatFn } from "date-fns";
import { nb } from "date-fns/locale";

interface Props {
  date: string | undefined;
  format: string;
  postfix?: string;
  prefix?: string;
}

export default function DateFormat({ date, format, postfix, prefix }: Props) {
  if (!date) return null;
  return (
    <>
      {prefix}
      {formatFn(new Date(date), format, { locale: nb })}
      {postfix}
    </>
  );
}
