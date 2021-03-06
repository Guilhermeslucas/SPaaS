// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000',
  createUserEndpoint: '/api/users/create/',
  authUserEndpoint: '/api/users/authenticate/',
  uploadDataEndpoint: '/api/data/upload/',
  getFilesEndpoint: '/api/data/',
  uploadToolsEndpoint: '/api/tools/upload/',
  getToolsEndpoint: '/api/tools/',
  deleteToolsEnpoint: '/api/tools/',
  deleteDataEndpoint: '/api/data/',
  getParametersEndpoint: '/api/tasks/parameters/',
  submitTaskEndpoint: '/api/tasks/submit/',
  getResultsBlobEndpoints: '/api/results/',
  statusEndpoint: '/api/status/'
};
