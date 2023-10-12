for(let i = 0; i < 10; i++) {
    let studentName = window.prompt("name : ");
    let studentDegree = window.prompt("degree : ");
    let presentDegree = (studentDegree / 700) * 100;
    document.write(`<h1>${studentName} is ${Math.round(presentDegree)}%</h1>`);
};

