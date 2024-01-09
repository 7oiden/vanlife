import axios from "axios";

export async function GetVans() {
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
