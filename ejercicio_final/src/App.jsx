import React from "react";
import { scientists } from "./data/scientists";
import { ScientistCard } from "./components/ScientistCard";

function App() {
  return (
    <div style={{ padding: "32px" }}>
      <h2>Científicos Notables</h2>
      {scientists.map((s, idx) => (
        <ScientistCard
          key={idx}
          name={s.name}
          profession={s.profession}
          awards={s.awards}
          discovery={s.discovery}
           image={s.image}
        />
      ))}
    </div>
  );
}

export default App;