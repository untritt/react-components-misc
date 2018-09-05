import fetch from "isomorphic-fetch";
//path to imgur album
const url = "https://api.imgur.com/3/album/Xe7hh/images";
//imgur application auth
const clientId = "76267f1cf857a9a";
const headers = {
  Authorization: `Client-ID ${clientId}`
};

export default () => {
  return fetch(url, {
    method: "get",
    headers
  })
    .then(
      response => response.json(),
      error => {
        console.error(error);
        return { data: [] };
      }
    )
    .then(({ data }) => data.map(({ link }) => link));
};
