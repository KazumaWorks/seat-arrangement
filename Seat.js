class Seat {
    constructor(element, row) {
        this.element = element;
        this.row = row;

        this.type = null;
        this.status = null;
    }

    changeType() {
        const types = [null, "ladies", "disabled"];
        const currentIndex = types.indexOf(this.type);
        const nextIndex = (currentIndex + 1) % types.length;
        
        this.type = types[nextIndex];
        this.element.textContent = null;
        if (this.type === "disabled") {
            this.status = "unavailable";
        } else {
            this.status = null;
        }

        this.element.classList.remove("ladies", "disabled");
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
        if (this.type !== "disabled") {
            this.status = null;
        }
    }
}