import { useState, useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // Gallery images with metadata
  const galleryImages = [
    {
      id: 1,
      src: "/gallery/Screenshot 2025-05-14 at 10.40.02.png",
      alt: "Mountain biking trail view",
      width: "wide", // wide, tall, or standard
    },
    {
      id: 2,
      src: "/gallery/Screenshot 2025-05-14 at 10.41.09.png",
      alt: "Rider on forest trail",
      width: "standard",
    },
    {
      id: 3,
      src: "/gallery/Screenshot 2025-05-14 at 10.41.45.png",
      alt: "Group riding session",
      width: "standard",
    },
    {
      id: 4,
      src: "/gallery/Screenshot 2025-05-14 at 10.42.43.png",
      alt: "Bike park jump",
      width: "tall",
    },
    {
      id: 5,
      src: "/gallery/Screenshot 2025-05-14 at 11.11.33.png",
      alt: "Trail building session",
      width: "wide",
    },
    {
      id: 6,
      src: "/gallery/Screenshot 2025-05-14 at 11.11.45.png",
      alt: "Mountain view from trail",
      width: "standard",
    },
    {
      id: 7,
      src: "/gallery/Screenshot 2025-05-14 at 11.12.15.png",
      alt: "Downhill section",
      width: "tall",
    },
    {
      id: 8,
      src: "/gallery/Screenshot 2025-05-14 at 11.12.29.png",
      alt: "Rider on technical section",
      width: "standard",
    },
    {
      id: 9,
      src: "/gallery/Screenshot 2025-05-14 at 11.13.33.png",
      alt: "Group photo after ride",
      width: "wide",
    },
    {
      id: 10,
      src: "/gallery/Screenshot 2025-05-14 at 11.13.43.png",
      alt: "Bike maintenance workshop",
      width: "standard",
    },
  ];

  useEffect(() => {
    // Add event listener to close modal with escape key
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscKey);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [selectedImage]);

  // Set loaded state to true when all images are loaded
  useEffect(() => {
    const loadImages = async () => {
      const promises = galleryImages.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = () => resolve();
        });
      });

      await Promise.all(promises);
      setLoaded(true);
    };

    loadImages();
  }, []);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2>our gallery</h2>
        <div className="accent-line"></div>

        <p className="gallery-intro">
          Moments captured from our rides, events, and adventures. Join us and
          be part of the next story!
        </p>

        {loaded ? (
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className={`gallery-item ${image.width}`}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.alt} />
                <div className="gallery-item-overlay">
                  <div className="gallery-item-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery-loading">
            <div className="spinner"></div>
            <p>Loading gallery...</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p className="image-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
