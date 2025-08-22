"use client";

const certificates = [
  { title: "Certificado 1", date: "2023", image: "/certificates/cert1.png" },
  { title: "Certificado 2", date: "2024", image: "/certificates/cert2.png" },
  { title: "Certificado 3", date: "2022", image: "/certificates/cert3.png" },
  { title: "Certificado 4", date: "2021", image: "/certificates/cert4.png" },
];

export default function Certificates() {
  return (
    <section className="p-8 bg-gradient-to-b from-blue-900  to-blackrounded-lg m-4 animate-fadeIn text-white rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Certificados</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="bg-gray-800/50 rounded-lg p-3 shadow-lg hover:scale-105 hover:bg-blue-500 transition-transform duration-300 cursor-pointer flex flex-col items-center text-center"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-contain rounded mb-3"
            />
            <h3 className="font-semibold text-lg">{cert.title}</h3>
            <p className="text-sm text-gray-300">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
