import axios from "axios";

export async function getVans() {
  const response = await axios.get("/api/vans");
  // if (response.status !== 200) {
  //   throw {
  //     message: "Failed to fetch vans",
  //     statusText: response.statusText,
  //     status: response.status,
  //   };
  // }
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
