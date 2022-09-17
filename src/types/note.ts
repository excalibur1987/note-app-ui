export interface INote {
  createdAt?: Date;
  updatedAt?: Date;
  title: string;
  body: string;
  done?: boolean;
}
