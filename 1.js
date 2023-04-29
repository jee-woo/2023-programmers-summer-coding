// 통과

function solution(image) {
  const length = image.length;
  const images = new Array(length * 2);
  for (let i = 0; i < images.length; i++) images[i] = [];

  for (let i = 0; i < length; i++) {
    images[i].push(...image[i], ...image[i].slice().reverse());
  }

  for (let i = length; i < length * 2; i++) {
    images[i].push(
      ...image[length * 2 - i - 1],
      ...image[length * 2 - i - 1].slice().reverse()
    );
  }

  return images;
}
