export const validationName = (name) => {
  if (!name) return "please insert name";
  if (name.length > 20) return "must be no longer than 20 characters";
};
export const validateImage = (image) => {
  if (!image) return "please insert image";
};

export const validateHeight = (height) => {
  if (!height) return "please insert height";
};
export const validateWeight = (weight) => {
  if (!weight) return "please insert weight";
};
export const validateLifeSpan = (life_span) => {
  if (!life_span) return "please insert weight";
};
export const validateTemperaments = (temperaments) => {
  if (temperaments.length === 0) return "please insert temperaments";
};
