import { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    country: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = () => {
    console.log("Final Data:", formData);
    alert("Form Submitted!");
  };

  return (
    <div style={{ width: 300, margin: "50px auto" }}>
      <h2>Step {step}</h2>

      {/* STEP 1 */}
      {step === 1 && (
        <>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <br /><br />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br /><br />
          <button onClick={nextStep}>Next</button>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <br /><br />
          <input
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
          <br /><br />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <>
          <h4>Review</h4>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>City: {formData.city}</p>
          <p>Country: {formData.country}</p>

          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
}

export default MultiStepForm;
