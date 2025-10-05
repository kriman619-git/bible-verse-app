import React, { useState } from "react";
import axios from "axios";

const SpecificVerse = () => {
  const [input, setInput] = useState("");
  const [verse, setVerse] = useState("");

  const fetchSpecificVerse = async () => {
    if (!input) return;
    try {
      const res = await axios.get(`https://labs.bible.org/api/?passage=${encodeURIComponent(input)}&type=json`);
      if (res.data.length > 0) {
        const v = res.data[0];
        setVerse(`${v.bookname} ${v.chapter}:${v.verse} — ${v.text}`);
      } else {
        setVerse("Verse not found.");
      }
    } catch {
      setVerse("Error fetching verse.");
    }
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <h2>Specific Verse</h2>
      <input
        type="text"
        value={input}
        placeholder="e.g. John 3:16"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={fetchSpecificVerse}>Search</button>
      <p>{verse}</p>
    </div>
  );
};

export default SpecificVerse;
