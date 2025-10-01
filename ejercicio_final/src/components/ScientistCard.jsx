import React from "react";

export function ScientistCard({ name, profession, awards, discovery, image }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", marginBottom: "16px", maxWidth: "400px" }}>
      <img src={image} alt={name} style={{ width: "80px", borderRadius: "50%", marginBottom: "8px" }} />
      <h3>{name}</h3>
      <ul>
        <li><strong>Profesión:</strong> {profession}</li>
        <li><strong>Premios:</strong> {awards}</li>
        <li><strong>Descubrió:</strong> {discovery}</li>
      </ul>
    </div>
  );
}