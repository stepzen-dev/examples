import { readEvents } from "../../../components/lib/dbUtil";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

export default nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
  const events = await readEvents();
  return res.json(events);
});
