function apiGetUsers(search) {
  return axios({
    url: `https://630063429350a1e548ed161a.mockapi.io/users`,
    method: "GET",
    params: {
      taiKhoan: search,
    },
  });
}
function apiAddUser(user) {
  return axios({
    url: `https://630063429350a1e548ed161a.mockapi.io/users`,
    method: "POST",
    data: user,
  });
}

function apiDeleteUser(id) {
  return axios({
    url: `https://630063429350a1e548ed161a.mockapi.io/users/${id}`,
    method: "DELETE",
  });
}
function apiGetUserById(id) {
  return axios({
    url: `https://630063429350a1e548ed161a.mockapi.io/users/${id}`,
    method: "GET",
  });
}
function apiUpdateUser(id, user) {
  return axios({
    url: `https://630063429350a1e548ed161a.mockapi.io/users/${id}`,
    method: "PUT",
    data: user,
  });
}
