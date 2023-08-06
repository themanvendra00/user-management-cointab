let tbody = document.getElementById("users");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPage = 1;

function fetchUserFromDatabase(page,gender) {
  fetch(`http://localhost:5000/api/users/user-details?page=${page}&gender=${gender}`)
    .then((res) => res.json())
    .then((data) => {
      let user = data.results;
      tbody.innerHTML = "";
      user.forEach((row) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${row.id}</td>
        <td>${row.firstName} ${row.lastName}</td>
        <td>${row.userName}</td>
        <td>${row.email}</td>
        <td>${row.password}</td>
        <td>${row.gender}</td>
        <td>${row.age}</td>
        <td>${row.phone}</td>
        <td><img src="${row.picture}" /></td>
      `;
        tbody.appendChild(tr);
      });
      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === data.pages;
      document.getElementById('currentPageNo').innerText = `${currentPage} of ${data.pages}` ;
    });
}

function changePage(step) {
  currentPage += step;
  fetchUserFromDatabase(currentPage,"");
}

function filterByGender(){
  let gender = document.getElementById('genderFilter').value;
  fetchUserFromDatabase(1,gender);
}

fetchUserFromDatabase(1,"");
