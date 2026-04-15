/* eslint-disable react-refresh/only-export-components */

import { Fragment, type ComponentType, type ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CircleHelp,
  Clock3,
  Factory,
  Hammer,
  MoveRight,
  ShieldCheck,
  Ship,
  TriangleAlert,
} from "lucide-react";
import { SlideLayout } from "./SlideLayout";
import solskinLogo from "@/assets/slides/solskin-logo.png";
import ethLab from "@/assets/slides/eth-lab.jpg";
import installationHero from "@/assets/slides/installation-1.jpg";
import installationClose from "@/assets/slides/installation-2.jpg";
import kellerRender from "@/assets/slides/keller-render.jpg";
import unitDiagram from "@/assets/slides/unit-diagram.jpg";
import solskinPanels from "@/assets/slides/solskin-panels.jpg";
import actuatorCloseup from "@/assets/slides/actuator-closeup.jpg";

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="mb-4 text-xl uppercase tracking-[0.28em] text-slide-gold animate-fade-in">{children}</p>
);

const Title = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h2 className={`font-display text-5xl leading-tight animate-fade-in-up ${className}`}>{children}</h2>
);

const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-sm ${className}`}>
    {children}
  </div>
);

const ListItem = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start gap-4 text-[28px] leading-[1.45] text-slide-gray-100">
    <span className="mt-[12px] h-[8px] w-[8px] rounded-full bg-slide-gold" />
    <span>{children}</span>
  </li>
);

const CompactListItem = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start gap-3 text-[22px] leading-[1.38] text-slide-gray-100">
    <span className="mt-[10px] h-[7px] w-[7px] rounded-full bg-slide-gold" />
    <span>{children}</span>
  </li>
);

const Tag = ({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "muted" | "warn" }) => {
  const tones = {
    default: "border-slide-gold/40 bg-slide-gold/10 text-slide-gold-light",
    muted: "border-white/10 bg-white/[0.03] text-slide-gray-200",
    warn: "border-amber-500/30 bg-amber-500/10 text-amber-200",
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-4 py-2 text-[18px] font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
};

const SectionDivider = () => (
  <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
);

const SupplyChainSlide01Title = () => (
  <SlideLayout noPadding>
    <div className="flex h-full w-full">
      <div className="flex w-[54%] flex-col justify-between p-[80px]">
        <div>
          <img src={solskinLogo} alt="Solskin" className="mb-5 h-[52px]" />
          <p className="text-[22px] italic leading-[1.45] text-slide-gold font-display">
            Industrializing facade delivery
            <br />
            for global deployment
          </p>
        </div>

        <div className="animate-fade-in-up">
          <p className="mb-5 text-[22px] uppercase tracking-[0.28em] text-slide-gray-300">
            Supply Chain & Production Strategy
          </p>
          <h1 className="font-display text-6xl leading-[1.04]">
            Container <span className="text-slide-gold">-&gt;</span> Spoke
            <br />
            <span className="text-slide-gold">Model</span>
          </h1>
          <p className="mt-8 max-w-[760px] text-[34px] leading-[1.35] text-slide-gray-100">
            We move risk from site to factory by shipping a pre-resolved facade system, not a loose collection of parts.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
          <Tag>Fragmented supply chain -&gt; controlled system</Tag>
          <Tag tone="muted">China hub + local spoke</Tag>
          <Tag tone="muted">April 2026</Tag>
        </div>
      </div>

      <div className="relative h-full w-[46%] overflow-hidden">
        <img src={installationHero} alt="Solskin installation" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slide-bg via-slide-bg/25 to-transparent" />
        <div className="absolute bottom-[72px] left-[52px] right-[52px] animate-fade-in-up delay-300">
          <Card className="p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <p className="text-[18px] uppercase tracking-[0.24em] text-slide-gray-300">Contractor Lens</p>
            <p className="mt-4 text-[30px] leading-[1.35] text-slide-gray-100">
              Reduce interfaces. Standardize execution. Keep the building interface as the only local variable.
            </p>
          </Card>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const SupplyChainSlide02CoreMessage = () => (
  <SlideLayout>
    <Eyebrow>Our Evolution</Eyebrow>
    <Title>
      From prototype to <span className="text-slide-gold">industrial system</span>
    </Title>

    <p className="mt-6 max-w-[1260px] text-[27px] leading-[1.38] text-slide-gray-200 animate-fade-in delay-200">
      This was not a theoretical redesign. Each project exposed the next production bottleneck and forced the model to mature.
    </p>

    <div className="mt-12 grid grid-cols-[1fr_90px_1fr_90px_1fr] items-center gap-5 animate-fade-in-up delay-300">
      {[
        {
          phase: "Phase 1",
          title: "Manual Assembly",
          context: "ETH / Schenkel",
          bullets: ["Full system assembled in-house", "High flexibility", "Low scalability"],
        },
        {
          phase: "Phase 2",
          title: "Partial Industrialization",
          context: "KELLER",
          bullets: ["Actuator testing rig", "Supplier-level quality checks", "Distributed production"],
        },
        {
          phase: "Phase 3",
          title: "Industrial System",
          context: "REMNEX",
          bullets: ["Centralized production hub", "Containerized KIT delivery", "Standardized global assembly"],
        },
      ].map((item, index) => (
        <Fragment key={item.phase}>
          <Card className={`h-[360px] p-8 ${index === 2 ? "border-slide-gold/30 bg-slide-gold/[0.08]" : ""}`}>
            <p className={`text-[18px] uppercase tracking-[0.22em] ${index === 2 ? "text-slide-gold-light" : "text-slide-gray-300"}`}>
              {item.phase}
            </p>
            <p className="mt-4 text-[36px] font-semibold leading-[1.12] text-slide-gray-100">{item.title}</p>
            <p className="mt-3 text-[24px] text-slide-gold">{item.context}</p>
            <ul className="mt-8 space-y-4">
              {item.bullets.map((bullet) => (
                <CompactListItem key={bullet}>{bullet}</CompactListItem>
              ))}
            </ul>
          </Card>
          {index < 2 ? (
            <div className="flex justify-center">
              <ArrowRight className="h-14 w-14 text-slide-gold" />
            </div>
          ) : null}
        </Fragment>
      ))}
    </div>

    <div className="mt-10 flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.03] px-8 py-5 text-[24px] text-slide-gray-200 animate-fade-in delay-400">
      <p>The solution became inevitable because the operating model kept revealing the same constraint: interfaces.</p>
      <Tag>Evolution, not theory</Tag>
    </div>
  </SlideLayout>
);

const SupplyChainSlide03Problem = () => (
  <SlideLayout noPadding>
    <div className="grid h-full w-full grid-cols-[0.88fr_1.12fr]">
      <div className="relative overflow-hidden">
        <img src={ethLab} alt="ETH prototype facade" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slide-bg/18 to-slide-bg" />
        <div className="absolute bottom-[70px] left-[60px] right-[60px]">
          <Card className="max-w-[520px] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">ETH / Schenkel</p>
            <p className="mt-3 text-[28px] leading-[1.3] text-slide-gray-100">
              Full system integration happened internally, with engineering directly embedded in assembly.
            </p>
          </Card>
        </div>
      </div>

      <div className="flex flex-col justify-between p-[80px]">
        <div>
          <Eyebrow>Phase 1</Eyebrow>
          <Title>
            Manual <span className="text-slide-gold">Assembly</span>
          </Title>
          <p className="mt-6 text-[33px] leading-[1.28] text-slide-gray-100">Full control, low scalability</p>
        </div>

        <Card className="p-8 animate-fade-in-up delay-200">
          <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">What worked</p>
          <ul className="mt-6 space-y-4">
            <CompactListItem>Assembly done internally at ETH / Schenkel</CompactListItem>
            <CompactListItem>Direct integration of all components</CompactListItem>
            <CompactListItem>High engineering involvement and rapid learning</CompactListItem>
          </ul>
        </Card>

        <Card className="p-8 animate-fade-in-up delay-300">
          <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gold-light">Limitations</p>
          <ul className="mt-6 space-y-4">
            <CompactListItem>Not scalable beyond individual projects</CompactListItem>
            <CompactListItem>High labor intensity</CompactListItem>
            <CompactListItem>Not yet repeatable across installations</CompactListItem>
          </ul>
        </Card>

        <p className="animate-fade-in-up delay-400 text-[34px] leading-[1.3] text-slide-gold font-display italic">
          “We proved the system works, but not at scale.”
        </p>
      </div>
    </div>
  </SlideLayout>
);

const SupplyChainSlide04Insight = () => (
  <SlideLayout noPadding>
    <div className="grid h-full w-full grid-cols-[1.08fr_0.92fr]">
      <div className="flex flex-col justify-between p-[80px]">
        <div>
          <Eyebrow>Phase 2</Eyebrow>
          <Title className="max-w-[900px]">
            Partial Industrialization <span className="text-slide-gold">(KELLER)</span>
          </Title>
          <p className="mt-6 text-[33px] leading-[1.28] text-slide-gray-100">First step toward structure</p>
        </div>

        <Card className="p-8 animate-fade-in-up delay-200">
          <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">What changed</p>
          <ul className="mt-6 space-y-4">
            <CompactListItem>Introduced actuator testing rig</CompactListItem>
            <CompactListItem>Defined QA at supplier level</CompactListItem>
            <CompactListItem>Distributed supply chain and project-based coordination</CompactListItem>
          </ul>
        </Card>

        <Card className="p-8 animate-fade-in-up delay-300">
          <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">Suppliers across</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {["Serbia", "Germany", "Austria", "Switzerland", "China"].map((country) => (
              <Tag key={country}>{country}</Tag>
            ))}
          </div>
          <p className="mt-6 text-[24px] leading-[1.4] text-slide-gray-200">
            Production became more structured, but integration and ownership were still distributed across the chain.
          </p>
        </Card>
      </div>

      <div className="relative overflow-hidden">
        <img src={kellerRender} alt="KELLER building render" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slide-bg/10 to-slide-bg" />
        <div className="absolute bottom-[72px] left-[52px] right-[52px]">
          <Card className="p-7 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gold-light">KELLER was the turning point</p>
            <p className="mt-3 text-[28px] leading-[1.3] text-slide-gray-100">
              Working components existed, but the production model still depended on too many suppliers and interfaces.
            </p>
          </Card>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const SupplyChainSlide05Approach = () => (
  <SlideLayout>
    <Eyebrow>KELLER Turning Point</Eyebrow>
    <Title>
      Coordination became the <span className="text-slide-gold">bottleneck</span>
    </Title>

    <div className="mt-14 grid grid-cols-[0.96fr_1.04fr] gap-8">
      <div className="relative pl-12 animate-fade-in-up delay-200">
        <div className="absolute left-[18px] top-[12px] bottom-[12px] w-px bg-gradient-to-b from-slide-gold/40 via-white/10 to-white/5" />
        {[
          "Multiple suppliers created complex interfaces.",
          "Integration effort shifted to site.",
          "Coordination overhead increased sharply.",
          "Risk of mismatches, delays and rework rose with every handoff.",
        ].map((step, index) => (
          <div key={step} className="relative mb-6 last:mb-0">
            <div className="absolute -left-[48px] top-[26px] flex h-8 w-8 items-center justify-center rounded-full border border-slide-gold/40 bg-slide-gold/10 text-[15px] font-semibold text-slide-gold">
              {index + 1}
            </div>
            <Card className="p-7">
              <p className="text-[29px] leading-[1.34] text-slide-gray-100">{step}</p>
            </Card>
          </div>
        ))}
      </div>

      <div className="space-y-6 animate-scale-in delay-300">
        <Card className="p-8">
          <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">What we learned</p>
          <p className="mt-5 text-[40px] leading-[1.16] text-slide-gray-100">
            Production worked, but <span className="text-slide-gold">integration was the problem.</span>
          </p>
        </Card>

        <Card className="border-slide-gold/30 bg-slide-gold/[0.08] p-8">
          <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gold-light">Key insight</p>
          <p className="mt-5 text-[40px] leading-[1.16] text-slide-gray-100">
            We didn’t need better suppliers. We needed fewer interfaces.
          </p>
        </Card>

        <Card className="p-8">
          <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">Next question</p>
          <p className="mt-5 text-[31px] leading-[1.35] text-slide-gray-100">
            How do we remove interfaces entirely, instead of managing them more carefully?
          </p>
        </Card>
      </div>
    </div>
  </SlideLayout>
);

const SupplyChainSlide06FullIndustrialization = () => (
  <SlideLayout>
    <Eyebrow>Phase 3</Eyebrow>
    <Title>
      Full Industrialization <span className="text-slide-gold">(REMNEX)</span>
    </Title>

    <p className="mt-6 max-w-[1160px] text-[28px] leading-[1.38] text-slide-gray-200 animate-fade-in delay-200">
      Next step: Hub -&gt; Container -&gt; Spoke. Remove interfaces by moving coordination and system resolution upstream into the factory.
    </p>

    <div className="mt-14 grid grid-cols-[0.95fr_0.22fr_0.95fr_0.22fr_0.95fr] items-center gap-6 animate-fade-in-up delay-300">
      <Card className="h-[460px] p-8">
        <div className="flex items-center gap-4">
          <Factory className="h-11 w-11 text-slide-gold" />
          <p className="text-[32px] font-semibold text-slide-gray-100">Hub</p>
        </div>
        <p className="mt-6 text-[25px] leading-[1.42] text-slide-gray-200">
          Centralized production, sourcing, QA and preassembly in one operating center.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Tag>Centralized production</Tag>
          <Tag tone="muted">System-level QA</Tag>
          <Tag tone="muted">Single ownership zone</Tag>
        </div>
      </Card>

      <div className="flex justify-center">
        <Ship className="h-16 w-16 text-slide-gold" />
      </div>

      <Card className="h-[460px] border-slide-gold/30 bg-slide-gold/[0.08] p-8">
        <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gold-light">Container</p>
        <p className="mt-6 text-[38px] leading-[1.15] text-slide-gray-100">Pre-resolved system (KIT)</p>
        <ul className="mt-8 space-y-4">
          <CompactListItem>Containerized delivery of coordinated components</CompactListItem>
          <CompactListItem>Precut, preassembled and install-sequenced parts</CompactListItem>
          <CompactListItem>System arrives resolved except for building interface</CompactListItem>
        </ul>
      </Card>

      <div className="flex justify-center">
        <Hammer className="h-16 w-16 text-slide-gold" />
      </div>

      <Card className="h-[460px] p-8">
        <div className="flex items-center gap-4">
          <Building2 className="h-11 w-11 text-slide-gold" />
          <p className="text-[32px] font-semibold text-slide-gray-100">Spoke</p>
        </div>
        <p className="mt-6 text-[25px] leading-[1.42] text-slide-gray-200">
          Local standardized assembly and installation, with only project-specific building interfaces handled on site.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Tag tone="muted">Local standardized assembly</Tag>
          <Tag tone="muted">Building anchors stay local</Tag>
          <Tag>Repeatable global deployment</Tag>
        </div>
      </Card>
    </div>

    <div className="mt-10 flex items-center justify-between rounded-[28px] border border-white/10 bg-white/[0.03] px-10 py-7 animate-fade-in delay-400">
      <p className="text-[30px] leading-[1.35] text-slide-gray-100">Complexity moved from site to factory.</p>
      <Tag>Hub -&gt; Container -&gt; Spoke</Tag>
    </div>
  </SlideLayout>
);

const SupplyChainSlide06Unit = () => (
  <SlideLayout>
    <Eyebrow>System Breakdown</Eyebrow>
    <Title>
      What is a <span className="text-slide-gold">Solskin unit</span>?
    </Title>

    <div className="mt-14 grid grid-cols-[0.88fr_1.12fr] gap-10">
      <div className="animate-fade-in-up delay-200">
        <Card className="p-10">
          <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">Architecture</p>
          <ul className="mt-8 space-y-5">
            <ListItem>Module = panel + actuator</ListItem>
            <ListItem>RodNet support structure</ListItem>
            <ListItem>Frame with integrated manifolds</ListItem>
            <ListItem>Control layer + optimizers</ListItem>
          </ul>
        </Card>

        <div className="mt-6 grid grid-cols-1 gap-6">
          <Card className="p-8">
            <p className="text-[18px] uppercase tracking-[0.2em] text-slide-gray-300">Standardized elements</p>
            <p className="mt-4 text-[30px] leading-[1.35] text-slide-gray-100">
              Panels, actuators, cables, manifolds and many frame parts can be repeated across projects.
            </p>
          </Card>
          <Card className="p-8">
            <p className="text-[18px] uppercase tracking-[0.2em] text-slide-gray-300">Project-specific elements</p>
            <p className="mt-4 text-[30px] leading-[1.35] text-slide-gray-100">
              Geometry, frame sizing and building anchors adapt to facade conditions and local code requirements.
            </p>
          </Card>
        </div>
      </div>

      <div className="grid grid-rows-[1fr_220px] gap-6 animate-scale-in delay-300">
        <Card className="flex items-center justify-center overflow-hidden bg-white p-8">
          <img src={unitDiagram} alt="Exploded Solskin unit diagram" className="max-h-full max-w-full object-contain" />
        </Card>

        <div className="grid grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <img src={solskinPanels} alt="Solskin panels close-up" className="h-full w-full object-cover" />
          </Card>
          <Card className="overflow-hidden">
            <img src={actuatorCloseup} alt="Solskin actuator close-up" className="h-full w-full object-cover" />
          </Card>
        </div>
      </div>
    </div>
  </SlideLayout>
);

const SupplyChainSlide07Kit = () => (
  <SlideLayout>
    <Eyebrow>KIT Concept</Eyebrow>
    <Title>
      The KIT is the <span className="text-slide-gold">resolved system package</span>
    </Title>

    <div className="mt-14 grid grid-cols-[1fr_1fr] gap-8 animate-fade-in-up delay-200">
      <Card className="p-10">
        <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gold-light">Included in the container</p>
        <div className="mt-8 flex flex-wrap gap-4">
          {[
            "Precut tubes",
            "Precut cables",
            "Preassembled actuators",
            "Modules: panel + actuator",
            "Integrated frame components",
            "Manifolds and system subassemblies",
          ].map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <div className="mt-10 rounded-[24px] border border-white/10 bg-white/[0.03] p-7">
          <p className="text-[28px] leading-[1.35] text-slide-gray-100">
            The container should arrive as a coordinated system, not as a puzzle to be solved on site.
          </p>
        </div>
      </Card>

      <Card className="p-10">
        <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">Kept local</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Tag tone="muted">Building-specific anchors</Tag>
          <Tag tone="muted">Standard fasteners</Tag>
          <Tag tone="muted">Local lifting / access gear</Tag>
          <Tag tone="muted">Installation labor</Tag>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            { step: "1", title: "Unpack", desc: "Project-specific kit is sequenced by installation zone." },
            { step: "2", title: "Assemble", desc: "Spoke completes final assembly with local hardware only." },
            { step: "3", title: "Install", desc: "Partner mounts a known system with minimal open interfaces." },
          ].map((item) => (
            <div key={item.step} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gold">{item.step}</p>
              <p className="mt-3 text-[28px] font-semibold text-slide-gray-100">{item.title}</p>
              <p className="mt-3 text-[21px] leading-[1.45] text-slide-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>

    <div className="mt-10 flex items-center justify-between animate-fade-in delay-400">
      <p className="text-[32px] leading-[1.35] text-slide-gray-100">Fast, simplified assembly anywhere the building interface can be managed locally.</p>
      <Tag>Pre-resolved except for the building interface</Tag>
    </div>
  </SlideLayout>
);

const SupplyChainSlide08Process = () => (
  <SlideLayout>
    <Eyebrow>Execution Flow</Eyebrow>
    <Title>
      End-to-end process from <span className="text-slide-gold">definition to installation</span>
    </Title>

    <p className="mt-6 max-w-[1180px] text-[25px] leading-[1.38] text-slide-gray-200 animate-fade-in delay-200">
      Critical control point: QA must happen before shipping, because post-container correction is slow and expensive.
    </p>

    <div className="mt-8 grid grid-cols-3 gap-5 animate-fade-in-up delay-300">
      {[
        ["01", "Project definition", "Requirements and geometry enter ERP (Odoo)."],
        ["02", "Component sourcing", "China supplier network covers most repeatable parts."],
        ["03", "Production", "Panels, metal parts and bellows manufactured in parallel."],
        ["04", "Preassembly", "Actuators and subsystem assemblies are prepared before kitting."],
        ["05", "QA", "Component checks plus system-level validation before packing."],
        ["06", "Containerization", "Install-zone sequencing and packing discipline protect site flow."],
        ["07", "Shipping", "Container lead time is assumed at roughly 12 weeks."],
        ["08", "Spoke assembly", "Local team closes the last assembly tasks and project interfaces."],
        ["09", "Installation", "Partner installs a known package instead of resolving open questions live."],
      ].map(([step, title, desc]) => (
        <Card key={step} className="min-h-[190px] p-7">
          <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gold">{step}</p>
          <p className="mt-3 text-[28px] font-semibold leading-[1.2] text-slide-gray-100">{title}</p>
          <p className="mt-3 text-[21px] leading-[1.4] text-slide-gray-200">{desc}</p>
        </Card>
      ))}
    </div>
  </SlideLayout>
);

const SupplyChainSlide09China = () => (
  <SlideLayout>
    <Eyebrow>Initial Hub Logic</Eyebrow>
    <Title>
      Why start with a <span className="text-slide-gold">China production hub</span>?
    </Title>

    <div className="mt-14 grid grid-cols-[1fr_0.95fr] gap-8">
      <div className="grid grid-cols-2 gap-6 animate-fade-in-up delay-200">
        {[
          { title: "Panels already sourced there", desc: "The hub sits close to a core cost driver that is already in the current supply chain." },
          { title: "High supplier density", desc: "Metalwork, actuators and supporting fabrication can be coordinated in one ecosystem." },
          { title: "Fast tooling + response time", desc: "The model benefits from short iteration loops during early industrialization." },
          { title: "Container is required anyway", desc: "Long-distance shipping exists in the baseline, so consolidation creates leverage rather than new complexity." },
        ].map((item) => (
          <Card key={item.title} className="min-h-[240px] p-8">
            <p className="text-[18px] uppercase tracking-[0.2em] text-slide-gray-300">{item.title}</p>
            <p className="mt-4 text-[28px] leading-[1.4] text-slide-gray-100">{item.desc}</p>
          </Card>
        ))}
      </div>

      <Card className="p-10 animate-scale-in delay-300">
        <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">Current working assumption on cost</p>
        <div className="mt-10 space-y-8">
          {[
            { label: "Metal parts", value: "-20% to -40%", width: "65%" },
            { label: "Actuators", value: "significantly lower", width: "78%" },
            { label: "Supplier coordination", value: "higher density", width: "72%" },
            { label: "Shipping burden", value: "already embedded", width: "28%" },
          ].map((item) => (
            <div key={item.label}>
              <div className="mb-3 flex items-center justify-between text-[24px] text-slide-gray-100">
                <span>{item.label}</span>
                <span className="text-slide-gold">{item.value}</span>
              </div>
              <div className="h-4 rounded-full bg-white/5">
                <div className="h-full rounded-full bg-gradient-to-r from-slide-gold to-slide-gold-light" style={{ width: item.width }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[24px] border border-slide-gold/25 bg-slide-gold/[0.08] p-7">
          <p className="text-[30px] leading-[1.35] text-slide-gray-100">
            At current scale, China appears to minimize total system cost and coordination effort better than a multi-region setup.
          </p>
        </div>
      </Card>
    </div>
  </SlideLayout>
);

const SupplyChainSlide10Value = () => (
  <SlideLayout>
    <Eyebrow>Value Proposition</Eyebrow>
    <Title>
      What improves versus <span className="text-slide-gold">traditional facade delivery</span>?
    </Title>

    <div className="mt-16 grid grid-cols-3 gap-8 animate-fade-in-up delay-200">
      {[
        {
          title: "Cost",
          body: [
            "Lean sourcing from a dense supplier base",
            "Less rework caused by interface mismatch",
            "Lower total production cost at system level",
          ],
        },
        {
          title: "Time",
          body: [
            "Parallel production of panels, metal and bellows",
            "Faster installation because parts arrive sequenced",
            "Fewer site-driven delays and decision loops",
          ],
        },
        {
          title: "Complexity",
          body: [
            "10+ suppliers -> one system package",
            "Distributed QA -> centralized QA",
            "Open coordination -> controlled handoff",
          ],
        },
      ].map((column) => (
        <Card key={column.title} className="min-h-[480px] p-10">
          <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gold">{column.title}</p>
          <div className="mt-8 space-y-6">
            {column.body.map((line) => (
              <div key={line} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-[29px] leading-[1.35] text-slide-gray-100">{line}</p>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>

    <div className="mt-10 flex items-center justify-between rounded-[28px] border border-white/10 bg-white/[0.03] px-10 py-7 animate-fade-in delay-400">
      <p className="text-[30px] leading-[1.35] text-slide-gray-100">The model works when the savings from cleaner execution exceed the cost of central coordination.</p>
      <Tag>Execution efficiency is the value engine</Tag>
    </div>
  </SlideLayout>
);

const SupplyChainSlide11Economics = () => (
  <SlideLayout>
    <Eyebrow>LCOE Impact</Eyebrow>
    <Title>
      Shipping is visible, but its cost impact is <span className="text-slide-gold">small</span>
    </Title>

    <div className="mt-14 grid grid-cols-[1.05fr_0.95fr] gap-8">
      <Card className="p-10 animate-fade-in-up delay-200">
        <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">Illustrative cost sensitivity by bucket</p>
        <div className="mt-10 space-y-8">
          {[
            { label: "Panels", value: "~10%", width: "42%", tone: "from-[#7aa4d8] to-[#4c6f9d]" },
            { label: "Structure", value: "~20%", width: "78%", tone: "from-[#d2a156] to-[#b98437]" },
            { label: "Actuators", value: "~10%", width: "42%", tone: "from-[#7c8797] to-[#5e6875]" },
            { label: "Installation", value: "~20%", width: "80%", tone: "from-[#b0b7c3] to-[#8d95a3]" },
            { label: "Logistics", value: "~1-2%", width: "12%", tone: "from-[#f5d7a7] to-[#d2a156]" },
          ].map((item) => (
            <div key={item.label}>
              <div className="mb-3 flex items-center justify-between text-[24px] text-slide-gray-100">
                <span>{item.label}</span>
                <span className="text-slide-gold">{item.value}</span>
              </div>
              <div className="h-5 rounded-full bg-white/5">
                <div className={`h-full rounded-full bg-gradient-to-r ${item.tone}`} style={{ width: item.width }} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[20px] text-slide-gray-300">
          Working estimate only. Other cost buckets omitted for clarity.
        </p>
      </Card>

      <div className="space-y-6 animate-scale-in delay-300">
        <Card className="p-8">
          <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gold-light">Key insight</p>
          <p className="mt-4 text-[38px] leading-[1.22] text-slide-gray-100">
            Global shipping has limited LCOE impact compared with installation, failure rate and deployment speed.
          </p>
        </Card>

        <Card className="p-8">
          <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">Main value levers</p>
          <div className="mt-6 space-y-4">
            {[
              "Lower installation effort",
              "Lower failure and rework rate",
              "Faster deployment / earlier system value creation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-4">
                <CheckCircle2 className="h-8 w-8 text-slide-gold" />
                <p className="text-[26px] text-slide-gray-100">{item}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="overflow-hidden">
          <img src={installationClose} alt="Facade installation close-up" className="h-[265px] w-full object-cover" />
        </Card>
      </div>
    </div>
  </SlideLayout>
);

const SupplyChainSlide12Strengths = () => (
  <SlideLayout>
    <Eyebrow>Strengths</Eyebrow>
    <Title>
      Why this model can <span className="text-slide-gold">scale</span>
    </Title>

    <div className="mt-14 grid grid-cols-3 gap-6 animate-fade-in-up delay-200">
      {[
        { icon: ShieldCheck, title: "Centralized QA", desc: "Higher reliability because the system is checked before it travels." },
        { icon: MoveRight, title: "Reduced interface risk", desc: "Fewer handoffs means fewer tolerance and ownership failures." },
        { icon: Factory, title: "Scalable production", desc: "The hub can standardize repeatable work and build learning curves." },
        { icon: Ship, title: "Location-independent deployment", desc: "Containerization decouples production from final geography." },
        { icon: Clock3, title: "Time advantage", desc: "Site teams install a prepared package instead of solving live integration." },
        { icon: Building2, title: "Simplified procurement", desc: "The contractor buys a system boundary, not a supplier puzzle." },
      ].map(({ icon: Icon, title, desc }) => (
        <Card key={title} className="min-h-[245px] p-8">
          <Icon className="h-11 w-11 text-slide-gold" />
          <p className="mt-6 text-[31px] font-semibold leading-[1.2] text-slide-gray-100">{title}</p>
          <p className="mt-4 text-[23px] leading-[1.45] text-slide-gray-200">{desc}</p>
        </Card>
      ))}
    </div>

    <div className="mt-10 rounded-[28px] border border-slide-gold/25 bg-slide-gold/[0.08] px-10 py-7 animate-fade-in delay-400">
      <p className="text-[34px] leading-[1.35] text-slide-gray-100">This is the industrialization of facade systems: more repeatability in the factory, less improvisation on site.</p>
    </div>
  </SlideLayout>
);

const SupplyChainSlide13Risks = () => (
  <SlideLayout>
    <Eyebrow>Weaknesses / Risks</Eyebrow>
    <Title>
      Where the model is <span className="text-slide-gold">exposed</span>
    </Title>

    <div className="mt-14 grid grid-cols-[1fr_1fr] gap-8 animate-fade-in-up delay-200">
      <div className="space-y-6">
        {[
          { title: "Supply chain concentration", desc: "China dependency and panel sourcing concentration increase geopolitical and continuity risk." },
          { title: "Container delay sensitivity", desc: "Shipping slippage can cascade directly into installation windows and crane bookings." },
          { title: "Installation bottleneck", desc: "The spoke works only if local partners can execute the system consistently." },
        ].map((item) => (
          <Card key={item.title} className="p-8">
            <div className="flex items-center gap-4">
              <TriangleAlert className="h-10 w-10 text-amber-300" />
              <p className="text-[30px] font-semibold text-slide-gray-100">{item.title}</p>
            </div>
            <p className="mt-4 text-[24px] leading-[1.45] text-slide-gray-200">{item.desc}</p>
          </Card>
        ))}
      </div>

      <div className="space-y-6">
        {[
          { title: "System QA burden", desc: "Pre-shipment validation must be robust enough to catch integrated failures before they travel." },
          { title: "Project size economics", desc: "Small projects may not absorb hub overhead and container logistics efficiently." },
          { title: "Partner dependency", desc: "A weak installer can still damage schedule, quality and perception in the market." },
        ].map((item) => (
          <Card key={item.title} className="p-8">
            <div className="flex items-center gap-4">
              <TriangleAlert className="h-10 w-10 text-amber-300" />
              <p className="text-[30px] font-semibold text-slide-gray-100">{item.title}</p>
            </div>
            <p className="mt-4 text-[24px] leading-[1.45] text-slide-gray-200">{item.desc}</p>
          </Card>
        ))}
      </div>
    </div>

    <div className="mt-10 flex items-center justify-between rounded-[28px] border border-white/10 bg-white/[0.03] px-10 py-7 animate-fade-in delay-400">
      <p className="text-[30px] leading-[1.35] text-slide-gray-100">Most risks are manageable, but only if installation and QA are treated as core capabilities, not outsourced afterthoughts.</p>
      <Tag tone="warn">Main bottleneck today: installation quality</Tag>
    </div>
  </SlideLayout>
);

const SupplyChainSlide14Questions = () => (
  <SlideLayout>
    <Eyebrow>Open Questions</Eyebrow>
    <Title>
      Decisions before the model <span className="text-slide-gold">scales globally</span>
    </Title>

    <p className="mt-6 max-w-[1260px] text-[25px] leading-[1.36] text-slide-gray-200 animate-fade-in delay-200">
      Core premise: move risk from site to factory. The remaining question is how much of that factory capability must be duplicated over time.
    </p>

    <div className="mt-8 grid grid-cols-[1fr_1fr] gap-6">
      <Card className="p-8 animate-fade-in-up delay-200">
        <div className="flex items-center gap-4">
          <CircleHelp className="h-10 w-10 text-slide-gold" />
          <p className="text-[32px] font-semibold text-slide-gray-100">Strategic decisions</p>
        </div>
        <div className="mt-8 space-y-6">
          {[
            "When does a second hub become necessary? Current thinking: around 10,000 m² / year.",
            "Where should redundancy sit first: Europe, Middle East or another region?",
            "How much QA must be completed before shipping to keep site risk acceptable?",
            "How standardized can installation become across countries, partners and codes?",
          ].map((item) => (
            <div key={item} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[24px] leading-[1.36] text-slide-gray-100">{item}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-8 animate-scale-in delay-300">
        <div className="flex items-center gap-4">
          <CircleHelp className="h-10 w-10 text-slide-gold" />
          <p className="text-[32px] font-semibold text-slide-gray-100">Advisor input wanted</p>
        </div>
        <div className="mt-8 space-y-6">
          {[
            "Where do you see the biggest execution risk in this setup?",
            "What would fail first on site if the factory package is under-resolved?",
            "What level of preassembly is optimal before transport becomes inefficient?",
            "Would Tier 1 contractors buy this as a package, or still force fragmentation?",
          ].map((item) => (
            <div key={item} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[24px] leading-[1.36] text-slide-gray-100">{item}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </SlideLayout>
);

export const supplyChainSlides: ComponentType[] = [
  SupplyChainSlide01Title,
  SupplyChainSlide02CoreMessage,
  SupplyChainSlide03Problem,
  SupplyChainSlide04Insight,
  SupplyChainSlide05Approach,
  SupplyChainSlide06FullIndustrialization,
  SupplyChainSlide06Unit,
  SupplyChainSlide07Kit,
  SupplyChainSlide08Process,
  SupplyChainSlide09China,
  SupplyChainSlide10Value,
  SupplyChainSlide11Economics,
  SupplyChainSlide12Strengths,
  SupplyChainSlide13Risks,
  SupplyChainSlide14Questions,
];
