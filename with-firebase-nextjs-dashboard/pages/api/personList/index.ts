import { NextApiRequest, NextApiResponse } from "next";
import { searchPersonByIds } from "../../../components/lib/dbUtil";
import nc from "next-connect";

export default nc<NextApiRequest, NextApiResponse>()
  .get(async (req, res) => {
    let singleString = []
    if(typeof req.query.id === "string") {
      singleString = [`${req.query.id}`]
    } else {
      singleString = req.query.id
    }
    const persons = await searchPersonByIds(singleString);
    
    return res.json(persons);
  })
