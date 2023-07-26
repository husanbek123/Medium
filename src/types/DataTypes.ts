namespace DataTypes {
  export interface IUseToken {
    token: string;
    setToken: (token: string) => void;
  }
  export interface IPage {
    pagename: string;
    path: string;
    navbarBackground: string;
  }
  export interface ICardByOrder {
    title: string;
    company: {
      name: string;
      image: string;
    };
    date: string;
    read: string;
  }
  export interface ITopUser {
    image: string;
    name: string;
    description?: string;
  }
  export type LinkData = {
    title: string;
    href: string;
    type: "button" | "link";
  }[];
}
