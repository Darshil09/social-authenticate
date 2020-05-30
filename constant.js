exports.SOCIAL_TYPE = {
  FACEBOOK   : "facebook",
  GOOGLE     : "google",
  APPLE      : "apple",
  INSTAGRAM  : "instagram"
};

exports.CONFIG_URL = {
  FACEBOOK  : "https://graph.facebook.com/me?access_token=",
  INSTAGRAM : "https://graph.instagram.com/me?access_token=",
  APPLE     : "https://appleid.apple.com/auth/token"
};

exports.STATUS_CODE = {
  SUCCESS     : 200,
  ERROR       : 400,
  VALIDATION  : 422
};

exports.STATUS_MESSAGE = {
  TYPE_VALIDATION_ERROR       : "type is required.",
  PARAMETER_VALIDATION_ERROR  : "parameter are required.",
  TOKEN_VALIDATION_ERROR      : "token is required.",
  TYPE_NOT_VALID_ERROR        : "provide valid type of social media account.",
  AUDIANCE_REQUIRED_ERROR     : "audiance is required and it should be in array.",
  ARRAY_VALIDATION_ERROR      : "provide an array for audiance"
}