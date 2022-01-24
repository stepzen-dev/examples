import { NextApiRequest, NextApiResponse } from "next";
import { deleteOwner, updateOwner } from "../../../components/lib/dbUtil";
import nc from "next-connect";

export default nc<NextApiRequest, NextApiResponse>()
  .patch(async (req, res) => {
    const owner = await updateOwner(req.body);
    return res.status(204).end();
  })
  .delete(async (req, res) => {
    const owner = await deleteOwner(req.body);
    return res.status(204).end();
  });
