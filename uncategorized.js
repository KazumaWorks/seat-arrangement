function addName() {
    const name = text.value.replace(/[ 　]/g, "");
    const gender = document.querySelector('select[name="gender"]').value;
    if (name.length !== 0) {
        List.push(new Student(name, gender));
        save(List, "List");
    }
    countStudents();
    text.value = "";
    text.focus();
}