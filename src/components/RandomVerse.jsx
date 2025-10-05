import React, { useState } from "react";
import axios from "axios";

const RandomVerse = () => {
  const [verse, setVerse] = useState("");

  const fetchRandomVerse = async () => {
    try {
      const res = await axios.get("https://labs.bible.org/api/?passage=random&type=json");
      const v = res.data[0];
      setVerse(`${v.bookname} ${v.chapter}:${v.verse} — ${v.text}`);
    } catch (error) {
      console.error(error);
      setVerse("Error fetching verse. Try again!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h2>📖 Get a Random Verse</h2>
      <button 
        onClick={fetchRandomVerse} 
        style={{ padding: "8px 16px", marginTop: "10px" }}
      >
        Get Verse
      </button>
      {verse && <p style={{ marginTop: "15px" }}>{verse}</p>}
    </div>
  );
};

export default RandomVerse;
