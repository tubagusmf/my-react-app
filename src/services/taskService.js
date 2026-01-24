const API_URL = "http://localhost:3000/v1/tasks";

const getAuthHeader = () => {
  const token = localStorage.getItem("access_token");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export const fetchTasks = async (params = "") => {
  const res = await fetch(`${API_URL}${params}`, {
    headers: getAuthHeader(),
  });
  return res.json();
};

export const createTask = async (payload) => {
  const res = await fetch(`${API_URL}/create`, {
    method: "POST",
    headers: getAuthHeader(),
    body: JSON.stringify(payload),
  });
  return res.json();
};

export const updateTask = async (id, payload) => {
  const res = await fetch(`${API_URL}/update/${id}`, {
    method: "PUT",
    headers: getAuthHeader(),
    body: JSON.stringify(payload),
  });
  return res.json();
};

export const deleteTask = async (id) => {
  const res = await fetch(`${API_URL}/delete/${id}`, {
    method: "DELETE",
    headers: getAuthHeader(),
  });
  return res.json();
};
