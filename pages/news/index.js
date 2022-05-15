import { Fragment } from "react";
import Link from "next/link";
//domain.com/news

export default function News() {
  return (
    <Fragment>
      <h1>News page</h1>
      <ul>
        <li>
          <Link href="/news/1">1</Link>
        </li>
        <li>
          <Link href="/news/2">2</Link>
        </li>
        <li>
          <Link href="/news/3">3</Link>
        </li>
      </ul>
    </Fragment>
  );
}
