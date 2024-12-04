
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import config from "../config";

const SuccessPage = () => {
  const [sessionDetails, setSessionDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get("session_id");
    console.log({ sessionId });
    if (sessionId) {
      fetch(`${config.baseURL}/api/session-details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch session details");
          }
          return response.json();
        })
        .then((data) => {
          setSessionDetails(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching session details:", err);
          setError("Could not fetch session details.");
          setLoading(false);
        });
    } else {
      setError("No session ID found in the URL.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!sessionDetails) {
    return <div>No session details available.</div>;
  }

  const handleReturnToHome = () => {
    // Set subscription status in localStorage
    localStorage.setItem("isSubscribed", "true");
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "green", fontSize: "2rem" }}>🎉 Payment Successful!</h1>
      <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
        Subscription ID: <strong>{sessionDetails.id}</strong>
      </p>
      <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
        Status: <strong>{sessionDetails.status}</strong>
      </p>
      <button
        onClick={handleReturnToHome}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Return to Homepage
      </button>
    </div>
  );
};

export default SuccessPage;
