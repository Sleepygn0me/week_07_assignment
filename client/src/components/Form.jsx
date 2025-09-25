import { useState, useEffect } from "react";

export default function BuildForm() {
  const [formData, setFormData] = useState({
    buildName: "",
    src: "",
    description: "",
    level: "",
    userId: "",
  });

  const [status, setStatus] = useState("");
  const [builds, setBuilds] = useState([]);

  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  useEffect(() => {
    async function fetchBuilds() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/builds`);
        if (!response.ok) {
          throw new Error("Failed to fetch builds");
        }
        const data = await response.json();
        setBuilds(data);
      } catch (error) {
        console.error("Error fetching builds:", error);
        setStatus("Failed to load builds");
      }
    }

    fetchBuilds();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setStatus("Submitting...");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/add-builds`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

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
        userId: "",
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
            value={formData.src}
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

          <label htmlFor="userId">User ID:</label>
          <input
            type="number"
            id="userId"
            name="userId"
            required
            value={formData.userId}
            onChange={handleInputChange}
          />
        </fieldset>

        <p>curent value is: {formData.buildName}</p>
        <p>current value is: {formData.description}</p>
        <button type="submit">Submit</button>
      </form>
      {status && <p aria-live="polite">{status}</p>}

      <h2>Existing Builds</h2>
      <ul>
        {builds.map((build, idx) => (
          <li key={idx}>
            <strong>{build.build_name}</strong> (Level {build.level})<br />
            <img src={build.src} alt={build.build_name} width="100" />
            <p>{build.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

//?STRETCH:
