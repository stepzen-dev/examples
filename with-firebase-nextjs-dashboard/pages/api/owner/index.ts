import {
  searchByOwnerEmail,
  createOwner,
} from "../../../components/lib/dbUtil";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

export default nc<NextApiRequest, NextApiResponse>()
  .get(async (req, res) => {
    const email: string = req.query.email as string;
    const owner = await searchByOwnerEmail(email);
    if (owner) res.json(owner);
    else
      res.json({
        status: "We didn't find someone associated to this email.",
      });
  })
  .post(async (req, res) => {
    const id_owner = await createOwner(req.body);
    return res.json({ id_owner: id_owner, status: "success" });
  });
