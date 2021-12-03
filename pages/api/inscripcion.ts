import {NextApiHandler} from "next"
import {PrismaClient} from "@prisma/client"

const handler: NextApiHandler = async (req, res) => {
  const prisma = new PrismaClient()

  const result = await prisma.inscripcion.create({
    data: {
      ...req.body,
    },
  })

  res.json(result)
}

export default handler
