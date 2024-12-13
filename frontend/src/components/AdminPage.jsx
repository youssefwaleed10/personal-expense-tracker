import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.role === "admin") {
      setIsAdmin(true);
    } else {
      navigate("/signin"); // Redirect to sign-in if not an admin
    }
  }, [navigate]);

  return (
    <div>
      {isAdmin ? (
        <div>
          <h2>Welcome to the Admin Page</h2>
          {/* Admin functionality goes here */}
        </div>
      ) : (
        <p>Access denied. Only admins are allowed.</p>
      )}
    </div>
  );
};

export default AdminPage;
