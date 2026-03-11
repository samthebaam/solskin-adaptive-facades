import { SlideLayout } from "../SlideLayout";
import actuator from "@/assets/slides/actuator.jpg";

export const Slide06Actuator = () => (
  <SlideLayout>
    <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
      Core Technology
    </p>
    <h2 className="font-display text-5xl leading-tight mb-12 animate-fade-in-up">
      The Soft Robotic <span className="text-slide-gold">Actuator</span>
    </h2>

    <div className="flex gap-16 items-start">
      {/* Image */}
      <div className="w-[580px] shrink-0 animate-scale-in delay-200">
        <div className="rounded-2xl overflow-hidden mb-6">
          <img src={actuator} alt="Soft robotic actuator" className="w-full h-[450px] object-cover" />
        </div>
        <div className="flex gap-4">
          <div className="flex-1 p-4 bg-slide-gray-600 rounded-xl text-center">
            <p className="text-slide-gold font-bold text-xl">~90°</p>
            <p className="text-sm text-slide-gray-200">Vertical movement</p>
          </div>
          <div className="flex-1 p-4 bg-slide-gray-600 rounded-xl text-center">
            <p className="text-slide-gold font-bold text-xl">~120°</p>
            <p className="text-sm text-slide-gray-200">Horizontal movement</p>
          </div>
          <div className="flex-1 p-4 bg-slide-gray-600 rounded-xl text-center">
            <p className="text-slide-gold font-bold text-xl">2-axis</p>
            <p className="text-sm text-slide-gray-200">Degrees of freedom</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="flex-1 space-y-8 animate-fade-in-up delay-300">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">How it works</h3>
          <p className="text-xl text-slide-gray-100 leading-relaxed">
            The actuator uses <span className="text-slide-gold font-semibold">rubber bellows</span>. By inflating different chambers with different pressures, the actuator bends and moves the attached solar panel.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Key advantages</h3>
          {[
            "Very few rigid moving parts",
            "Dramatically reduced mechanical wear",
            "Simple and reliable design",
            "Easy to manufacture at scale",
            "Components replaceable without special tools",
            "~1% energy consumption for own operation",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-slide-gold shrink-0" />
              <span className="text-lg text-slide-gray-100">{item}</span>
            </div>
          ))}
        </div>

        <div className="p-5 border border-slide-gold/30 rounded-xl bg-slide-gold/5">
          <p className="text-xl text-slide-gold font-display italic">
            The technological breakthrough that made an adaptive facade possible.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);
