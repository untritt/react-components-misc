//path to imgur album
const albumUrl = "https://api.imgur.com/3/album/Xe7hh/images";
//imgur application auth
const clientId = "76267f1cf857a9a";
const headers = new Headers();
headers.append("Authorization", `Client-ID ${clientId}`);
headers.append("Accept", `application/json`);
headers.append("Content-Type", `application/json`);

const request = new Request(albumUrl, {
  method: "GET",
  headers,
  credentials: "include"
});

export default () => {
  return fetch(request)
    .then(response => response.json())
    .then(({ data }) => data.map(({ link }) => link))
    .catch(error => {
      console.log(request);
      console.log(error);
    });
};
