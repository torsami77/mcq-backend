import emailTemplates from './emailTemplates/index';

const {
  welcome,
  passwordRecovery
} = emailTemplates;

let html;
const emailTemplatesFunction = (category, data) => {
  switch (category) {
    case 'welcome':
      html = welcome(data);
      return {
        subject: 'You are welcome',
        html
      };
    case 'passwordRecovery':
      html = passwordRecovery(data);
      return {
        subject: 'Recover your password',
        html
      };
    default:
      return false;
  }
};

export default emailTemplatesFunction;
