// served when you try to reach domain.com/

import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <h1>Home Page</h1>

      <ul>
        <li>
          <a href="/news/news-item-1">Item 1</a>
        </li>
        <li>
          <a href="/news/news-item-2">Item 2</a>
        </li>
        <li>
          <a href="/news/news-item-3">Item 3</a>
        </li>
      </ul>
    </Fragment>
  );
}

export default HomePage;
