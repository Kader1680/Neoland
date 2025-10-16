"use client";
import { Download, Eye } from "lucide-react";
import HeroBanner from "./components/HeroBanner";

const templates = [
  {
    id: 1,
    title: "Business Dashboard",
    image: "https://source.unsplash.com/600x400/?dashboard,ui",
    type: "Free",
    price: 0,
  },
  {
    id: 2,
    title: "Ecommerce Website",
    image: "https://source.unsplash.com/600x400/?ecommerce,website",
    type: "Paid",
    price: 5,
  },
  {
    id: 3,
    title: "Portfolio Template",
    image: "https://source.unsplash.com/600x400/?portfolio,web",
    type: "Free",
    price: 0,
  },
  {
    id: 4,
    title: "SaaS Landing Page",
    image: "https://source.unsplash.com/600x400/?saas,landing",
    type: "Paid",
    price: 10,
  },
];

export default function Home() {
  return (
    <div className="   p-10">
      
       <HeroBanner />
    </div>
  );
}
