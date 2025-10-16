import TemplateCard from "../components/TemplateCard";

const templates = [
  {
    name: "React Portfolio",
    type: "free",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_1",
    image: "https://themewagon.com/wp-content/uploads/2020/10/aievari.jpg",
  },
  {
    name: "Laravel Ecommerce",
    type: "paid",
    price: 5,
    image: "https://elements-resized.envatousercontent.com/elements-cover-images/edbbc4ab-95c0-4fca-b096-036d38cc9711?w=433&cf_fit=scale-down&q=85&format=auto&s=3055db25f7249cccc3be0006043c1d05b75d5250c9dc3ed0d834b382906e22db",
  },
  {
    name: "Next.js Blog",
    type: "free",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_2",
    image: "https://s.tmimgcdn.com/scr/800x500/52500/free-responsive-corporate-template-website-template_52524-0-original.jpg",
  },
  {
    name: "React Dashboard",
    type: "paid",
    price: 10,
    image: "https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg",
  },
  {
    name: "SaaS Landing Page",
    type: "paid",
    price: 8,
    image: "https://img.freepik.com/free-vector/landing-page-template-second-hand-fashion-store_52683-109215.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Business Website",
    type: "free",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_3",
      image: "https://www.sliderrevolution.com/wp-content/uploads/2023/06/ecommerce-website-templates.jpg",
  },
];

export default function TemplatesPage() {
  return (
    <section className="p-10 min-h-screen ">
      <h1 className="text-3xl font-bold mb-8 text-center text-black ">All Templates</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {templates.map((tpl, index) => (
          <TemplateCard key={index} {...tpl} />
        ))}
      </div>
    </section>
  );
}
