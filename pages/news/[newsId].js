import { useRouter } from "next/router";
//domain.com/news/newsId

export default function Details() {
  const router = useRouter();

  const id = router.query.newsId;
  console.log(id);
  return <h1>Details page</h1>;
}
