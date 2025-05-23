import axiosInstance from "./axiosInstance";

export function uploadAvatarImage(file) {
  const form = new FormData();
  form.append("image", file);
  return axiosInstance.post(
    "/api/v1/userProfile/uploadAvatarImage",
    form,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
}

export function fetchUserProfile() {
  return axiosInstance.get("/api/v1/userProfile");
}

export function updatePhoneNumber({ id, phoneNumber, description }) {
  return axiosInstance.post(
    "/api/v1/userProfile/updatePhoneNumber",
    { id, phoneNumber, description }
  );
}

export function addPhoneNumber({ phoneNumber, description }) {
  return axiosInstance.post(
    "/api/v1/userProfile/addPhoneNumber",
    { phoneNumber, description }
  );
}


export function deletePhoneNumber({ phoneNumber }) {
  return axiosInstance
    .delete("/api/v1/userProfile/deletePhoneNumber", { params: { phoneNumber } })
    .then(res => res)
    .catch(err => { throw err; });
}
