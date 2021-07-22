const modal = document.querySelector(".modal");
M.Modal.init(modal);

const form = document.querySelector("form");
const name = document.querySelector("#name");
const parent = document.querySelector("#parent");
const department = document.querySelector("#department");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  db.collection("employees").add({
    name: name.value,
    parent: parent.value,
    department: department.value,
  });

  var instance = M.Modal.getInstance(modal); //*get the appeared modal
  instance.close(); //*close it

  form.reset(); //*reset the form
});
