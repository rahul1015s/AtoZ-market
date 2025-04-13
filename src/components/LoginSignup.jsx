import { useState, useEffect, useRef } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInAnonymously,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { FiEye, FiEyeOff, FiLoader, FiInfo } from "react-icons/fi";

const getFriendlyErrorMessage = (code) => {
  const errorMap = {
    "auth/invalid-email": "Please enter a valid email address",
    "auth/user-disabled": "This account has been disabled",
    "auth/user-not-found": "No account found with this email",
    "auth/wrong-password": "Incorrect password",
    "auth/email-already-in-use": "An account already exists with this email",
    "auth/weak-password": "Password must be at least 6 characters",
    "auth/network-request-failed":
      "Network error. Please check your connection",
    "auth/too-many-requests":
      "Too many attempts. Try again later or reset password",
    "auth/operation-not-allowed": "Guest login is currently disabled", // Add this line
  };
  return errorMap[code] || "An error occurred. Please try again.";
};

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef(null);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, [isSignup]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) navigate(location.state?.from?.pathname || "/");
    });
    return unsubscribe;
  }, [navigate, location.state?.from?.pathname]);

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (isSignup) {
      if (name.trim().length < 2) {
        setError("Please enter a valid name");
        return false;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return false;
      }
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCredential.user, { displayName: name });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      navigate(location.state?.from?.pathname || "/", {
        state: {
          successMessage: isSignup
            ? "Account created successfully!"
            : "Welcome back!",
        },
      });
    } catch (err) {
      setError(getFriendlyErrorMessage(err.code));
      setPassword("");
    } finally {
      setLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsSignup(!isSignup);
    setError("");
    setPassword("");
    setName("");
  };

  //gustLogin

  const handleGuestLogin = async () => {
    setLoading(true);
    setError("");

    try {
      await signInAnonymously(auth);
      navigate(location.state?.from?.pathname || "/", {
        state: {
          successMessage: "Welcome guest!",
        },
      });
    } catch (err) {
      setError(getFriendlyErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 transition-all duration-300 hover:shadow-3xl">
        {location.state?.message && (
          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
            <p className="text-blue-800 font-medium flex items-center">
              <FiInfo className="mr-2" />
              {location.state.message}
            </p>
          </div>
        )}
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <fieldset disabled={loading}>
            {isSignup && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  minLength={2}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                ref={emailRef}
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                autoComplete="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete={isSignup ? "new-password" : "current-password"}
                  required
                  minLength={isSignup ? 6 : undefined}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div
                role="alert"
                aria-live="assertive"
                className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center"
              >
                <span className="text-sm">{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !email || !password || (isSignup && !name)}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {loading ? (
                <>
                  <FiLoader className="animate-spin mr-2" />
                  {isSignup ? "Creating Account..." : "Signing In..."}
                </>
              ) : isSignup ? (
                "Create Account"
              ) : (
                "Sign In"
              )}
            </button>
          </fieldset>
        </form>
     
              { /*This is a horizontal separator with text in the center */}

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue as
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGuestLogin}
            disabled={loading}
            className="w-full mt-6 py-3 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <FiLoader className="animate-spin mr-2" />
                Signing In...
              </>
            ) : (
              "Guest"
            )}
          </button>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={toggleAuthMode}
            className="text-blue-600 hover:text-indigo-800 font-medium transition-colors duration-300"
          >
            {isSignup ? (
              <>
                Already have an account?{" "}
                <span className="underline">Sign In</span>
              </>
            ) : (
              <>
                Need an account? <span className="underline">Sign Up</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
