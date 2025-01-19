import { useEffect, useState } from "react";
import client from "../Lib/sanityClient.jsx";

interface GalleryProps {
  language: "pt" | "en";
}

export default function Gallery({ language }: GalleryProps) {
  const [galleryData, setGalleryData] = useState<any[]>([]);

  useEffect(() => {
    // Requête pour récupérer les données du schéma `gallery`
    client
      .fetch(
        `*[_type == "gallery"][0]{
          images[]{
            "url": image.asset->url,
            title
          }
        }`
      )
      .then((data) => {
        if (data?.images) {
          setGalleryData(data.images);
        }
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des données :", error)
      );
  }, []);

  if (galleryData.length === 0) return <div>Loading...</div>;

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-gray-900 text-center mb-12">
          {language === "pt" ? "Galeria" : "Gallery"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryData.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-xl"
            >
              <img
                src={image.url}
                alt={language === "pt" ? image.title.pt : image.title.en}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-serif">
                  {language === "pt" ? image.title.pt : image.title.en}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
