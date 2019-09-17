import { Request, Response } from 'express';
import Telegraf, { ContextMessageUpdate } from 'telegraf';

const key = process.env.TGM_KEY || '';
const bot = new Telegraf(key);

export const postMe = (req: Request, res: Response): void => {
  if (req.body.event_type !== 'merge_request') {
    res.send('not merge requiest');
    return;
  }
  const info = {
    user: req.body.user.name,
    project: req.body.project.name,
    projectLink: req.body.project.web_url,
    mergeStatus: req.body.object_attributes.merge_status,
    title: req.body.object_attributes.title,
    url: req.body.object_attributes.url,
  };
  bot.use((ctx: ContextMessageUpdate): void => {
    console.log(ctx);
    ctx.reply(info.toString());
  });
  console.log(info);
  res.statusCode = 200;
  res.send('ok');
};

export const getMe = (req: Request, res: Response): void => {
  console.log('get', req.body);
  res.send('ok');
};

bot.launch();
