import { useEffect, useState } from "react";
import api from "./api/api";

const Profile = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await api.get("/auth/profile");

console.log(res.data);

setUser(res.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    getProfile();
  }, []);

  return (
    <div>
      <h1>Profile</h1>

      {user ? (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;