let fetchBtn = document.getElementById("fetch-user");
let deleteBtn = document.getElementById("delete-user");
let userDetailBtn = document.getElementById("user-detail");
let loading = false;

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

fetchBtn.addEventListener("click", () => {
  fetchBtn.innerText = "Loading . . . .";
  if (loading) {
    Toast.fire({
      icon: "error",
      title: "Please wait, data is fetching!",
    });
  } else {
    loading = true;
    fetch("http://localhost:5000/api/users/fetch-users", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        loading = false;
        fetchBtn.innerText = "Fetch Users";
        if (data.message) {
          Toast.fire({
            icon: "success",
            title: `${data.message}`,
          });
        } else {
          Toast.fire({
            icon: "error",
            title: `${data.error}`,
          });
        }
      });
  }
});

deleteBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch("http://localhost:5000/api/users/delete-users", {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            Swal.fire("Deleted!", `${data.message}`);
          } else {
            Toast.fire({
              icon: "error",
              title: `${data.error}`,
            });
          }
        });
    }
  });
});

userDetailBtn.addEventListener("click", () => {
  window.location.href = "userDetail.html";
});
