import { peeji } from "./peeji";

describe("when at page 1", () => {
  test("1 page", () => {
    expect(
      peeji({
        page: 1,
        pageCount: 1,
      })
    ).toEqual({
      hasNext: false,
      hasPrevious: false,
      pages: [{ isActive: true, isEllipsis: false, key: "1", num: 1 }],
    });
  });

  test("2 pages", () => {
    expect(
      peeji({
        page: 1,
        pageCount: 2,
      })
    ).toEqual({
      hasNext: true,
      hasPrevious: false,
      pages: [
        { isActive: true, isEllipsis: false, key: "1", num: 1 },
        { isActive: false, isEllipsis: false, key: "2", num: 2 },
      ],
    });
  });

  test("3 pages", () => {
    expect(
      peeji({
        page: 1,
        pageCount: 3,
      })
    ).toEqual({
      hasNext: true,
      hasPrevious: false,
      pages: [
        { isActive: true, isEllipsis: false, key: "1", num: 1 },
        { isActive: false, isEllipsis: false, key: "2", num: 2 },
        { isActive: false, isEllipsis: false, key: "3", num: 3 },
      ],
    });
  });

  test("4 pages", () => {
    expect(
      peeji({
        page: 1,
        pageCount: 4,
      })
    ).toEqual({
      hasNext: true,
      hasPrevious: false,
      pages: [
        { isActive: true, isEllipsis: false, key: "1", num: 1 },
        { isActive: false, isEllipsis: false, key: "2", num: 2 },
        { isActive: false, isEllipsis: false, key: "3", num: 3 },
        { isActive: false, isEllipsis: false, key: "4", num: 4 },
      ],
    });
  });

  test("5 pages", () => {
    expect(
      peeji({
        page: 1,
        pageCount: 5,
      })
    ).toEqual({
      hasNext: true,
      hasPrevious: false,
      pages: [
        { isActive: true, isEllipsis: false, key: "1", num: 1 },
        { isActive: false, isEllipsis: false, key: "2", num: 2 },
        { isActive: false, isEllipsis: false, key: "3", num: 3 },
        { isActive: false, isEllipsis: false, key: "4", num: 4 },
        { isActive: false, isEllipsis: false, key: "5", num: 5 },
      ],
    });
  });

  test("6 pages", () => {
    expect(
      peeji({
        page: 1,
        pageCount: 6,
      })
    ).toEqual({
      hasNext: true,
      hasPrevious: false,
      pages: [
        { isActive: true, isEllipsis: false, key: "1", num: 1 },
        { isActive: false, isEllipsis: false, key: "2", num: 2 },
        { isActive: false, isEllipsis: false, key: "3", num: 3 },
        { isActive: false, isEllipsis: false, key: "4", num: 4 },
        { isActive: false, isEllipsis: false, key: "5", num: 5 },
        { isActive: false, isEllipsis: false, key: "6", num: 6 },
      ],
    });
  });

  test("7 pages", () => {
    expect(
      peeji({
        page: 1,
        pageCount: 7,
      })
    ).toEqual({
      hasNext: true,
      hasPrevious: false,
      pages: [
        { isActive: true, isEllipsis: false, key: "1", num: 1 },
        { isActive: false, isEllipsis: false, key: "2", num: 2 },
        { isActive: false, isEllipsis: false, key: "3", num: 3 },
        { isActive: false, isEllipsis: false, key: "4", num: 4 },
        { isActive: false, isEllipsis: false, key: "5", num: 5 },
        { isActive: false, isEllipsis: false, key: "6", num: 6 },
        { isActive: false, isEllipsis: false, key: "7", num: 7 },
      ],
    });
  });

  test("8 pages", () => {
    expect(
      peeji({
        page: 1,
        pageCount: 8,
      })
    ).toEqual({
      hasNext: true,
      hasPrevious: false,
      pages: [
        { isActive: true, isEllipsis: false, key: "1", num: 1 },
        { isActive: false, isEllipsis: false, key: "2", num: 2 },
        { isActive: false, isEllipsis: false, key: "3", num: 3 },
        { isActive: false, isEllipsis: false, key: "4", num: 4 },
        { isActive: false, isEllipsis: false, key: "5", num: 5 },
        { isActive: false, isEllipsis: false, key: "6", num: 6 },
        { isActive: false, isEllipsis: false, key: "7", num: 7 },
        { isActive: false, isEllipsis: false, key: "8", num: 8 },
      ],
    });
  });

  test("9 pages", () => {
    expect(
      peeji({
        page: 1,
        pageCount: 9,
      })
    ).toEqual({
      hasNext: true,
      hasPrevious: false,
      pages: [
        { isActive: true, isEllipsis: false, key: "1", num: 1 },
        { isActive: false, isEllipsis: false, key: "2", num: 2 },
        { isActive: false, isEllipsis: false, key: "3", num: 3 },
        { isActive: false, isEllipsis: false, key: "4", num: 4 },
        { isActive: false, isEllipsis: false, key: "5", num: 5 },
        { isActive: false, isEllipsis: false, key: "6", num: 6 },
        { isActive: false, isEllipsis: false, key: "7", num: 7 },
        { isActive: false, isEllipsis: false, key: "8", num: 8 },
        { isActive: false, isEllipsis: false, key: "9", num: 9 },
      ],
    });
  });

  test("10 pages", () => {
    expect(
      peeji({
        page: 1,
        pageCount: 10,
      })
    ).toEqual({
      hasNext: true,
      hasPrevious: false,
      pages: [
        { isActive: true, isEllipsis: false, key: "1", num: 1 },
        { isActive: false, isEllipsis: false, key: "2", num: 2 },
        { isActive: false, isEllipsis: false, key: "3", num: 3 },
        { isActive: false, isEllipsis: false, key: "4", num: 4 },
        { isActive: false, isEllipsis: false, key: "5", num: 5 },
        { isActive: false, isEllipsis: false, key: "6", num: 6 },
        { isActive: false, isEllipsis: false, key: "7", num: 7 },
        { isEllipsis: true, key: "right-ellipsis" },
        { isActive: false, isEllipsis: false, key: "10", num: 10 },
      ],
    });
  });
});

