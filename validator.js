const { STATUS_CODE, STATUS_MESSAGE, SOCIAL_TYPE } = require('./constant');

exports.params_validator = (type, params = {}) => {

  if (!type || type.length === 0)
    return {
      status   : STATUS_CODE.VALIDATION,
      message  : STATUS_MESSAGE.TYPE_VALIDATION_ERROR
    }

  if (Object.keys(params).length === 0)
    return {
      status   : STATUS_CODE.VALIDATION,
      message  : STATUS_MESSAGE.PARAMETER_VALIDATION_ERROR
    }

  if (!params.token || params.token.length === 0)
    return {
      status   : STATUS_CODE.VALIDATION,
      message  : STATUS_MESSAGE.TOKEN_VALIDATION_ERROR
    }

  if (type === SOCIAL_TYPE.GOOGLE) {
    if (!params.audiance || !Array.isArray(params.audiance))
      return {
        status   : STATUS_CODE.VALIDATION,
        message  : STATUS_MESSAGE.AUDIANCE_REQUIRED_ERROR
      }
  }

  return { status  : STATUS_CODE.SUCCESS }
}