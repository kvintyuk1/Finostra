import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../../utils/axiosInstance';

export const ProfileContext = createContext({
  profile: null,
  loading: false,
  error: null,
  refreshProfile: () => {},
  setProfile: () => {}
});

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refreshProfile = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get('/api/v1/userProfile/get', { withCredentials: true });
      setProfile(data);
    } catch (err) {
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, loading, error, refreshProfile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
