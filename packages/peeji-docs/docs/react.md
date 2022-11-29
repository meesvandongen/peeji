---
title: React Example
sidebar_position: 3
---

Below is some sample code that you can use to get started with React. Try
adjusting the variables (e.g. `pageCount`, `showLeft`, `showRight`) to see how
the component behaves. The component is rendered below the code.

```tsx live
function Pagination() {
  const [page, setPage] = useState(6);

  const { pages, hasNext, hasPrevious } = peeji({
    page,
    pageCount: 11,
    showLeft: 2,
    showRight: 2,
  });

  return (
    <div>
      <button
        onClick={() => setPage(page - 1)}
        disabled={!hasPrevious}
        style={{
          width: 40,
          height: 40,
        }}
      >
        {"<"}
      </button>
      {pages.map((page) => {
        // It may be necessary to use `=== true` due to the way TypeScript
        // handles booleans.
        if (page.isEllipsis === true) {
          return (
            <span
              style={{
                width: 40,
                height: 40,
                display: "inline-block",
                textAlign: "center",
              }}
            >
              ...
            </span>
          );
        }

        return (
          <button
            key={page.key}
            onClick={() => setPage(page.num)}
            style={{
              color: page.isActive ? "red" : "black",
              width: 40,
              height: 40,
            }}
          >
            {page.num}
          </button>
        );
      })}
      <button
        onClick={() => setPage(page + 1)}
        disabled={!hasNext}
        style={{
          width: 40,
          height: 40,
        }}
      >
        {">"}
      </button>
    </div>
  );
}
```
