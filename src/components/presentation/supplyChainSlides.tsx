/* eslint-disable react-refresh/only-export-components */

import type { ComponentType, ReactNode } from "react";
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
import installationHero from "@/assets/slides/installation-1.jpg";
import installationClose from "@/assets/slides/installation-2.jpg";
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
    <Eyebrow>Core Message</Eyebrow>
    <Title className="max-w-[1700px]">
      We turn facade construction into a <span className="text-slide-gold">shippable product</span>
    </Title>

    <p className="mt-6 max-w-[1240px] text-[26px] leading-[1.35] text-slide-gray-200 animate-fade-in delay-200">
      Shift complexity away from the construction site and into a controlled production environment before the container leaves the factory.
    </p>

    <div className="mt-10 grid grid-cols-[1.1fr_100px_1.1fr_100px_1.1fr] items-center gap-5 animate-fade-in-up delay-300">
      <Card className="h-[300px] p-8">
        <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">Traditional delivery</p>
        <p className="mt-5 text-[34px] leading-[1.15] text-slide-gray-100">Complexity sits on site</p>
        <ul className="mt-6 space-y-3 text-[22px] leading-[1.35] text-slide-gray-100">
          <li className="flex items-start gap-3">
            <span className="mt-[10px] h-[7px] w-[7px] rounded-full bg-slide-gold" />
            <span>10+ suppliers across geographies</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-[10px] h-[7px] w-[7px] rounded-full bg-slide-gold" />
            <span>Interfaces solved during installation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-[10px] h-[7px] w-[7px] rounded-full bg-slide-gold" />
            <span>QA distributed across the chain</span>
          </li>
        </ul>
      </Card>

      <div className="flex justify-center">
        <ArrowRight className="h-14 w-14 text-slide-gold" />
      </div>

      <Card className="h-[300px] border-slide-gold/30 bg-slide-gold/[0.08] p-8">
        <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gold-light">Solskin production logic</p>
        <p className="mt-5 text-[34px] leading-[1.15] text-slide-gray-100">Complexity moves into the factory</p>
        <ul className="mt-6 space-y-3 text-[22px] leading-[1.35] text-slide-gray-100">
          <li className="flex items-start gap-3">
            <span className="mt-[10px] h-[7px] w-[7px] rounded-full bg-slide-gold" />
            <span>System-level pre-resolution</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-[10px] h-[7px] w-[7px] rounded-full bg-slide-gold" />
            <span>Containerized kitting</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-[10px] h-[7px] w-[7px] rounded-full bg-slide-gold" />
            <span>Single controlled system boundary</span>
          </li>
        </ul>
      </Card>

      <div className="flex justify-center">
        <ArrowRight className="h-14 w-14 text-slide-gold" />
      </div>

      <Card className="h-[300px] p-8">
        <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">Local spoke outcome</p>
        <p className="mt-5 text-[34px] leading-[1.15] text-slide-gray-100">Fast final assembly + installation</p>
        <ul className="mt-6 space-y-3 text-[22px] leading-[1.35] text-slide-gray-100">
          <li className="flex items-start gap-3">
            <span className="mt-[10px] h-[7px] w-[7px] rounded-full bg-slide-gold" />
            <span>Lower on-site uncertainty</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-[10px] h-[7px] w-[7px] rounded-full bg-slide-gold" />
            <span>Fewer coordination points</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-[10px] h-[7px] w-[7px] rounded-full bg-slide-gold" />
            <span>More repeatable deployment globally</span>
          </li>
        </ul>
      </Card>
    </div>

    <div className="mt-10 flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.03] px-8 py-5 text-[24px] text-slide-gray-200 animate-fade-in delay-400">
      <p>Key execution principle: solve uncertainty before the container leaves the factory.</p>
      <Tag>Factory-resolved, site-assembled</Tag>
    </div>
  </SlideLayout>
);

