"use client";
import { Download, Eye, ShoppingCart } from "lucide-react";

export default function TemplateCard({ name, type, price, image, downloadUrl }) {
  const isFree = type.toLowerCase() === "free";

  return (
    <div className="relative border rounded-2xl bg-base-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Badge */}
      <div
        className={`absolute top-3 right-3 badge ${
          isFree ? "badge-success" : "badge-error"
        }`}
      >
        {isFree ? "Free" : `$${price}`}
      </div>

      {/* Image */}
      <figure>
    <img
        src={
        image ||
        "https://source.unsplash.com/600x400/?website,template,ui"
        }
        alt={name}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
    />
    </figure>


      {/* Body */}
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {isFree ? "Download instantly" : "Premium quality template"}
        </p>

        <div className="flex justify-between items-center mt-4">
          <button className="btn btn-outline btn-primary btn-sm flex items-center gap-2">
            <Eye size={16} /> Preview
          </button>

          {isFree ? (
            downloadUrl ? (
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-sm flex items-center gap-2"
              >
                <Download size={16} /> Download
              </a>
            ) : (
              <button
                disabled
                className="btn btn-sm btn-outline btn-disabled"
              >
                Coming soon
              </button>
            )
          ) : (
            <button className="btn btn-primary btn-sm flex items-center gap-2">
              <ShoppingCart size={16} /> Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
