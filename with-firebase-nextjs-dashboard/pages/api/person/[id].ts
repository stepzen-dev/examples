import { NextApiRequest, NextApiResponse } from "next";
import { readPerson, updatePerson } from "../../../components/lib/dbUtil";

import nc from "next-connect";

export default nc<NextApiRequest, NextApiResponse>()
  .get(async (req, res) => {
    const person = await readPerson(req.query.id.toString());
    return res.json(person);
  })

  .patch(async (req, res) => {
    if (req.query.id.toString() !== req.body.slug) {
      return res.status(400).end();
    }
    const person = await updatePerson(req.body);
    return res.status(204).end();
  });
