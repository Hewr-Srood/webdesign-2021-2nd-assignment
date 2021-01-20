// Elemets
const tableBody = document.getElementById('table-body');
const userName = document.getElementById('user-name');
const userPhone = document.getElementById('user-phone');
const userEmail = document.getElementById('user-email');
const modalForm = document.getElementById('modal-form');
const saveBtn = document.getElementById('save-modal');
const addUserBtn = document.getElementById('add-contact-btn');
const modalHeadertext = document.getElementById('modal-header-text');
const closeBtn = document.getElementById('x-btn-close');
const logoutBtn = document.getElementById('logout-btn');
let editBtns, deleteBtns;
const logged = localStorage.getItem('loggedUser');

const init = () => {
  if (!logged) {
    location.assign('index.html');
  }
  renderUsers();
};

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedUser');
  location.assign('index.html');
});

// users
let users = JSON.parse(localStorage.getItem('users')) || [
  { name: 'hewr', phone: '07504454545', email: 'hewr@email.com' },
  { name: 'ali', phone: '07504444444', email: 'ali@email.com' },
  { name: 'ahmad', phone: '07504464646', email: 'ahmad@email.com' },
  { name: 'ayman', phone: '07504434343', email: 'ayman@email.com' },
];
const createRow = (id, name, phone, email) => {
  let newRow = `
  <tr>
    <td class="id">${id}</td>
    <td class="name"> ${name}</td>
    <td class="pgone">${phone}</td>
    <td class="email">${email}</td>
    <td>
        <button
            type="button"
            id="${id}"
            class="btn btn-primary edit-btn"
            data-bs-toggle="modal"
            data-bs-target="#modal3"
        >
        <i class="fas fa-edit"></i>
    </button>

    <button class="btn btn-danger delete-btn ">
        <i class="fas fa-trash"></i>
    </button>
    </td>
</tr>`;
  return newRow;
};
// addUser
const addUser = () => {
  users.push({
    name: userName.value,
    phone: userPhone.value,
    email: userEmail.value,
  });
};
// edit data
const editData = (e) => {
  let rowData = e.target.parentElement.parentElement.children;
  if (!rowData.innerText) {
    rowData = e.target.parentElement.parentElement.parentElement.children;
  }
  let name = rowData[1].innerText;
  let phone = rowData[2].innerText;
  let email = rowData[3].innerText;
  updateModal(name, phone, email);

  users.map((user) => {
    if (user.name == name) {
      modalForm.onsubmit = (e) => {
        e.preventDefault();
        user.name = userName.value;
        user.phone = userPhone.value;
        user.email = userEmail.value;
        renderUsers();
        closeBtn.click();
      };
    }
  });
};
const deleteData = (e) => {
  const wantsToPlayAgain = confirm('are you sure?');
  if (wantsToPlayAgain) {
    let name = e.target.closest('tr').children[1].innerText;
    let email = e.target.closest('tr').children[3].innerText;
    users.map((user, i) => {
      if (user.email == email && user.name == name) {
        users.splice(i, 1);
      }
    });
    renderUsers();
  }
};
// eventListners
const addEventListeners = () => {
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', deleteData);
  });
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener('click', editData);
  });
  addUserBtn.addEventListener('click', () => {
    modalHeadertext.innerText = 'Add User';
    userPhone.value = '';
    userEmail.value = '';
    userName.value = '';
    modalForm.onsubmit = (e) => {
      e.preventDefault();
      modalForm.reset;
      addUser();
      renderUsers();
      closeBtn.click();
    };
  });
};

//update the selectors and localstorage
const update = () => {
  editBtns = document.querySelectorAll('.edit-btn');
  deleteBtns = document.querySelectorAll('.delete-btn');
  addEventListeners();
  localStorage.setItem('users', JSON.stringify(users));
};

// render the users
const renderUsers = () => {
  tableBody.innerHTML = '';
  users.map((user, i) => {
    tableBody.insertAdjacentHTML(
      'beforeend',
      createRow(i + 1, user.name, user.phone, user.email),
    );
  });
  update();
};

// load data from local storage or default data
window.addEventListener('DOMContentLoaded', init());
// update modal
const updateModal = (name, phone, email) => {
  modalForm.reset;
  userName.value = name;
  userPhone.value = phone;
  userEmail.value = email;
};
