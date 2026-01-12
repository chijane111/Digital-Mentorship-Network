
        const modal = document.getElementById("formModal");
        const openBtn = document.getElementById("openFormBtn");
        const closeBtn = document.querySelector(".close");

        openBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        document.getElementById("menteeForm").addEventListener("submit", function(e){
            e.preventDefault();
            alert("Mentee form submitted successfully!");
            localStorage.setItem("menteeFormData", "submitted");
            this.reset();
        });

        fetch("../footer.html")
            .then(response => response.text())
            .then(data => document.getElementById("footer").innerHTML = data);

        fetch("navbar.html")
            .then(response => response.text())
            .then(data => document.getElementById("navbar").innerHTML = data);
    