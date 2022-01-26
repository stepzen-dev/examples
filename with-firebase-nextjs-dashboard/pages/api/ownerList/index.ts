import { NextApiRequest, NextApiResponse } from "next";
import { searchOwners } from "../../../components/lib/dbUtil";
import nc from "next-connect";

export default nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
  const owners = await searchOwners();

  return res.json(owners);
});
