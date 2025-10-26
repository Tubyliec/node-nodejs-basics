const parseEnv = () => {
    const filteredVariables = Object.entries(process.env).filter(([key]) => key.includes("RSS_"));
    for (let variable of filteredVariables) {
        console.log(`RSS_name${filteredVariables.indexOf(variable) + 1}=${variable[1]}`);
    }
};

parseEnv();