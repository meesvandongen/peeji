export interface PeejiOptions {
  page: number;
  pageCount: number;
  showLeft?: number;
  showRight?: number;
}

export type Peeji =
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

export interface PeejiResult {
  pages: Peeji[];
  hasPrevious: boolean;
  hasNext: boolean;
}

export function peeji({
  page,
  pageCount,
  showLeft = 2,
  showRight = 2,
}: PeejiOptions): PeejiResult {
  const firstPage = 1;
  const lastPage = pageCount;

  if (firstPage === lastPage) {
    return {
      pages: [
        {
          isEllipsis: false,
          num: firstPage,
          key: firstPage.toString(),
          isActive: true,
        },
      ],
      hasPrevious: false,
      hasNext: false,
    };
  }

  const leftRaw = page - showLeft;
  const rightRaw = page + showRight;

  const pagesBetweenStartInitial = Math.max(firstPage + 1, leftRaw);
  const pagesBetweenEndInitial = Math.min(lastPage - 1, rightRaw);

  const pagesBetween = range(
    pagesBetweenStartInitial,
    pagesBetweenEndInitial + 1
  );

  const amountToAddLeft =
    lastPage - rightRaw - 1 < 1 ? Math.abs(lastPage - rightRaw - 1) + 1 : 0;
  const amountToAddRight =
    leftRaw - firstPage - 1 < 1 ? Math.abs(leftRaw - firstPage - 1) + 1 : 0;

  if (amountToAddLeft > 0 && amountToAddRight > 0) {
    // Do nothing.
  } else if (amountToAddLeft > 0) {
    let start = pagesBetweenStartInitial;
    let i = amountToAddLeft;
    while (i > 0 && start > firstPage + 1) {
      pagesBetween.unshift(start - 1);
      start -= 1;
      i--;
    }
  } else if (amountToAddRight > 0) {
    let start = pagesBetweenEndInitial;
    let i = amountToAddRight;
    while (i > 0 && start < lastPage - 1) {
      pagesBetween.push(start + 1);
      start += 1;
      i--;
    }
  }

  const pagesBetweenStart = pagesBetween[0]!;
  const pagesBetweenEnd = pagesBetween[pagesBetween.length - 1]!;

  const amountHiddenLeft = pagesBetweenStart - firstPage - 1;
  const amountHiddenRight = lastPage - pagesBetweenEnd - 1;

  const pages: Peeji[] = pagesBetween.map((num) => ({
    isEllipsis: false,
    num,
    key: num.toString(),
    isActive: num === page,
  }));

  if (amountHiddenLeft > 1) {
    pages.unshift({
      isEllipsis: true,
      key: "left-ellipsis",
    });
  } else if (amountHiddenLeft === 1) {
    pages.unshift({
      isEllipsis: false,
      num: firstPage + 1,
      key: (firstPage + 1).toString(),
      isActive: page === firstPage + 1,
    });
  }

  if (amountHiddenRight > 1) {
    pages.push({
      isEllipsis: true,
      key: "right-ellipsis",
    });
  } else if (amountHiddenRight === 1) {
    pages.push({
      isEllipsis: false,
      num: lastPage - 1,
      key: (lastPage - 1).toString(),
      isActive: page === lastPage - 1,
    });
  }

  pages.unshift({
    isEllipsis: false,
    num: firstPage,
    key: firstPage.toString(),
    isActive: page === firstPage,
  });

  pages.push({
    isEllipsis: false,
    num: lastPage,
    key: lastPage.toString(),
    isActive: page === lastPage,
  });

  const hasPrevious = page > firstPage;
  const hasNext = page < lastPage;

  return {
    pages,
    hasPrevious,
    hasNext,
  };
}

function range(start: number, end: number) {
  return Array.from({ length: end - start }, (_, i) => i + start);
}
