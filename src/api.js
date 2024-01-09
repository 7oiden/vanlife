import axios from "axios";

export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans";
  const response = await axios.get(url);
  return response.data.vans;
}

export async function getHostedVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const response = await axios.get(url);
  console.log(response);
  return response.data.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
