import React, { useState, useEffect } from "react";
import Card from "./Card";
import Search from "./Search";

function App() {
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      });
  }, [term]);

  return (
    <>
      <Search term={term} setTerm={setTerm} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-center text-3xl">No Images Found</h1>
      )}
      {!isLoading ? (
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image) => {
              return <Card key={image.id} image={image} />;
            })}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    </>
  );
}

export default App;
