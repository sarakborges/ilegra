import axios from "axios";

const cancelToken = axios.CancelToken;
let source = cancelToken.source();

const getYourMaster = (callback: Function) => {
  source = cancelToken.source();

  axios
    .get(`https://swapi.dev/api/people/1`, {
      cancelToken: source.token,
    })
    .then((res) => {
      source.cancel("Request encerrada");
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    });

  axios
    .get(`https://swapi.dev/api/people/4`, {
      cancelToken: source.token,
    })
    .then((res) => {
      source.cancel("Request encerrada");
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const SWAPI = {
  getYourMaster,
};

export default SWAPI;
