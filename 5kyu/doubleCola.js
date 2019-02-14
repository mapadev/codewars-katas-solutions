function whoIsNext(names, r) {
    if (r <= names.length) {
        return names[r - 1];
    }

    let fullCyclesQueueLength = names.length;

    while (fullCyclesQueueLength * 2 - names.length < r) {
        fullCyclesQueueLength *= 2;
    }

    const remainingColas = r - (fullCyclesQueueLength - names.length);
    const eachPersonClonesCount = fullCyclesQueueLength / names.length;
    const personIndex = Math.ceil(remainingColas / eachPersonClonesCount) - 1;

    console.log("names:", names);
    console.log("r:", r);
    console.log("queue length:", fullCyclesQueueLength);
    console.log("remaining:", remainingColas);
    console.log("personIndex:", personIndex);
    console.log("result:", names[personIndex]);

    return names[personIndex];
}

const args = {
    names: ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"],
    r: 15
};

whoIsNext(args.names, args.r);
