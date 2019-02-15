const formatDuration = require("./humanReadableDurationFormat");

test("should work with single time unit", () => {
    expect(formatDuration(0)).toBe("now");
    expect(formatDuration(1)).toBe("1 second");
    expect(formatDuration(120)).toBe("2 minutes");
    expect(formatDuration(3600)).toBe("1 hour");
    expect(formatDuration(3600 * 24 * 365)).toBe("1 year");
});

test("should work with two time units", () => {
    expect(formatDuration(62)).toBe("1 minute and 2 seconds");
});

test("should work with more than 2 time units", () => {
    expect(formatDuration(3662)).toBe("1 hour, 1 minute and 2 seconds");
});
