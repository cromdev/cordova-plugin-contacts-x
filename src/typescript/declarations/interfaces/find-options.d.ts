declare module 'cordova-plugin-contacts-x' {

  interface FindOptionsFields {
    displayName?: boolean;
    firstName?: boolean;
    middleName?: boolean;
    familyName?: boolean;
    phoneNumbers?: boolean;
    emails?: boolean;
    organizationName?: boolean;
  }

  interface FindOptions {
    fields?: FindOptionsFields;
    baseCountryCode?: string;
  }
}
