import React from "react";
import SignInModal from "../components/login/SignInModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, loginBySms, sendSmsCode } from "../redux/slices/authSlice";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();
  const { isAuthenticated, status, error } = useSelector((s) => s.auth);

  const handlePasswordLogin = async ({ identifier, password }) => {
    await dispatch(fetchUserData({ identifier, password }));
  };

  const handleSmsRequest = async (phone) => {
    await dispatch(sendSmsCode(phone));
  };

  const handleSmsLogin = async ({ phone, code }) => {
    await dispatch(loginBySms({ phone, code }));
  };

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <SignInModal
      onPasswordLogin={handlePasswordLogin}
      onSmsRequest={handleSmsRequest}
      onSmsLogin={handleSmsLogin}
      loading={status === "loading"}
      error={error}
    />
  );
}
