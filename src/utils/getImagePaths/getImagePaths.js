import axios from "axios";

//path to imgur album
const url = "https://api.imgur.com/3/album/Xe7hh/images";
//imgur application auth
const clientId = "76267f1cf857a9a";
const headers = {
  Authorization: `Client-ID ${clientId}`
};

export default () => {
  return axios
    .request({
      url,
      method: "get",
      headers
    })
    .then(
      ({ data: { data } }) => data.map(({ link }) => link),
      error => {
        console.error(request);
        console.error(error);
        return [];
      }
    );
};
