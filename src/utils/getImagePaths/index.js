function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const baseUrl = "https://source.unsplash.com/random";

const count = 10;
const imageWidth = 640;
const imageHeight = 480;

const randomUrl = `${baseUrl}/${imageWidth}x${imageHeight}`;

export default async () => {
  let urls = [];

  for (let index = 0; index < count; index++) {
    await sleep(2000);
    await fetch(randomUrl).then(response => {
      urls.push(response.url);
    });
  }

  return urls;
};
