
Almost all applications require users to create accounts on their websites to use services. Now a days every websites give support to social media application such as Google, Facebook, Instagram to authenticate user.
So this library helps you to get unique id of user's social media account. 

As of now, library support 3 popular social media account to integrate
1) Google
2) Facebook
3) Instagram

## Usage

To start using this library, you must include it in your project and then you can either use the callback function or through the async await :
```
let { social_accounts } = require('social-authenticate');
```
### How to use

**1) Using Callback:**

```
social_accounts(type, params).then(response => console.log(response));
```

**2) Using async await:**
```
let response = await social_accounts(type, params);
```
### How to send parameters

**For Facebook:**
```
let type = "facebook"
let parameters = { 
  token: "x1904new0rkvnfnewui"
}
```

**For Instagram:**
```
let type = "instagram"
let parameters = { 
  token: "x1904new0rkvnfnewui"
}
```

**For Google:**
```
let type = "google"
let parameters = { 
  token: "x1904new0rkvnfnewui",
  audiance: ["asdnaksdadsoiq"] //It should be in array and can give multiple values in audiance
}
```

### Response structure

If you pass valid parameters and proper values then you will response like: 
```
{
  status: 200
  data: {
    social_account_id: "1231231321331"
  }
}
```



