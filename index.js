const axios = require('axios')

const { SOCIAL_TYPE, CONFIG_URL, STATUS_CODE, STATUS_MESSAGE } = require('./constant');
let { params_validator } = require('./validator');

exports.social_accounts = async (type, params = {}) => {

  let validator = params_validator(type, params);

  if (validator.status !== STATUS_CODE.SUCCESS)
    return validator

  type = type.toLowerCase();

  return await new Promise(async (resolve, reject) => {

    switch (type) {
      case SOCIAL_TYPE.FACEBOOK:
        try {
          let fbResponse = await axios.get(CONFIG_URL.FACEBOOK + params.token);
          resolve({
            status: STATUS_CODE.SUCCESS,
            data: {
              social_account_id: fbResponse.data.id
            }
          })
        } catch (error) {
          reject({
            status: STATUS_CODE.ERROR,
            message: error.response.statusText
          })
        }
        break;

      case SOCIAL_TYPE.INSTAGRAM:
        try {
          let igResponse = await axios.get(CONFIG_URL.INSTAGRAM + params.token);
          resolve({
            status: STATUS_CODE.SUCCESS,
            data: {
              social_account_id: igResponse.data.id
            }
          })

        } catch (error) {
          reject({
            status: STATUS_CODE.ERROR,
            message: error.response.statusText
          })
        }
        break;

      case SOCIAL_TYPE.GOOGLE:
        try {
          const { OAuth2Client } = require('google-auth-library');
          const client = new OAuth2Client(params.audience);
          const ticket = await client.verifyIdToken({
            idToken: params.token,
            audience: undefined
          });
          const payload = ticket.getPayload();
          const userId = payload['sub']; // GMAIL USER ID
          resolve({
            code: STATUS_CODE.SUCCESS,
            data: {
              social_account_id: userId
            }
          });

        } catch (error) {
          reject({
            status: STATUS_CODE.ERROR,
            message: error
          })
        }
        break;

      default:
        reject({
          status: STATUS_CODE.VALIDATION,
          message: STATUS_MESSAGE.TYPE_NOT_VALID_ERROR
        })
        break;
    }
  }).catch(error => {
    return error
  });
}