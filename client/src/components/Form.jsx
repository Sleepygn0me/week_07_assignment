import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    buildName: "",
    src: "",
    description: "",
    level: "",
  });
  const [status, setStatus] = useState("");

  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setStatus("Submitting...");

    try {
      const response = await fetch(import.meta.env.VITE_WEEK7_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();
      setStatus("Build successfully added!");
      console.log("Server response:", data);

      // reset form
      setFormData({
        buildName: "",
        src: "",
        description: "",
        level: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to submit build");
    }
  }

  return (
    <>
      <h1>Add New Build Ideas</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Build Info</legend>

          <label htmlFor="name"> Build Name:</label>
          <input
            type="text"
            id="buildName"
            name="buildName"
            required
            value={formData.buildName}
            onChange={handleInputChange}
          />
          <label htmlFor="src">Image URL:</label>
          <input
            type="text"
            id="src"
            name="src"
            required
            vlaue={formData.src}
            onChange={handleInputChange}
          />
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            required
            value={formData.description}
            onChange={handleInputChange}
          />

          <label htmlFor="level">Level:</label>
          <input
            type="number"
            id="level"
            name="level"
            required
            value={formData.level}
            onChange={handleInputChange}
          />
        </fieldset>

        <p>curent value is: {formData.buildNamename}</p>
        <p>current value is: {formData.description}</p>
        <button type="submit">Submit</button>
      </form>
      {status && <p aria-live="polite">{status}</p>}
    </>
  );
}

//?STRETCH:
