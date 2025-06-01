import path from "node:path"
import { fileURLToPath } from "node:url"

function parent(filePath: string): string {
  return path.dirname(filePath)
}

// 2025-02-24: Webpack doesn't support import.meta.dirname properly
const definitionsModuleFilepath = fileURLToPath(import.meta.url)
const srcLibDirectory = parent(definitionsModuleFilepath)
const srcDirectory = parent(srcLibDirectory)
export const clientProjectDirectory = parent(srcDirectory)
