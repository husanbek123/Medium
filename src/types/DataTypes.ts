namespace DataTypes {
  export interface IUseToken {
    token: string;
    setToken: (token: string) => void;
  }
  export type LinkData = {
    title: string;
    href: string;
    type: "button" | "link";
  }[];
}
