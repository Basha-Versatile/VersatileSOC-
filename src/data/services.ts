export type Service = {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  icon: string;
  hero: string;
  overview: string;
  capabilities: { title: string; description: string }[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: 'vlsi-silicon',
    title: 'VLSI & Silicon Engineering',
    tagline: 'From RTL to GDSII — chip design done right the first time.',
    short:
      'Full-flow ASIC and SoC design services across architecture, RTL, verification, DFT and physical design on advanced nodes.',
    icon: 'lucide:cpu',
    hero: 'Chips from specification to silicon, engineered for power, performance and area targets you can ship against.',
    overview:
      'We partner with semiconductor product teams as an extension of their engineering org. Our VLSI practice covers the entire silicon lifecycle on nodes from 180nm down to 3nm, with deep expertise in low-power SoCs, AI accelerators, networking ASICs and mixed-signal designs.',
    capabilities: [
      {
        title: 'Architecture & Specification',
        description:
          'Micro-architecture exploration, performance modelling, ISA selection (including Arm and RISC-V) and clear, executable specifications.',
      },
      {
        title: 'RTL Design',
        description:
          'Reusable, synthesis-friendly RTL for CPU subsystems, interconnects, peripherals and custom accelerators — written for lint-clean, low-power closure.',
      },
      {
        title: 'Design Verification',
        description:
          'UVM, formal, emulation and FPGA prototyping. Coverage-driven sign-off with reusable verification IP and CI-integrated regressions.',
      },
      {
        title: 'DFT & Silicon Bring-up',
        description:
          'Scan, MBIST, boundary scan, ATPG and post-silicon validation flows that get parts back to revenue faster.',
      },
      {
        title: 'Physical Design',
        description:
          'Synthesis, floorplanning, place-and-route, STA and signoff on advanced nodes — with timing, IR-drop and EM closure baked in.',
      },
      {
        title: 'Analog & Mixed-Signal',
        description:
          'PLLs, SerDes, ADCs/DACs, PMUs and custom IP. Schematic capture through layout, characterization and integration.',
      },
    ],
    outcomes: [
      'First-pass silicon success on production tape-outs',
      'Reduced verification cycles through reusable UVM and formal flows',
      'Lower power and smaller die area on next-gen products',
      'Faster engineering ramp without expanding headcount',
    ],
  },
  {
    slug: 'embedded',
    title: 'Embedded Engineering',
    tagline: 'Firmware, drivers and platform software for connected products.',
    short:
      'Bare-metal firmware, RTOS, Linux BSPs, device drivers and middleware for products from sensors to gateways.',
    icon: 'lucide:circuit-board',
    hero: 'A full-stack embedded team that takes a board from power-on to a production-ready software platform.',
    overview:
      'We build the software layer that turns silicon into a product. From low-level boot and driver work to RTOS integration, connectivity stacks and OTA-update frameworks, our embedded engineers ship code that meets stringent safety, security and real-time constraints.',
    capabilities: [
      {
        title: 'Board Bring-up & BSPs',
        description:
          'U-Boot, Linux kernel porting, device tree authoring and BSP delivery for custom SoCs and reference platforms.',
      },
      {
        title: 'RTOS & Bare-metal Firmware',
        description:
          'FreeRTOS, Zephyr, ThreadX and bare-metal designs for deterministic, resource-constrained workloads.',
      },
      {
        title: 'Device Drivers',
        description:
          'Drivers for sensors, displays, connectivity ICs, storage and custom peripherals — upstream-ready where it matters.',
      },
      {
        title: 'Connectivity & Protocols',
        description:
          'BLE, Wi-Fi, Thread, Matter, LoRa, CAN, MQTT, OPC-UA and TSN integration with hardened security profiles.',
      },
      {
        title: 'Secure Boot & OTA',
        description:
          'Trusted boot chains, signed images, anti-rollback and OTA update frameworks aligned to IEC 62443 and similar standards.',
      },
      {
        title: 'Test Automation',
        description:
          'HIL test benches, automated regression, fuzzing and CI pipelines that catch regressions before they hit hardware.',
      },
    ],
    outcomes: [
      'Reduced board bring-up time from months to weeks',
      'Production-grade Linux BSPs ready for long-term support',
      'OTA-capable, secure-by-default device platforms',
      'Reusable middleware that powers an entire product family',
    ],
  },
  {
    slug: 'system-design',
    title: 'System Design',
    tagline: 'From product idea to certified hardware.',
    short:
      'End-to-end hardware product engineering — schematic, PCB, mechanical, compliance and manufacturing transfer.',
    icon: 'lucide:layers',
    hero: 'We take ownership of the whole product — silicon, sensors, enclosure, regulatory approvals and the path to volume.',
    overview:
      'Our system design practice acts as a turnkey product engineering team. We translate a concept into a manufacturable, certified product — covering electronics, mechanical, thermal, regulatory and DfM at every step.',
    capabilities: [
      {
        title: 'High-speed PCB Design',
        description:
          'Signal-integrity-driven layout for DDR, PCIe, USB, Ethernet and SerDes interfaces, with controlled-impedance stack-ups.',
      },
      {
        title: 'Schematic & Power Design',
        description:
          'Architecture, power-tree design, schematic capture and component engineering with multi-source BOM strategies.',
      },
      {
        title: 'Mechanical & Thermal',
        description:
          'Enclosure design, DFM/DFA, thermal modelling and prototyping — coordinated with electronics from day one.',
      },
      {
        title: 'Compliance & Certification',
        description:
          'EMI/EMC pre-compliance, FCC, CE, BIS, UL and industry-specific certifications guided to first-time pass.',
      },
      {
        title: 'Prototyping & NPI',
        description:
          'Rapid prototypes, pilot builds and clean transfer to contract manufacturers with full design packs and test plans.',
      },
      {
        title: 'Sustaining Engineering',
        description:
          'BOM optimization, component obsolescence management and long-term ECN support for products in field.',
      },
    ],
    outcomes: [
      'Compressed timelines from concept to first production build',
      'First-pass compliance and certification outcomes',
      'Resilient, multi-source BOMs that survive supply shocks',
      'Cleanly documented designs your manufacturing partner can build',
    ],
  },
  {
    slug: 'ai-ml',
    title: 'AI & ML Solutions',
    tagline: 'Practical AI — from edge inference to generative copilots.',
    short:
      'Applied machine learning, computer vision, edge AI and generative AI engineering for product and enterprise use cases.',
    icon: 'lucide:brain-circuit',
    hero: 'We build the AI features that ship — small enough for the edge, robust enough for production, measurable enough to justify the investment.',
    overview:
      'Our AI practice combines data science, MLOps and embedded engineering. We help teams move from proof-of-concept notebooks to deployed models that meet latency, cost and reliability targets — whether that means a quantized vision model on a microcontroller or a retrieval-augmented copilot in the cloud.',
    capabilities: [
      {
        title: 'Edge AI & TinyML',
        description:
          'Model selection, quantization, pruning and deployment on MCUs, NPUs and accelerators with strict power budgets.',
      },
      {
        title: 'Computer Vision',
        description:
          'Detection, segmentation, OCR and tracking pipelines for industrial inspection, retail, automotive and medical imaging.',
      },
      {
        title: 'Generative AI Engineering',
        description:
          'RAG systems, fine-tuned LLMs, agent frameworks and evaluation harnesses — designed for cost and quality together.',
      },
      {
        title: 'MLOps',
        description:
          'Feature stores, training pipelines, model registries, monitoring and drift detection on AWS, Azure and GCP.',
      },
      {
        title: 'Data Engineering',
        description:
          'Streaming and batch pipelines, lakehouse architectures and analytics layers that make ML pragmatic instead of aspirational.',
      },
      {
        title: 'Responsible AI',
        description:
          'Evaluation, bias testing, guardrails and observability so deployed models stay aligned to your policies.',
      },
    ],
    outcomes: [
      'Edge models that meet latency and power targets the first time',
      'Generative AI features grounded in your own knowledge base',
      'Production ML pipelines with clear cost and quality SLOs',
      'A pragmatic AI roadmap that ties to measurable business outcomes',
    ],
  },
  {
    slug: 'application-cloud',
    title: 'Application & Cloud',
    tagline: 'Web, mobile and cloud platforms that scale with your product.',
    short:
      'Full-stack web and mobile apps, cloud-native platforms, APIs and DevOps for product and enterprise teams.',
    icon: 'lucide:cloud',
    hero: 'The software around your hardware — companion apps, dashboards, APIs and the cloud platforms that hold it all together.',
    overview:
      'We build the application and cloud layer that gives your product a customer-facing surface and an operational backbone. Our teams own the full stack — from React and Flutter front-ends to event-driven microservices, data platforms and the CI/CD pipelines that ship them safely.',
    capabilities: [
      {
        title: 'Web & Mobile Apps',
        description:
          'React, Next.js, Flutter and native iOS/Android — built for accessibility, performance and design consistency.',
      },
      {
        title: 'APIs & Microservices',
        description:
          'REST and gRPC services, event-driven architectures and well-versioned APIs that survive multiple product cycles.',
      },
      {
        title: 'Cloud-native Platforms',
        description:
          'Kubernetes, serverless and managed services on AWS, Azure and GCP — designed around cost, reliability and security.',
      },
      {
        title: 'IoT Cloud',
        description:
          'Device management, telemetry pipelines, digital twins and OTA back-ends connecting fleets at scale.',
      },
      {
        title: 'DevOps & SRE',
        description:
          'CI/CD pipelines, IaC, observability, incident response and platform engineering practices that compound over time.',
      },
      {
        title: 'Security & Compliance',
        description:
          'Threat modelling, secure SDLC, SOC 2 / ISO 27001 alignment and continuous security posture management.',
      },
    ],
    outcomes: [
      'Companion apps and portals that ship in weeks, not quarters',
      'Cloud platforms that scale without surprise bills',
      'Pipelines that move teams from monthly to daily releases',
      'A security posture you can defend to enterprise customers',
    ],
  },
];
