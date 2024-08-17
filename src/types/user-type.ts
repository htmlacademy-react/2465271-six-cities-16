export type UserType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
  }

export type UserAuthorizathionError = {
    errorType: string;
    message: string;
    details: [{
    property: string;
    value: string;
    messages: [string];
    }];
  };
