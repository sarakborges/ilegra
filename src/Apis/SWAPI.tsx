const getYourMaster = (callback: Function) => {
  const abortController = new AbortController();

  const request = (id: number) => {
    fetch(`https://swapi.dev/api/people/${id}/`, {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((json) => {
        callback(json);
        abortController.abort();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  request(1);
  request(4);
};

const SWAPI = {
  getYourMaster,
};

export default SWAPI;
