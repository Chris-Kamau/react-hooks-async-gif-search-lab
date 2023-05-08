import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("dolphin");
  const apiKey = "4U7ciO80FPAvS7dc0l7ASHfwnj7NaA7S";

  useEffect(() => {
    fetchGifs();
  }, []);

  const fetchGifs = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`
      );
      const data = await response.json();
      const firstThreeGifs = data.data.slice(0, 3);
      setGifs(firstThreeGifs);
    } catch (error) {
      console.error("Error fetching gifs:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <GifSearch onSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
