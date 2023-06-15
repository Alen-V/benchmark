const arr = [1000, 10000, 100000, 1000000, 10000000];

const test = [[], [], [], [], []];

// Initialize arrays
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
        test[i].push(j);
    }
}

const testFunction = (func) => {
    const t0 = performance.now();
    // block of code that needs to be measured
    func();

    const t1 = performance.now();
    console.log(`Time it takes to run the function: ${t1 - t0} ms`);
};

const testForLoop = () => {
    console.log("Testing For Loop:");
    testWrapper((elements) => {
        testFunction(() => {
            for (let i = 0; i < elements.length; i++) {}
        });
    });
};

const testForEach = () => {
    console.log("Testing For Each:");
    testWrapper((elements) => {
        testFunction(() => elements.forEach((i) => {}));
    });
};

const testMap = () => {
    console.log("Testing Map:");
    testWrapper((elements) => {
        testFunction(() => elements.map((i) => i));
    });
};

const testWrapper = (func) => {
    for (let i = 0; i < test.length; i++) {
        console.log(`Number of elements: ${arr[i]}`);
        func(test[i]);
    }
};

testForLoop();
testForEach();
testMap();
