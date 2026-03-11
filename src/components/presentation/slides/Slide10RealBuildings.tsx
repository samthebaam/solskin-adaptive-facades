import { SlideLayout } from "../SlideLayout";
import ethLab from "@/assets/slides/eth-lab.jpg";
import officeInterior from "@/assets/slides/office-interior.jpg";
import pergolaRender from "@/assets/slides/pergola-render.jpg";

export const Slide10RealBuildings = () => (
  <SlideLayout>
    <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
      Real-World Impact
    </p>
    <h2 className="font-display text-5xl leading-tight mb-12 animate-fade-in-up">
      From Research to <span className="text-slide-gold">Real Buildings</span>
    </h2>

    <div className="flex gap-8 animate-fade-in-up delay-200">
      {[
        { img: ethLab, title: "ZCBS Lab — ETH Zurich", desc: "First demonstrator installation on a research building", tag: "Demonstrator" },
        { img: officeInterior, title: "Swiss Alps Residences", desc: "Residential installations adapting to alpine climate", tag: "Residential" },
        { img: pergolaRender, title: "Winterthur Flagship", desc: "Our largest installation to date — 1,300 m²", tag: "Flagship" },
      ].map(({ img, title, desc, tag }, i) => (
        <div key={i} className={`flex-1 group animate-fade-in-up delay-${(i + 3) * 100}`}>
          <div className="rounded-2xl overflow-hidden mb-5 relative">
            <img src={img} alt={title} className="w-full h-[380px] object-cover" />
            <div className="absolute top-4 left-4 px-3 py-1 bg-slide-gold/90 rounded-full text-sm font-semibold text-slide-bg">
              {tag}
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-lg text-slide-gray-200">{desc}</p>
        </div>
      ))}
    </div>
  </SlideLayout>
);
