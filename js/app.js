const tableBody = document.getElementById("table-body");
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
      >
      <i class="fas fa-edit"></i>
  </button>

  <button class="btn btn-danger">
      <i class="fas fa-trash"></i>
  </button>
  </td>
</tr>`;
};

tableBody.insertAdjacentHTML(
  "afterend",
  createRow(id, "hewr", "07508614371", "hewr@email.com")
);
