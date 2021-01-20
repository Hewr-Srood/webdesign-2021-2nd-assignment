const tableBody = document.getElementById("table-body");
const editBtn = document.getElementById("edit-btn");
let id = 1;
const count = () => {
  for (let i = 0; i <= id; i++) {
    id++;
  }
  return id;
};
const createRow = (id, name, phone, email) => {
  return `<tr>
  <td>${id}</td>
  <td>${name}</td>
  <td>${phone}</td>
  <td>${email}</td>
  <td>
      <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#modal3"
          id="edit-btn"
      >
      <i class="fas fa-edit"></i>
  </button>

  <button class="btn btn-danger">
      <i class="fas fa-trash"></i>
  </button>
  </td>
</tr>`;
};
const ahmad = {
  name: "ahmad",
  phone: "123",
  email: "example@email.com",
};
const ali = {
  name: "ali",
  phone: "456",
  email: "example@email.com",
};
const hewr = {
  name: "hewr",
  phone: "388",
  email: "example@email.com",
};
const example = [ahmad, ali, hewr];
console.log(ahmad.name);
example.forEach((i, v) =>
  tableBody.insertAdjacentHTML(
    "beforeend",
    createRow(v + 1, i.name, i.phone, i.email)
  )
);
editBtn.addEventListener("click", () => {});
