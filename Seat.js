class Seat {
    constructor(element, row) {
        this.element = element;
        this.row = row;

        this.type = null;
        this.status = null;
    }

    occupy(student) {
        this.element.textContent = student.name;
        this.status = "unavailable";
    }

    vacate() {
        this.element.textContent = null;
        this.status = null;
    }
}