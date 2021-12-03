import {NextApiHandler} from "next"
import {PrismaClient} from "@prisma/client"

const handler: NextApiHandler = async (req, res) => {
  const prisma = new PrismaClient()

  try {
    const result = await prisma.inscripcion.findMany()

    res.json(
      JSON.parse(
        JSON.stringify(result, (key, value) =>
          typeof value === "bigint" ? value.toString() : value,
        ),
      ),
    )
  } catch (err: unknown) {
    if (err instanceof Error) res.status(500).json({error: err.message + "ERROR"})
  }
}

export default handler
