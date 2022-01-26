import { NextApiRequest, NextApiResponse } from "next";
import { readEvent, updateEvent } from "../../../components/lib/dbUtil";
import nc from "next-connect";

export default nc<NextApiRequest, NextApiResponse>()
  .get(async (req, res) => {
    const event = await readEvent(req.query.id.toString());
    return res.json(event);
  })
  .patch(async (req, res) => {
    if (req.query.id.toString() !== req.body.slug) {
      return res.status(400).end();
    }
    const event = await updateEvent(req.body);
    return res.status(204).end();
  });
