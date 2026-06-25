// Bottom arc: anticlockwise from 200° to 30°
const BOTTOM_START = (240 * Math.PI) / 180;
const BOTTOM_END = (20 * Math.PI) / 180;

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
  fadeStartA: number;
  fadeSizeA: number;
  fadeAngleA: number;
  fadeStartB: number;
  fadeSizeB: number;
  fadeAngleB: number;
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
    fadeStartA: 0.08,
    fadeSizeA: 0.11,
    fadeAngleA: 111,
    fadeStartB: 0.08,
    fadeSizeB: 0.13,
    fadeAngleB: 150,
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
    fadeStartA: 0.08,
    fadeSizeA: 0.11,
    fadeAngleA: 111,
    fadeStartB: 0.08,
    fadeSizeB: 0.13,
    fadeAngleB: 150,
    text: '#HIRING',
    textColor: '#ffffff',
    fontFamily: "'Geist', sans-serif",
    fontSize: 55,
    letterSpacing: 2,
  },
  {
    id: 'firing',
    name: 'Firing',
    ringColor: '#b91c1c',
    ringThickness: 81,
    arcStartAngle: BOTTOM_START,
    arcEndAngle: BOTTOM_END,
    fadeStartA: 0.08,
    fadeSizeA: 0.11,
    fadeAngleA: 111,
    fadeStartB: 0.08,
    fadeSizeB: 0.13,
    fadeAngleB: 150,
    text: '#FIRING',
    textColor: '#ffffff',
    fontFamily: "'Geist', sans-serif",
    fontSize: 55,
    letterSpacing: 2,
  },
  {
    id: 'tired',
    name: 'Tired',
    ringColor: '#1e5cd8',
    ringThickness: 81,
    arcStartAngle: BOTTOM_START,
    arcEndAngle: BOTTOM_END,
    fadeStartA: 0.08,
    fadeSizeA: 0.11,
    fadeAngleA: 111,
    fadeStartB: 0.08,
    fadeSizeB: 0.13,
    fadeAngleB: 150,
    text: '#TIRED',
    textColor: '#ffffff',
    fontFamily: "'Geist', sans-serif",
    fontSize: 55,
    letterSpacing: 2,
  },
  {
    id: 'grinding',
    name: 'Grinding',
    ringColor: '#c2410c',
    ringThickness: 81,
    arcStartAngle: BOTTOM_START,
    arcEndAngle: BOTTOM_END,
    fadeStartA: 0.08,
    fadeSizeA: 0.11,
    fadeAngleA: 111,
    fadeStartB: 0.08,
    fadeSizeB: 0.13,
    fadeAngleB: 150,
    text: '#GRINDING',
    textColor: '#ffffff',
    fontFamily: "'Geist', sans-serif",
    fontSize: 55,
    letterSpacing: 2,
  },
  {
    id: 'pregnant',
    name: "I'm Pregnant",
    ringColor: '#db2777',
    ringThickness: 81,
    arcStartAngle: BOTTOM_START,
    arcEndAngle: BOTTOM_END,
    fadeStartA: 0.08,
    fadeSizeA: 0.11,
    fadeAngleA: 111,
    fadeStartB: 0.08,
    fadeSizeB: 0.13,
    fadeAngleB: 150,
    text: "#I'M PREGNANT",
    textColor: '#ffffff',
    fontFamily: "'Geist', sans-serif",
    fontSize: 50,
    letterSpacing: 2,
  },
  {
    id: 'costumize',
    name: 'Costumize',
    ringColor: '#a71296',
    ringThickness: 81,
    arcStartAngle: BOTTOM_START,
    arcEndAngle: BOTTOM_END,
    fadeStartA: 0.08,
    fadeSizeA: 0.11,
    fadeAngleA: 111,
    fadeStartB: 0.08,
    fadeSizeB: 0.13,
    fadeAngleB: 150,
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
