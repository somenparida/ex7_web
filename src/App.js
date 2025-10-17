import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue < 24.9) setCategory("Normal weight");
      else if (bmiValue < 29.9) setCategory("Overweight");
      else setCategory("Obese");
    }
  };

  const reset = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #d7e1ec 0%, #ffffff 100%)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        className="p-5 rounded-4 shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(15px)",
          width: "380px",
          border: "1px solid rgba(255,255,255,0.4)",
          boxShadow: "0 8px 32px rgba(31,38,135,0.2)",
        }}
      >
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#2b2b52" }}>
           BMI Calculator
        </h2>

        <div className="mb-3">
          <label className="form-label fw-semibold">Height (cm)</label>
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="Enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={{
              borderRadius: "10px",
              border: "1px solid #ccc",
              backgroundColor: "#f8f9fa",
            }}
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Weight (kg)</label>
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={{
              borderRadius: "10px",
              border: "1px solid #ccc",
              backgroundColor: "#f8f9fa",
            }}
          />
        </div>

        <div className="d-flex justify-content-between">
          <button
            onClick={calculateBMI}
            className="btn btn-lg fw-semibold"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              borderRadius: "12px",
              width: "48%",
              border: "none",
              boxShadow: "0 4px 10px rgba(118,75,162,0.3)",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.boxShadow = "0 4px 15px rgba(118,75,162,0.6)")
            }
            onMouseOut={(e) =>
              (e.target.style.boxShadow = "0 4px 10px rgba(118,75,162,0.3)")
            }
          >
             Calculate
          </button>

          <button
            onClick={reset}
            className="btn btn-lg fw-semibold"
            style={{
              background: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
              color: "white",
              borderRadius: "12px",
              width: "48%",
              border: "none",
              boxShadow: "0 4px 10px rgba(255,120,160,0.3)",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.boxShadow = "0 4px 15px rgba(255,120,160,0.6)")
            }
            onMouseOut={(e) =>
              (e.target.style.boxShadow = "0 4px 10px rgba(255,120,160,0.3)")
            }
          >
             Reset
          </button>
        </div>

        {bmi && (
          <div className="mt-4 text-center">
            <h4 className="fw-bold" style={{ color: "#2b2b52" }}>
              Your BMI: {bmi}
            </h4>
            <p
              className="fw-semibold"
              style={{
                color:
                  category === "Underweight"
                    ? "#f39c12"
                    : category === "Normal weight"
                    ? "#27ae60"
                    : category === "Overweight"
                    ? "#e67e22"
                    : "#e74c3c",
              }}
            >
              {category}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
