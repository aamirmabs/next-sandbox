// served when you try to reach domain.com/

import Link from "next/link";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <h1>Home Page</h1>
      {
        // url paths are hard-coded // so every time a new page is loaded the
        // request is sent for the page and it is loaded
        // so effectively it is nota SPA
        // state, context and all reducer values will be lost on load
      }
      {/* <ul>
        <li>
          <a href="/news/news-item-1">Item 1</a>
        </li>
        <li>
          <a href="/news/news-item-2">Item 2</a>
        </li>
        <li>
          <a href="/news/news-item-3">Item 3</a>
        </li>
      </ul> */}

      {
        // we will use the Link component for routing as it will track all the clicks and then manage the routing internally. New pages will not be loaded and the state/context will be maintained.
      }
      <ul>
        <li>
          <Link href="/news/news-item-1">Item 1</Link>
        </li>
        <li>
          <Link href="/news/news-item-2">Item 2</Link>
        </li>
        <li>
          <Link href="/news/news-item-3">Item 3</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default HomePage;
