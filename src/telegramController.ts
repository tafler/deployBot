import { Request } from 'express';

export const postMe = (req: Request): void => {
  console.log(req);
};

export const getMe = (req: Request): void => {
  console.log(req);
};
