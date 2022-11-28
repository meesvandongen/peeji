# Peeji

A pagination utility.

- 🤏 **ellipsis**: Includes an ellipsis object, but only if it covers a gap of more
  than 2 pages.
- ⏭️ **first/last**: Always render the first and last page.
- ⏩ **next/previous**: Render a customizable amount of pages before and after
  the current page.
- 🔁 **consistent**: preserves amount of items in list.

## Usage

```js
import { peeji } from "peeji";

peeji({
  page: 6, // current page
  pageCount: 11, // 11 pages
  showLeft: 1, // defaults to 2
  showRight: 2, // defaults to 2
});

// Output:
{
  hasNext: true,
  hasPrevious: true,
  pages: [
    { isActive: false, isEllipsis: false, key: "1", num: 1 },
    { isEllipsis: true, key: "left-ellipsis" },
    { isActive: false, isEllipsis: false, key: "5", num: 5 },
    { isActive: true, isEllipsis: false, key: "6", num: 6 },
    { isActive: false, isEllipsis: false, key: "7", num: 7 },
    { isActive: false, isEllipsis: false, key: "8", num: 8 },
    { isEllipsis: true, key: "right-ellipsis" },
    { isActive: false, isEllipsis: false, key: "11", num: 11 },
  ],
}
```
