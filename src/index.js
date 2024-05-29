const students = [
    { name: "Laura", age: 22, email: "laura@email.com" },
    { name: "Anna", age: 21, email: "anna@email.com" },
    { name: "Lluis", age: 28, email: "lluis@email.com" },
    { name: "Dani", age: 21, email: "dani@email.com" },
    { name: "Leo", age: 33, email: "leo@email.com" },
    { name: "Clara", age: 24, email: "clara@email.com" },
    { name: "Marc", age: 24, email: "marc@email.com" },
    { name: "Adriana", age: 28, email: "adriana@email.com" },
    { name: "Diego", age: 32, email: "diego@email.com" },
    { name: "Mar", age: 30, email: "mar@email.com" },
    { name: "Helena", age: 22, email: "helena@email.com" },
    { name: "Javi", age: 33, email: "javi@email.com" },
    { name: "Lorena", age: 34, email: "lorena@email.com" },
    { name: "Constanza", age: 28, email: "constanza@email.com" },
  ];
const studentsList = document.createElement("ul");
studentsList.classList.add("grid", "grid-cols-4", "gap-4", "m-10");
document.body.appendChild(studentsList);

const printButton = document.getElementById("printButton");
printButton.addEventListener("click", function() {
  students.forEach(student => {
    const studentItem = document.createElement("li");
    const studentContainer = document.createElement("div");
    studentContainer.textContent = `${student.name} - ${student.age}`;
    studentContainer.classList.add("bg-green-200", "p-2", "rounded-lg", "border-black");
    studentItem.appendChild(studentContainer);
    studentsList.appendChild(studentItem);
  });
});

printButton.style.backgroundColor = "#61a337";