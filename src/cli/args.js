const parseArgs = () => {
    const args = process.argv.slice(2);
    const values = args.reduce((prevValue, curValue, curIndex, array) => {
        let result;
        if (curIndex % 2 === 0) {
            result = `${curValue.slice(2)} is `;
        } else {
            result = curValue;
            if (curIndex !== array.at(-1)) {
                result = `${result}, `;
            }
        }
        return prevValue + result;
    }, "");
    console.log(values);
};

parseArgs();