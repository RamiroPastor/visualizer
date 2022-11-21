
import { getMaterialsByPoint } from "backend/Material/getMaterialsByPoint";



export default async function handler(req, res) {

  const materials = await getMaterialsByPoint(req.body.pointID);

  res.status(200).json({materials})
}