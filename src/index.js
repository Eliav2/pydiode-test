async function main() {
    let pyodide = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
    });

    const response = await fetch("./src/index.py");
    const pyText = await response.text();
    pyodide.runPython(pyText);
}

main();