const SupplyChainSlide03Problem = () => (
  <SlideLayout>
    <Eyebrow>Industry Reality</Eyebrow>
    <Title>
      Facade delivery is still a <span className="text-slide-gold">fragmented risk stack</span>
    </Title>

    <div className="mt-14 grid grid-cols-[0.95fr_1.05fr] gap-10">
      <div className="grid grid-cols-2 gap-6 animate-fade-in-up delay-200">
        {[
          { label: "10+ suppliers", body: "Structure, panels, actuators, controls, fixings, logistics, installation and QA are split across companies." },
          { label: "Distributed QA", body: "Each supplier validates its own piece, but nobody owns the full system until site." },
          { label: "Interface-heavy", body: "Tolerance, sequencing and information gaps accumulate between every handoff." },
          { label: "Site = integration point", body: "The highest-risk activity happens in the least controlled environment." },
        ].map((item) => (
          <Card key={item.label} className="min-h-[255px] p-8">
            <p className="text-[18px] uppercase tracking-[0.2em] text-slide-gray-300">{item.label}</p>
            <p className="mt-5 text-[32px] leading-[1.25] text-slide-gray-100">{item.body}</p>
          </Card>
        ))}
      </div>

      <Card className="relative overflow-hidden p-10 animate-scale-in delay-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(210,161,86,0.16),transparent_60%)]" />
        <p className="relative text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">Where risk accumulates</p>

        <div className="relative mt-10 flex h-[520px] items-center justify-center">
          <div className="absolute left-[80px] top-[58px] rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-[22px] text-slide-gray-100">
            Panel supplier
          </div>
          <div className="absolute right-[72px] top-[76px] rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-[22px] text-slide-gray-100">
            Metal shop
          </div>
          <div className="absolute left-[34px] bottom-[156px] rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-[22px] text-slide-gray-100">
            Actuators
          </div>
          <div className="absolute right-[44px] bottom-[172px] rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-[22px] text-slide-gray-100">
            Controls
          </div>
          <div className="absolute left-[182px] bottom-[56px] rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-[22px] text-slide-gray-100">
            Logistics
          </div>
          <div className="absolute right-[160px] bottom-[46px] rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-[22px] text-slide-gray-100">
            Installer
          </div>

          <div className="absolute inset-0">
            {[
              "left-[265px] top-[110px] w-[370px] rotate-[22deg]",
              "right-[255px] top-[118px] w-[360px] -rotate-[22deg]",
              "left-[180px] bottom-[245px] w-[390px] -rotate-[10deg]",
              "right-[160px] bottom-[245px] w-[390px] rotate-[8deg]",
              "left-[320px] bottom-[140px] w-[220px] rotate-[68deg]",
              "right-[300px] bottom-[140px] w-[220px] -rotate-[66deg]",
            ].map((line) => (
              <div key={line} className={`absolute h-px bg-gradient-to-r from-transparent via-white/25 to-transparent ${line}`} />
            ))}
          </div>

          <div className="relative z-10 flex h-[260px] w-[260px] items-center justify-center rounded-full border border-rose-400/30 bg-rose-500/10 text-center shadow-[0_0_100px_rgba(244,63,94,0.15)]">
            <div>
              <p className="text-[20px] uppercase tracking-[0.22em] text-rose-200">Site</p>
              <p className="mt-4 text-[44px] leading-[1.15] text-slide-gray-100">Integration
                <br />
                point
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>

    <p className="mt-10 text-[34px] leading-[1.35] text-slide-gray-100 animate-fade-in-up delay-500">
      Result: delays, rework, cost overruns and quality escapes typically emerge where responsibility changes hands.
    </p>
  </SlideLayout>
);

