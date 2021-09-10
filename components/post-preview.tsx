import React from "react";
import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { PostModel } from "../lib/api";

interface Props
  extends Pick<
    PostModel,
    "title" | "date" | "excerpt" | "author" | "slug" | "coverImage"
  > {}

export default function PostPreview(props: Props) {
  const { title, date, excerpt, author, slug } = props;
  return (
    <div key={slug}>
      <div className="mb-5">
        <CoverImage {...props} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author?.name} picture={author?.picture} />
    </div>
  );
}
