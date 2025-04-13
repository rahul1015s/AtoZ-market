import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase";
import { FiLogOut, FiUser, FiMail, FiSettings, FiHome } from "react-icons/fi";

function Profile() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserDetails({
            displayName: user.displayName || "User", 
            email: user.email,
            photoURL: user.photoURL,
          });
          
      } else {
        navigate("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error.message);
    } finally {
      setShowLogoutModal(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 transition-all duration-300 hover:shadow-2xl">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                {userDetails.photoURL ? (
                  <img
                    src={userDetails.photoURL}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <FiUser className="w-12 h-12 text-blue-600" />
                )}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {userDetails.displayName}
            </h2>
            <p className="text-gray-600 flex items-center">
              <FiMail className="mr-2" /> {userDetails.email}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center p-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all"
            >
              <FiHome className="mr-2" />
              Back to Home
            </button>
            <button
              onClick={() => alert("Account settings coming soon!")}
              className="flex items-center justify-center p-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all"
            >
              <FiSettings className="mr-2" />
              Account Settings
            </button>
          </div>

          {/* Logout Section */}
          <div className="border-t pt-8">
            <button
              onClick={() => setShowLogoutModal(true)}
              className="w-full flex items-center justify-center px-6 py-3 text-red-600 hover:text-red-700 font-medium rounded-lg hover:bg-red-50 transition-all"
            >
              <FiLogOut className="mr-2" />
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to log out of your account?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
              >
                <FiLogOut className="mr-2" />
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
