function formatDuration(seconds) {
    if (seconds === 0) return "now";

    const timeTable = {};
    let remainingSeconds = seconds;
    const minuteInSeconds = 60;
    const hourInSeconds = 60 * minuteInSeconds;
    const dayInSeconds = 24 * hourInSeconds;
    const yearInSeconds = 365 * dayInSeconds;

    const timeDictionary = {
        years: {
            singular: "year",
            plural: "years"
        },
        days: {
            singular: "day",
            plural: "days"
        },
        hours: {
            singular: "hour",
            plural: "hours"
        },
        minutes: {
            singular: "minute",
            plural: "minutes"
        },
        seconds: {
            singular: "second",
            plural: "seconds"
        }
    };

    if (remainingSeconds >= yearInSeconds) {
        timeTable.years = {
            count: Math.trunc(remainingSeconds / yearInSeconds)
        };
        remainingSeconds =
            remainingSeconds - timeTable.years.count * yearInSeconds;
    }

    if (remainingSeconds >= dayInSeconds) {
        timeTable.days = {
            count: Math.trunc(remainingSeconds / dayInSeconds)
        };
        remainingSeconds =
            remainingSeconds - timeTable.days.count * dayInSeconds;
    }

    if (remainingSeconds >= hourInSeconds) {
        timeTable.hours = {
            count: Math.trunc(remainingSeconds / hourInSeconds)
        };
        remainingSeconds =
            remainingSeconds - timeTable.hours.count * hourInSeconds;
    }

    if (remainingSeconds >= minuteInSeconds) {
        timeTable.minutes = {
            count: Math.trunc(remainingSeconds / minuteInSeconds)
        };
        remainingSeconds =
            remainingSeconds - timeTable.minutes.count * minuteInSeconds;
    }

    if (remainingSeconds) {
        timeTable.seconds = {
            count: remainingSeconds
        };
    }

    const dateParts = [];

    for (let key of Object.keys(timeTable)) {
        const count = timeTable[key].count;
        const unit =
            count === 1
                ? timeDictionary[key].singular
                : timeDictionary[key].plural;
        dateParts.push(`${count} ${unit}`);
    }

    let humanReadableDate;

    if (dateParts.length === 1) {
        humanReadableDate = dateParts[0];
    } else {
        humanReadableDate =
            dateParts.slice(0, -1).join(", ") +
            " and " +
            dateParts[dateParts.length - 1];
    }

    return humanReadableDate;
}

module.exports = formatDuration;
