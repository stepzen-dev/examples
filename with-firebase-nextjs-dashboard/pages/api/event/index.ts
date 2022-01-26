import { createEvent } from "../../../components/lib/dbUtil";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

export default nc<NextApiRequest, NextApiResponse>().post(async (req, res) => {
  const id_event = await createEvent(req.body);
  return res.json({ id_event: id_event, status: "success" });
});
