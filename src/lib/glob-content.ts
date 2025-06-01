import fs from "node:fs/promises"
import path from "node:path"

import { clientProjectDirectory } from "@/lib/definitions"

const contentDirectory = path.join(clientProjectDirectory, "src", "content")

function isContentFileName(fileName: string): boolean {
  return path.extname(fileName) === ".tsx"
}

function getContentFileNameBase(fileName: string): string {
  return path.basename(fileName, ".tsx")
}

const blacklistedModuleBaseNames = new Set(["index"])
const isBlacklistedBaseName = (baseName: string) => blacklistedModuleBaseNames.has(baseName)

export async function globContent(contentSubdirectoryName: string): Promise<string[]> {
  const contentSubdirectory = path.join(contentDirectory, contentSubdirectoryName)
  const entries = await fs.readdir(contentSubdirectory, { withFileTypes: true })
  const moduleBaseNames: string[] = []
  for (const entry of entries) {
    if (!entry.isFile()) continue
    if (!isContentFileName(entry.name)) continue
    const moduleBaseName = getContentFileNameBase(entry.name)
    if (isBlacklistedBaseName(moduleBaseName)) continue
    moduleBaseNames.push(moduleBaseName)
  }
  return moduleBaseNames
}
