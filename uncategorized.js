function printName() {
    ul.innerHTML = "";
    List.forEach(Student => {
        const name = Student.name;
        const li = document.createElement("li");
        const button = document.createElement("button");
        li.appendChild(button);
        ul.appendChild(li);
        li.classList.add("name");
        button.textContent = name;
        button.disabled = true;
    })
}

function addName() {
    const name = text.value.replace(/[ 　]/g, "");
    const gender = document.querySelector('select[name="gender"]').value;
    if (name.length !== 0) {
        List.push(new Student(name, gender));
        save(List);
    }
    text.value = "";
    text.focus();
    count();
}