function load () {
    return (JSON.parse(localStorage.getItem("List")) || []);
}

function save (List) {
    localStorage.setItem("List", JSON.stringify(List));
}