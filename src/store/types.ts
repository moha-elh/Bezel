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
  solidZone: number;
  fadeAngle: number;

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
  setSolidZone: (v: number) => void;
  setFadeAngle: (v: number) => void;
  setText: (text: string) => void;
  setTextStyle: (fontSize: number, letterSpacing: number, color: string) => void;
  setFontFamily: (family: string) => void;
  applyTemplate: (id: string) => void;
  reset: () => void;
}
