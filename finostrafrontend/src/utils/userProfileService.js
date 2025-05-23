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


// не працює має змінити на put 
export function updatePhoneNumber({ phoneNumber, description }) {
  return axiosInstance.post(
    "/api/v1/userProfile/updatePhoneNumber",
    { phoneNumber, description }
  );
}


export function addPhoneNumber({ phoneNumber, description }) {
  return axiosInstance.post(
    "/api/v1/userProfile/addPhoneNumber",
    { phoneNumber, description }
  );
}