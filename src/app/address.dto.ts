declare module namespace {

  export interface Address {
      street: string;
      city: string;
      region: string;
      postalCode: any;
      country: string;
      phone: any;
  }

  export interface RootObject {
      id: number;
      companyName: string;
      contactName: string;
      contactTitle: string;
      address: Address;
  }

}

