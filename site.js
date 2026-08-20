/**
 * SPLINE_TRIGGERS
 * ----------------
 * Each value must be the exact Name (or ID) of an object inside the Spline
 * scene — visible in the Develop panel of the Spline editor — that has a
 * "Key Down" event trigger configured on it (typically driving a camera
 * move/zoom animation). These are placeholders: swap them for your real
 * object names before this goes live.
 *
 * spline.emitEvent('keyDown', SPLINE_TRIGGERS.events) fires whatever
 * animation is bound to that object's Key Down trigger — it targets an
 * object, not a literal keyboard key.
 */
export const SPLINE_TRIGGERS = {
  hub: 'Camera_Hub',
  events: 'Camera_Events',
  projects: 'Camera_Projects',
  about: 'Camera_About',
  contact: 'Camera_Contact',
};

export const NAV_LINKS = [
  { label: 'Events', id: '#events' },
  { label: 'Projects', id: '#projects' },
  { label: 'About', id: '#about' },
  { label: 'Contact', id: '#contact' },
];

export const EVENTS = [
  {
    id: 'EVT.01',
    icon: 'Microscope',
    title: 'Wesley Science Day',
    cadence: 'ANNUAL — TERM 2',
    description:
      "The Union's flagship exhibition: student research, live demonstrations, and open experiments for the whole school.",
  },
  {
    id: 'EVT.02',
    icon: 'Telescope',
    title: 'Stargazing Observation Night',
    cadence: 'TERMLY',
    description:
      'Telescopes on the front lawn after dark, with guided constellation tours. No experience required.',
  },
  {
    id: 'EVT.03',
    icon: 'FlaskConical',
    title: 'Experimental Chemistry Workshop',
    cadence: 'MONTHLY',
    description:
      "Supervised lab time for reactions the syllabus doesn't have room for.",
  },
];

export const PROJECTS = [
  {
    id: 'PRJ.01',
    icon: 'Bot',
    title: 'Autonomous Terrain Rover',
    tag: 'ROBOTICS & AI',
    description:
      'A sensor-guided rover that reads uneven ground and adjusts its own path — built for inter-school robotics competition.',
  },
  {
    id: 'PRJ.02',
    icon: 'Sun',
    title: 'Solar Optimization System',
    tag: 'RENEWABLE ENERGY',
    description:
      'A dual-axis solar tracker with live efficiency monitoring, piloted on the school roof.',
  },
];

export const DISCIPLINES = [
  {
    id: 'DSC.01',
    icon: 'Cpu',
    title: 'Computing & AI',
    description: 'Algorithms, machine learning, and the systems quietly running modern life.',
  },
  {
    id: 'DSC.02',
    icon: 'FlaskConical',
    title: 'Chemistry',
    description: 'The molecular reactions behind everything that burns, bonds, or reacts.',
  },
  {
    id: 'DSC.03',
    icon: 'Dna',
    title: 'Biology',
    description: 'Life, studied from the cell up — systems, not just species.',
  },
  {
    id: 'DSC.04',
    icon: 'Atom',
    title: 'Physics',
    description: "The rules energy and motion don't get to break.",
  },
];

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#', icon: 'Instagram' },
  { label: 'Facebook', href: '#', icon: 'Facebook' },
  { label: 'YouTube', href: '#', icon: 'Youtube' },
  { label: 'Email', href: 'mailto:scienceunion@example.edu', icon: 'Mail' },
];
