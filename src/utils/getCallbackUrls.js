import { config } from 'dotenv';

config();
const environment = process.env.NODE_ENV;
const testEnvironment = !(environment === 'development' || environment === 'staging' || environment === 'production');
const productionEnvironment = (environment === 'production') || (environment === 'staging');
let baseUrl;

if (productionEnvironment) baseUrl = 'https://mcq-ui.netlify.app/';
else baseUrl = 'http://localhost:5000';

export default {
  baseUrl,
  testEnvironment
};
