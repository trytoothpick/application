import { YELP_API_URL, YELP_CLIENT_ID, YELP_CLIENT_SECRET } from './config';

class Yelp {
  constructor() {
    this.getToken().then((res) => {
      this.authHeader = 'Bearer ' + res['access_token'];
    });
  }
  getToken() {
    // var data = 'grant_type=client_credentials&client_id=' + YELP_CLIENT_ID + '&client_secret=' + YELP_CLIENT_SECRET;
    //
    // return fetch(YELP_API_URL + '/oauth2/token', {
    //   method: 'POST',
    //   body: data,
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    //   },
    // }).then((res) => {
    //   return res.json();
    // });

    // token lasts 180 days, so we'll just hard code for performance reasons for now
    return Promise.resolve({
      access_token: 'x9PSZ-oksS7vHtQz1x-dl_CC4hDgLymoI3mmxNLIxwPP2Niolw2XNubEsS8AETU5ejflq3T24uxfEkLBI6kOSl69x1B2k-qSpywhThSLGybP9GKEXDy509ipsX2iWXYx',
    });
  }
  getSearchResult(query) {
    return fetch(YELP_API_URL + '/v3/businesses/search?term=' + query + '&location="Los Angeles"', {
      headers: {
        'Authorization': this.authHeader,
      }
    }).then((res) => {
      return res.json();
    });
  }
}

export default new Yelp();
