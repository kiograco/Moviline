export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const seriePrincipal = getRandomIntInclusive(1,20);

export function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {  
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    return arr;
};