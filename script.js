// Student data
const students = [
    { name: "Moaaz Mohammwd wefik", email: "moaaz.2524053@stemelsadat.moe.edu.eg" },
    { name: "Elbadri Ekramy", email: "elbadri.2524026@stemelsadat.moe.edu.eg" },
    { name: "Tarek Ehap", email: "tarek.2524038@stemelsadat.moe.edu.eg" },
    { name: "Mohamed Ahmed", email: "mohamed.2524047@stemelsadat.moe.edu.eg" },
    { name: "Mohamed Ashraf", email: "mohamed.2524048@stemelsadat.moe.edu.eg" }
];

// Function to display students
function displayStudents() {
    const studentList = document.getElementById("student-list");

    students.forEach(student => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="student-name">${student.name}</div>
            <div class="student-email">${student.email}</div>
        `;
        studentList.appendChild(li);
    });
}

// Call the function to display students
displayStudents();