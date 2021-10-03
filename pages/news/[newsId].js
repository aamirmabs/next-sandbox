// served when you try to reach domain.com/news/some-path-name

import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // use the dynamic value to get some unique data
  // maybe get news info from the database

  return (
    <div>
      <h1>{newsId} Page</h1>
      <p>Requested ID: {newsId}</p>
    </div>
  );
}

export default DetailPage;
