export interface CropState {
  x: number;
  y: number;
  zoom: number;
}

export interface FrameState {
  // ── Photo ──────────────────────────────────────────────
  photo: ImageBitmap | null;
  crop: CropState;

  // ── Ring ───────────────────────────────────────────────
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

  // ── Ribbon text ────────────────────────────────────────
  text: string;
  fontSize: number;
  letterSpacing: number;
  textColor: string;
  fontFamily: string;

  // ── Template tracking ──────────────────────────────────
  activeTemplateId: string | null;

  // ── Actions ────────────────────────────────────────────
  setPhoto: (img: ImageBitmap) => void;
  clearPhoto: () => void;
  setCrop: (patch: Partial<CropState>) => void;
  setRingColor: (hex: string) => void;
  setRingThickness: (px: number) => void;
  setArc: (startAngle: number, endAngle: number) => void;
  setFadeStartA: (v: number) => void;
  setFadeSizeA: (v: number) => void;
  setFadeAngleA: (v: number) => void;
  setFadeStartB: (v: number) => void;
  setFadeSizeB: (v: number) => void;
  setFadeAngleB: (v: number) => void;
  setText: (text: string) => void;
  setTextStyle: (fontSize: number, letterSpacing: number, color: string) => void;
  setFontFamily: (family: string) => void;
  applyTemplate: (id: string) => void;
  reset: () => void;
}
