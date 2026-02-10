import { useEffect, useState } from "react";

function ImageCarousel() {

  const [images, setImages] = useState([]);      // API images
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔹 API call
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=5")
      .then(res => res.json())
      .then(data => {
        setImages(data);
      });
  }, []);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // ⛔ jab tak images nahi aayi
  if (images.length === 0) {
    return <h3 style={{ textAlign: "center" }}>Loading...</h3>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>

      <h2>Image Carousel (API)</h2>

      <img
        src={images[currentIndex].download_url}
        alt="carousel"
        style={{ width: 400, height: 250 }}
      />

      <div style={{ marginTop: 20 }}>
        <button onClick={prevImage} disabled={currentIndex === 0}>
          Prev
        </button>

        <button
          onClick={nextImage}
          disabled={currentIndex === images.length - 1}
          style={{ marginLeft: 10 }}
        >
          Next
        </button>
      </div>

      <p>
        Image {currentIndex + 1} of {images.length}
      </p>

    </div>
  );
}

export default ImageCarousel;
