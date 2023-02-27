export const validationName = (name) => {
  if (!name) {
    return "please insert name";
  } else if (name.lenght > 10) {
    return "must be no longer than 20 characters";
  }
};
export const validateImage = (image) => {
  if (!image) return "please insert image";
};

export const validateHeight = (height) => {
  if (height.length === 0) return "please insert height";
  if (!/^[^-]*-[^-]*$/.test(height)) return "Select two amounts";
};
export const validateWeight = (weight) => {
  if (!weight) return "please insert weight";
  if (weight.lenght > 10) return "must be no longer than 20 characters";
  if (!/^[^-]*-[^-]*$/.test(weight)) return "Select two amounts";
};
export const validateLifeSpan = (life_span) => {
  if (!life_span) return "please insert weight";
  if (life_span.lenght > 10) return "must be no longer than 20 characters";
  if (!/^[^-]*-[^-]*$/.test(life_span)) return "Select two amounts";
};
