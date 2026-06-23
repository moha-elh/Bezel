// Bottom arc: anticlockwise from 200° to 30°
const BOTTOM_START = (200 * Math.PI) / 180;
const BOTTOM_END = (30 * Math.PI) / 180;

// Top arc: anticlockwise from 135° to 45°, midpoint = 270° = top center
const TOP_START = (135 * Math.PI) / 180;
const TOP_END = (45 * Math.PI) / 180;

// Full ring: conventional 0→2π
const FULL_START = 0;
const FULL_END = 2 * Math.PI;

export interface Template {
  id: string;
  name: string;
  ringColor: string;
  ringThickness: number;
  arcStartAngle: number;
  arcEndAngle: number;
  solidZone: number;
  fadeAngle: number;
  text: string;
  textColor: string;
  fontFamily: string;
  fontSize: number;
  letterSpacing: number;
}

export const templates: Template[] = [
  {
    id: 'open',
    name: '#OpenToWork',
    ringColor: '#457032',
    ringThickness: 81,
    arcStartAngle: BOTTOM_START,
    arcEndAngle: BOTTOM_END,
    solidZone: 0.5,
    fadeAngle: 115,
    text: '#OPENTOWORK',
    textColor: '#ffffff',
    fontFamily: "'Geist', sans-serif",
    fontSize: 55,
    letterSpacing: 2,
  },
  {
    id: 'hiring',
    name: '#Hiring',
    ringColor: '#8344CC',
    ringThickness: 81,
    arcStartAngle: BOTTOM_START,
    arcEndAngle: BOTTOM_END,
    solidZone: 0.5,
    fadeAngle: 115,
    text: '#HIRING',
    textColor: '#ffffff',
    fontFamily: "'Geist', sans-serif",
    fontSize: 55,
    letterSpacing: 2,
  },
  {
    id: 'speaking',
    name: 'Speaking',
    ringColor: '#c2531f',
    ringThickness: 81,
    arcStartAngle: BOTTOM_START,
    arcEndAngle: BOTTOM_END,
    solidZone: 0.5,
    fadeAngle: 115,
    text: "#I'M SPEAKING",
    textColor: '#ffffff',
    fontFamily: "'Geist', sans-serif",
    fontSize: 55,
    letterSpacing: 2,
  },
  {
    id: 'mentor',
    name: 'Mentoring',
    ringColor: '#1f6f8c',
    ringThickness: 81,
    arcStartAngle: BOTTOM_START,
    arcEndAngle: BOTTOM_END,
    solidZone: 0.5,
    fadeAngle: 115,
    text: '#MENTORING',
    textColor: '#ffffff',
    fontFamily: "'Geist', sans-serif",
    fontSize: 55,
    letterSpacing: 2,
  },
  {
    id: 'costumize',
    name: 'Costumize',
    ringColor: '#a71296',
    ringThickness: 81,
    arcStartAngle: BOTTOM_START,
    arcEndAngle: BOTTOM_END,
    solidZone: 0.5,
    fadeAngle: 115,
    text: '#YOUR TEXT',
    textColor: '#ffffff',
    fontFamily: "'Geist', sans-serif",
    fontSize: 55,
    letterSpacing: 2,
  },

];

export const BOTTOM_ARC = { start: BOTTOM_START, end: BOTTOM_END };
export const TOP_ARC = { start: TOP_START, end: TOP_END };
export const FULL_ARC = { start: FULL_START, end: FULL_END };
