import { promises as fs } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const body = await readBody(event)

  const filePath = join(process.cwd(), 'content', `${slug}.json`)

  await fs.writeFile(filePath, JSON.stringify(body, null, 2), 'utf-8')

  return { success: true, data: body }
})
