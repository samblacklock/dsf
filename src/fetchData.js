const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'pisf6zzt2wph';
const API_KEY = '03e973bf485cbf59d0aa2a0569b8b901e8e100c1d2128dcf917bb3234c4fb393';

export default (target) => {
  return fetch(`
    https://cdn.contentful.com/spaces/pisf6zzt2wph/entries?access_token=03e973bf485cbf59d0aa2a0569b8b901e8e100c1d2128dcf917bb3234c4fb393
  `, {mode: 'cors'}).then(res => {
    return res.json()
  });
}
