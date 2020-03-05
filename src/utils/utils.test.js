import { formatDate, formatTime, formatSlug } from "./utils";

describe("formatDate", () => {
  it("Given a date in date time format, returns the date in dd/mm/yyyy format", () => {
    const datetime = "2016-12-13T20:58:40.516Z";
    expect(formatDate(datetime)).toBe("13/12/2016");
  });
});

describe("formatTime", () => {
  it("Given a date in date time format, returns the time in hh:mm format", () => {
    const datetime = "2016-12-13T20:58:40.516Z";
    expect(formatTime(datetime)).toBe("20:58");
  });
});

describe("formatTime", () => {
  it("Given a single word, returns the word capitalised ", () => {
    const slug = "slug";
    expect(formatSlug(slug)).toBe("Slug");
  });
});
