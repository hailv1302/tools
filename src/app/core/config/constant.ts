// @ts-ignore
import config from '../../../assets/config.json';

export class Constant {
  public static API_ENDPOINT = config.BACKEND_URL + '/api';
  public static API_SIGN_IN = Constant.API_ENDPOINT + '/signIn';
  public static KEY_CAPTCHA = config.KEY_CAPTCHA;


  public static FACEBOOK = {
    SEND_MESSAGE: '/Facebook/accessusser'
  };

  public static ADMIN = {
    USERS: '/users'
  };
}