describe("when at page 5", () => {
  test("10 pages", () => {
    expect(
      peeji({
        page: 5,
        pageCount: 10,
      })
    ).toEqual({
      hasNext: true,
      hasPrevious: true,
      pages: [
        { isActive: false, isEllipsis: false, key: "1", num: 1 },
        { isActive: false, isEllipsis: false, key: "2", num: 2 },
        { isActive: false, isEllipsis: false, key: "3", num: 3 },
        { isActive: false, isEllipsis: false, key: "4", num: 4 },
        { isActive: true, isEllipsis: false, key: "5", num: 5 },
        { isActive: false, isEllipsis: false, key: "6", num: 6 },
        { isActive: false, isEllipsis: false, key: "7", num: 7 },
        { isEllipsis: true, key: "right-ellipsis" },
        { isActive: false, isEllipsis: false, key: "10", num: 10 },
      ],
    });
  });
  test("20 pages", () => {
    expect(
      peeji({
        page: 5,
        pageCount: 20,
      })
    ).toEqual({
      hasNext: true,
      hasPrevious: true,
      pages: [
        { isActive: false, isEllipsis: false, key: "1", num: 1 },
        { isActive: false, isEllipsis: false, key: "2", num: 2 },
        { isActive: false, isEllipsis: false, key: "3", num: 3 },
        { isActive: false, isEllipsis: false, key: "4", num: 4 },
        { isActive: true, isEllipsis: false, key: "5", num: 5 },
        { isActive: false, isEllipsis: false, key: "6", num: 6 },
        { isActive: false, isEllipsis: false, key: "7", num: 7 },
        { isEllipsis: true, key: "right-ellipsis" },
        { isActive: false, isEllipsis: false, key: "20", num: 20 },
      ],
    });
  });
});

describe("when at page 6", () => {
  test("11 pages", () => {
    expect(
      peeji({
        page: 6,
        pageCount: 11,
      })
    ).toEqual({
      hasNext: true,
      hasPrevious: true,
      pages: [
        { isActive: false, isEllipsis: false, key: "1", num: 1 },
        { isEllipsis: true, key: "left-ellipsis" },
        { isActive: false, isEllipsis: false, key: "4", num: 4 },
        { isActive: false, isEllipsis: false, key: "5", num: 5 },
        { isActive: true, isEllipsis: false, key: "6", num: 6 },
        { isActive: false, isEllipsis: false, key: "7", num: 7 },
        { isActive: false, isEllipsis: false, key: "8", num: 8 },
        { isEllipsis: true, key: "right-ellipsis" },
        { isActive: false, isEllipsis: false, key: "11", num: 11 },
      ],
    });
  });

  test("11 pages, 1 left, 1 right", () => {
    expect(
      peeji({
        page: 6,
        pageCount: 11,
        showLeft: 1,
        showRight: 1,
      })
    ).toEqual({
      hasNext: true,
      hasPrevious: true,
      pages: [
        { isActive: false, isEllipsis: false, key: "1", num: 1 },
        { isEllipsis: true, key: "left-ellipsis" },
        { isActive: false, isEllipsis: false, key: "5", num: 5 },
        { isActive: true, isEllipsis: false, key: "6", num: 6 },
        { isActive: false, isEllipsis: false, key: "7", num: 7 },
        { isEllipsis: true, key: "right-ellipsis" },
        { isActive: false, isEllipsis: false, key: "11", num: 11 },
      ],
    });
  });
  test("11 pages, 1 left, 2 right", () => {
    expect(
      peeji({
        page: 6,
        pageCount: 11,
        showLeft: 1,
        showRight: 2,
      })
    ).toEqual({
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
    });
  });

  test("11 pages, 2 left, 1 right", () => {
    expect(
      peeji({
        page: 6,
        pageCount: 11,
        showLeft: 2,
        showRight: 1,
      })
    ).toEqual({
      hasNext: true,
      hasPrevious: true,
      pages: [
        { isActive: false, isEllipsis: false, key: "1", num: 1 },
        { isEllipsis: true, key: "left-ellipsis" },
        { isActive: false, isEllipsis: false, key: "4", num: 4 },
        { isActive: false, isEllipsis: false, key: "5", num: 5 },
        { isActive: true, isEllipsis: false, key: "6", num: 6 },
        { isActive: false, isEllipsis: false, key: "7", num: 7 },
        { isEllipsis: true, key: "right-ellipsis" },
        { isActive: false, isEllipsis: false, key: "11", num: 11 },
      ],
    });
  });
});
