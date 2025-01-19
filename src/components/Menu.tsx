import { useState, useEffect } from "react";
import client from "../Lib/sanityClient.jsx";

interface MenuProps {
  language: "pt" | "en";
}

export default function Menu({ language }: MenuProps) {
  const [menuData, setMenuData] = useState<any>(null);
  const [menuPDFs, setMenuPDFs] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Récupération des données de `ourMenu` depuis Sanity
    client
      .fetch(
        `*[_type == "ourMenu"][0]{
          image1{asset->{url}},
          title,
          description,
          image2{asset->{url}}
        }`
      )
      .then((data) => setMenuData(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des données :", error)
      );
  }, []);

  useEffect(() => {
    // Récupération des données des cartes (`menuPDF`) depuis Sanity
    client
      .fetch(
        `*[_type == "menuPDF"][0]{
          englishPDFs[]{asset->{url}},
          portuguesePDFs[]{asset->{url}}
        }`
      )
      .then((data) => {
        if (language === "en" && data?.englishPDFs) {
          setMenuPDFs(data.englishPDFs);
        } else if (language === "pt" && data?.portuguesePDFs) {
          setMenuPDFs(data.portuguesePDFs);
        }
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des PDFs :", error)
      );
  }, [language]);

  if (!menuData) return <div>Loading...</div>;

  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Image */}
          <div className="relative aspect-[4/5]">
            <img
              src={menuData.image1.asset.url}
              alt={language === "pt" ? menuData.title.pt : menuData.title.en}
              className="rounded-lg object-cover w-full h-full shadow-xl"
            />
          </div>

          {/* Center Column - Text */}
          <div className="flex flex-col justify-center text-center space-y-8">
            <h2 className="text-4xl font-serif text-gray-900">
              {language === "pt" ? menuData.title.pt : menuData.title.en}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === "pt"
                ? menuData.description.pt
                : menuData.description.en}
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors mx-auto"
            >
              {language === "pt" ? "Ver Carta Completa" : "View Full Menu"}
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative aspect-[4/5]">
            <img
              src={menuData.image2.asset.url}
              alt={language === "pt" ? menuData.title.pt : menuData.title.en}
              className="rounded-lg object-cover w-full h-full shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {language === "pt" ? "Nossa Carta" : "Our Menu"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuPDFs.map((pdf: any, index: number) => (
                <div key={index} className="text-center">
                  <img
                    src={pdf.asset.url}
                    alt={`Menu ${index + 1}`}
                    className="rounded-lg border shadow max-w-full h-auto"
                  />
                  <p className="mt-2 text-gray-600">
                    {language === "pt"
                      ? `Carta ${index + 1}`
                      : `Menu ${index + 1}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
