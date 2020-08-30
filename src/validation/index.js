/* eslint-disable no-trailing-spaces */
import {
  validateEmail, updatePassword, signIn, signUp
} from './validators/rules';
  
const getValidator = (validationName) => {
  const rules = {
    validateEmail, updatePassword, signIn, signUp
  };
  
  return rules[validationName];
};
  
export default getValidator;
