import { createPerson, searchByEmail } from "../../../components/lib/dbUtil";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

export default nc<NextApiRequest, NextApiResponse>()
  .get(async (req, res) => {
    const email: string = req.query.email as string;
    const person = await searchByEmail(email);
    if (person) res.json(person);
    else
      res.json({ status: "We didn't find someone associated to this email." });
  })
  .post(async (req, res) => {
    const id_person = await createPerson(req.body);
    return res.json({ id_person: id_person, status: "success" });
  });
