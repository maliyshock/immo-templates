export const LANDLORD_NAME = "landlord_name";
export const KALTMIETE = "kaltmiete";
export const ZI = "zi";
export const FLAECHE = "flaeche";
export const WARMMIETE = "warmmiete";

export const colors = {
  [LANDLORD_NAME]: "yellow",
  [KALTMIETE]: "red",
  [ZI]: "pink",
  [FLAECHE]: "skyBlue",
  [WARMMIETE]: "green",
};

const variables = [LANDLORD_NAME, KALTMIETE, ZI, FLAECHE, WARMMIETE];

export const variablesRegexp = new RegExp(
  `\\$\{+(${variables.join("|")})+}`,
  "g"
);
