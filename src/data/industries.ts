export type Industry = {
  name: string;
  description: string;
  icon: string;
};

export const industries: Industry[] = [
  {
    name: 'Semiconductor',
    description:
      'IP, SoC and ASIC engineering for fabless companies and IDMs targeting advanced nodes.',
    icon: 'lucide:cpu',
  },
  {
    name: 'Automotive',
    description:
      'Functional-safety-aware silicon, ADAS subsystems and infotainment platforms.',
    icon: 'lucide:car',
  },
  {
    name: 'IoT & Industrial',
    description:
      'Connected sensors, gateways and edge controllers for smart factories and infrastructure.',
    icon: 'lucide:radio-tower',
  },
  {
    name: 'Networking & Telecom',
    description:
      '5G, switching, routing and data-center silicon with line-rate forwarding requirements.',
    icon: 'lucide:network',
  },
  {
    name: 'Consumer Electronics',
    description:
      'Wearables, audio, vision and smart-home products that balance cost, power and experience.',
    icon: 'lucide:headphones',
  },
  {
    name: 'Medical Devices',
    description:
      'Diagnostic, imaging and patient-care devices engineered to regulatory and reliability standards.',
    icon: 'lucide:stethoscope',
  },
  {
    name: 'AI & Robotics',
    description:
      'Accelerators, perception stacks and autonomy platforms for robots and intelligent machines.',
    icon: 'lucide:bot',
  },
  {
    name: 'Aerospace & Defence',
    description:
      'Rugged, mission-critical electronics and software built to the strictest assurance standards.',
    icon: 'lucide:shield',
  },
];
