export const AppConfig = {
  urlBase: 'http://localhost:93/',
  get apiUrl() {
    return this.urlBase + 'controller/';
  }
};

//console.log(AppConfig);