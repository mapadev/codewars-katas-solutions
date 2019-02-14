const removeNb = require("./isMyFriendCheating");

test("should calculate pairs", () => {
    expect(removeNb(26)).toEqual([[15, 21], [21, 15]]);
    expect(removeNb(100)).toEqual([]);
});

test.skip("should work with higher numbers", () => {
    expect(
        removeNb(500003500006).toEqual([
            [550320, 908566],
            [559756, 893250],
            [893250, 559756],
            [908566, 550320]
        ])
    );
    expect(
        removeNb(500008500036).toEqual([[677076, 738480], [738480, 677076]])
    );
});
