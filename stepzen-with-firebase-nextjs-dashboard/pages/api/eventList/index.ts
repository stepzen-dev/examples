import { NextApiRequest, NextApiResponse } from "next";
import { searchByIds } from "../../../components/lib/dbUtil";
import nc from "next-connect";

export default nc<NextApiRequest, NextApiResponse>()
  .get(async (req, res) => {
    let singleString = []
    if(typeof req.query.id === "string") {
      singleString = [`${req.query.id}`]
    } else {
      singleString = req.query.id
    }
    const events = await searchByIds(singleString);
    
    return res.json(events);
  })
