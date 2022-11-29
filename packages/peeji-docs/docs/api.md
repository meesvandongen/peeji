---
title: API
sidebar_position: 4
---

The core export of Peeji is `peeji`, a function that returns an object with the
pagination data.

```tsx
function peeji(options: PeejiOptions): PeejiResult;
```

## PeejiOptions

`peeji` accepts a single object with the following options:

```ts
interface PeejiOptions {
  page: number;
  pageCount: number;
  showLeft?: number;
  showRight?: number;
}
```

### `page`

The current page number.

### `pageCount`

The total number of pages.

### `showLeft`

The number of pages to show to the left of the current page. Defaults to `2`.

### `showRight`

The number of pages to show to the right of the current page. Defaults to `2`.

## PeejiResult

The result of `peeji` is an object with the following properties:

```ts
interface PeejiResult {
  pages: Peeji[];
  hasPrevious: boolean;
  hasNext: boolean;
}
```

### `pages`

An array of `Peeji` objects.

### `hasPrevious`

Whether there is a previous page. Can be used to determine whether to show a
previous page button.

### `hasNext`

Whether there is a next page. Can be used to determine whether to show a next
page button.

## Peeji

A `Peeji` object represents something to render in the pagination UI. It has the
following properties:

```ts
type Peeji =
  | {
      isEllipsis: false;
      num: number;
      key: string;
      isActive: boolean;
    }
  | {
      isEllipsis: true;
      key: string;
    };
```

### `isEllipsis`

Whether this is an ellipsis object. If `true`, the other properties are not
present.

### `num`

The page number. Only present if `isEllipsis` is `false`.

### `key`

A unique key for this object. This can be supplied to React as the `key` prop.

### `isActive`

Whether this page is the current page. Only present if `isEllipsis` is `false`.
