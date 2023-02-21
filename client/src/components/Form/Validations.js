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
  if (!height) {
    return "please insert height";
  } else if (height.lenght > 10) {
    return "must be no longer than 20 characters";
  }
};
export const validateWeight = (weight) => {
  if (!weight) {
    return "please insert weight";
  } else if (weight.lenght > 10) {
    return "must be no longer than 20 characters";
  }
};
export const validateLifeSpan = (life_span) => {
  if (!life_span) {
    return "please insert life span";
  } else if (life_span > 20) {
    return "must be no longer than 20";
  }
};
export const validateTemp = (temperaments) => {
  if (temperaments.lenght === 0) return "please insert temperaments";
};
