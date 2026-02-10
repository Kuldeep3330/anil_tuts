import { useState } from "react";

function SingleImageCarousel() {

  const images = [
    "https://picsum.photos/id/1015/400/250",
    "https://picsum.photos/id/1016/400/250",
    "https://picsum.photos/id/1018/400/250"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>

      <h2>Image Carousel</h2>

      <img
        src={images[currentIndex]}
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

export default SingleImageCarousel;