const SupplyChainSlide04Insight = () => (
  <SlideLayout>
    <Eyebrow>Key Insight</Eyebrow>
    <Title>
      The problem is not components. It is <span className="text-slide-gold">interfaces.</span>
    </Title>

    <div className="mt-16 grid grid-cols-[0.9fr_1.1fr] gap-10">
      <Card className="p-10 animate-fade-in-up delay-200">
        <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">Where failures occur</p>
        <div className="mt-10 space-y-8">
          {[
            { title: "Between suppliers", desc: "Tolerances, incomplete documentation and ownership gaps." },
            { title: "During installation", desc: "Sequence changes, missing parts and low-fidelity problem solving." },
            { title: "At system integration", desc: "Mechanical, electrical and controls interfaces only validated late." },
          ].map((item) => (
            <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-[28px] font-semibold text-slide-gray-100">{item.title}</p>
              <p className="mt-3 text-[24px] leading-[1.45] text-slide-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-10 animate-scale-in delay-300">
        <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gray-300">Design response</p>
        <div className="mt-12 flex h-[500px] items-center justify-between gap-6">
          {[
            { title: "Optimize parts", tone: "text-slide-gray-300", fill: "bg-white/[0.04]" },
            { title: "Reduce interfaces", tone: "text-slide-gray-100", fill: "bg-slide-gold/15 border-slide-gold/30" },
            { title: "Control handoff", tone: "text-slide-gray-300", fill: "bg-white/[0.04]" },
          ].map((item, index) => (
            <div key={item.title} className="flex flex-1 flex-col items-center">
              <div className={`flex h-[370px] w-full items-center justify-center rounded-[28px] border border-white/10 ${item.fill}`}>
                <p className={`max-w-[220px] text-center text-[42px] leading-[1.15] ${item.tone}`}>{item.title}</p>
              </div>
              {index < 2 ? <MoveRight className="mt-8 h-12 w-12 text-slide-gold" /> : null}
            </div>
          ))}
        </div>
        <p className="mt-8 text-[30px] leading-[1.35] text-slide-gray-100">
          Goal: remove coordination points before they become site problems.
        </p>
      </Card>
    </div>
  </SlideLayout>
);

const SupplyChainSlide05Approach = () => (
  <SlideLayout>
    <Eyebrow>Our Approach</Eyebrow>
    <Title>
      Container <span className="text-slide-gold">-&gt;</span> Spoke production model
    </Title>

    <div className="mt-16 grid grid-cols-[0.95fr_0.22fr_0.95fr_0.22fr_0.95fr] items-center gap-6 animate-fade-in-up delay-200">
      <Card className="h-[500px] p-8">
        <div className="flex items-center gap-4">
          <Factory className="h-11 w-11 text-slide-gold" />
          <p className="text-[32px] font-semibold text-slide-gray-100">Central hub</p>
        </div>
        <p className="mt-6 text-[24px] leading-[1.45] text-slide-gray-200">China-based sourcing, production, preassembly, QA and kitting.</p>
        <div className="mt-8 space-y-4">
          <Tag>ERP-driven BOM</Tag>
          <Tag tone="muted">System-level QA</Tag>
          <Tag tone="muted">Single source package</Tag>
        </div>
      </Card>

      <div className="flex justify-center">
        <Ship className="h-16 w-16 text-slide-gold" />
      </div>

      <Card className="h-[500px] border-slide-gold/30 bg-slide-gold/[0.08] p-8">
        <p className="text-[18px] uppercase tracking-[0.22em] text-slide-gold-light">Containerized delivery</p>
        <p className="mt-6 text-[40px] leading-[1.18] text-slide-gray-100">KIT ships as a resolved system</p>
        <ul className="mt-8 space-y-5">
          <ListItem>Precut tubes and cables</ListItem>
          <ListItem>Preassembled actuators</ListItem>
          <ListItem>Modules, manifolds and frame components</ListItem>
        </ul>
      </Card>

      <div className="flex justify-center">
        <Hammer className="h-16 w-16 text-slide-gold" />
      </div>

      <Card className="h-[500px] p-8">
        <div className="flex items-center gap-4">
          <Building2 className="h-11 w-11 text-slide-gold" />
          <p className="text-[32px] font-semibold text-slide-gray-100">Local spoke</p>
        </div>
        <p className="mt-6 text-[24px] leading-[1.45] text-slide-gray-200">Final assembly, building interface and installation handled close to the project.</p>
        <div className="mt-8 space-y-4">
          <Tag tone="muted">Anchors stay local</Tag>
          <Tag tone="muted">Standard fasteners local</Tag>
          <Tag>Controlled handoff to site</Tag>
        </div>
      </Card>
    </div>

    <div className="mt-10 flex items-center justify-between rounded-[28px] border border-white/10 bg-white/[0.03] px-10 py-7 animate-fade-in delay-400">
      <p className="text-[30px] leading-[1.35] text-slide-gray-100">Only one interface remains project-specific: the connection to the building.</p>
      <Tag>One controlled system boundary</Tag>
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
