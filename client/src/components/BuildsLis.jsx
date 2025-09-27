import { useState, useEffect } from "react";

export default function BuildsList() {
  const [builds, setBuilds] = useState([]);

  useEffect(() => {
    async function fetchBuilds() {
      try {
        const response = await fetch(
          "https://week-07-assignment-server.onrender.com/builds"
        );

        const data = await response.json();
        setBuilds(data);
      } catch (error) {
        console.error("Error fetching builds:", error);
      }
    }

    fetchBuilds();
    const buildsInterval = setInterval(fetchBuilds, 3000);

    return () => clearInterval(buildsInterval);
  }, []);

  return (
    <div>
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
    </div>
  );
}
