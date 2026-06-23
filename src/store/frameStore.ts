import { create } from 'zustand';
import type { FrameState, CropState } from './types';
import { templates } from '../data/templates';

const DEFAULT = templates[0];

const initial = {
  photo: null as ImageBitmap | null,
  crop: { x: 0, y: 0, zoom: 1 } as CropState,
  ringColor: DEFAULT.ringColor,
  ringThickness: DEFAULT.ringThickness,
  arcStartAngle: DEFAULT.arcStartAngle,
  arcEndAngle: DEFAULT.arcEndAngle,
  fadeStartA: DEFAULT.fadeStartA,
  fadeSizeA:  DEFAULT.fadeSizeA,
  fadeAngleA: DEFAULT.fadeAngleA,
  fadeStartB: DEFAULT.fadeStartB,
  fadeSizeB:  DEFAULT.fadeSizeB,
  fadeAngleB: DEFAULT.fadeAngleB,
  text: DEFAULT.text,
  fontSize: DEFAULT.fontSize,
  letterSpacing: DEFAULT.letterSpacing,
  textColor: DEFAULT.textColor,
  fontFamily: DEFAULT.fontFamily,
  activeTemplateId: DEFAULT.id,
};

export const useFrameStore = create<FrameState>((set) => ({
  ...initial,

  setPhoto: (img) => set({ photo: img }),
  clearPhoto: () => set({ photo: null, crop: { x: 0, y: 0, zoom: 1 } }),
  setCrop: (patch) => set((s) => ({ crop: { ...s.crop, ...patch } })),

  setRingColor: (hex) => set({ ringColor: hex, activeTemplateId: null }),
  setRingThickness: (px) => set({ ringThickness: px, activeTemplateId: null }),
  setArc: (startAngle, endAngle) =>
    set({ arcStartAngle: startAngle, arcEndAngle: endAngle, activeTemplateId: null }),
  setFadeStartA: (v) => set({ fadeStartA: v, activeTemplateId: null }),
  setFadeSizeA:  (v) => set({ fadeSizeA:  v, activeTemplateId: null }),
  setFadeAngleA: (v) => set({ fadeAngleA: v, activeTemplateId: null }),
  setFadeStartB: (v) => set({ fadeStartB: v, activeTemplateId: null }),
  setFadeSizeB:  (v) => set({ fadeSizeB:  v, activeTemplateId: null }),
  setFadeAngleB: (v) => set({ fadeAngleB: v, activeTemplateId: null }),

  setText: (text) => set({ text: text.toUpperCase(), activeTemplateId: null }),
  setTextStyle: (fontSize, letterSpacing, color) =>
    set({ fontSize, letterSpacing, textColor: color }),
  setFontFamily: (family) => set({ fontFamily: family }),

  applyTemplate: (id) => {
    const tpl = templates.find((t) => t.id === id);
    if (!tpl) return;
    set({
      ringColor: tpl.ringColor,
      ringThickness: tpl.ringThickness,
      arcStartAngle: tpl.arcStartAngle,
      arcEndAngle: tpl.arcEndAngle,
      fadeStartA: tpl.fadeStartA,
      fadeSizeA:  tpl.fadeSizeA,
      fadeAngleA: tpl.fadeAngleA,
      fadeStartB: tpl.fadeStartB,
      fadeSizeB:  tpl.fadeSizeB,
      fadeAngleB: tpl.fadeAngleB,
      text: tpl.text,
      textColor: tpl.textColor,
      fontFamily: tpl.fontFamily,
      fontSize: tpl.fontSize,
      letterSpacing: tpl.letterSpacing,
      activeTemplateId: id,
    });
  },

  reset: () => set({ ...initial }),
}));
