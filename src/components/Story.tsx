import React, { useEffect, useState } from "react";
import client, { urlFor } from "../Lib/sanityClient.jsx";

interface StoryProps {
  language: "pt" | "en";
}

export default function Story({ language }: StoryProps) {
  const [storyData, setStoryData] = useState<any>(null);

  useEffect(() => {
    // Requête pour récupérer les données du schéma `content`
    client
      .fetch(
        `*[_type == "content"][0]{
          title,
          description,
          image
        }`
      )
      .then((data) => setStoryData(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des données :", error)
      );
  }, []);

  if (!storyData) return <div>Loading...</div>;

  return (
    <section id="story" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-gray-900">
              {language === "pt" ? storyData.title.pt : storyData.title.en}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === "pt"
                ? storyData.description.pt
                : storyData.description.en}
            </p>
          </div>
          <div className="relative aspect-square">
            <img
              src={urlFor(storyData.image).url()}
              alt={
                language === "pt"
                  ? "Interior do restaurante"
                  : "Restaurant interior"
              }
              className="rounded-lg object-cover w-full h-full shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
