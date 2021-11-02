import { saucesData } from '../data/sauces';

export function getSauce() {
  const sauceList = saucesData;
  return sauceList;
}

export function filterSauce(sauceType) {
  let filtredSauce = getSauce().filter((type) => type.type === sauceType);
  return filtredSauce;
}
