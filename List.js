function load(key) {
    return (JSON.parse(localStorage.getItem(key)) || []);
}

function save(data, key) {
    localStorage.setItem(key, JSON.stringify(data));
}

function countStudents() {
    let maleCount = 0;
    let femaleCount = 0;
    List.forEach(student => {
        if (student.gender === "male") {
            maleCount++;
        }
        if (student.gender === "female") {
            femaleCount++;
        }
    })
    document.querySelector(".maleCount").textContent = maleCount;
    document.querySelector(".femaleCount").textContent = femaleCount;
    document.querySelector(".totalCount").textContent = List.length;
}

function removeStudents() {
    const selectedIndexes = [];
    document.querySelectorAll("li button").forEach((element, index) => {
        if (element.classList.contains("selected")) {
            selectedIndexes.push(index);
        }
    })
    List = List.filter((student, index) => {
        return !selectedIndexes.includes(index);
    })
}

function displayStudents() {
    const students = List.map(student => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.disabled = true;
        li.textContent = student.name;
        li.appendChild(button);
        return li;
    })
    ul.replaceChildren(...students);
}