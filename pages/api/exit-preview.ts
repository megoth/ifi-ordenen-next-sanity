import { Request, Response } from "express";

export default async function exit(_: Request, res: Response) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  // @ts-ignore
  res.clearPreviewData();

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: "/" });
  res.end();
}
