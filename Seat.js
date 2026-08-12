class Seat {
    constructor(element, row) {
        this.element = element;
        this.row = row;

        this.type = null;
        this.status = null;
    }

    changeType() {
        this.element.textContent = "";

        const types = [null, "ladies", "unabled"];

        const currentIndex = types.indexOf(this.type);
        const nextIndex = (currentIndex + 1) % types.length;

        this.type = types[nextIndex];

        if (this.type === "unabled") {
            this.status = "unavailable";
        } else {
            this.status = null;
        }

        this.element.classList.remove("ladies", "unabled");

        if (this.type !== null) {
            this.element.classList.add(this.type);
        }
    }

    occupy(student) {
        this.element.textContent = student.name;
        this.status = "unavailable";
    }

    vacate() {
        this.element.textContent = null;
        if (this.type !== "unabled") {
            this.status = null;
        }
    }
}