const rgb = {
  white: "255,255,255",
  navy: "6,18,58",
};

const transparent = "rgba(0,0,0,0)";

const white = {
  "0.1": `rgba(${rgb.white}, .1)`,
  "0.2": `rgba(${rgb.white}, .2)`,
  "0.4": `rgba(${rgb.white}, .4)`,
  "1.0": `rgba(${rgb.white}, 1)`,
} as const;

const navy = {
  "0.1": `rgba(${rgb.navy}, .1)`,
  "1.0": `rgba(${rgb.navy}, 1)`,
} as const;

const colors = {
  white,
  navy,
  transparent,
};

export default colors;
