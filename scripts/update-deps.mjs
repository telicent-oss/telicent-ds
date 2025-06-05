#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { resolve } from 'path'

// 1. Read local package.json
const cwd = process.cwd()
const { name: pkgName, version: pkgVersion } = JSON.parse(
  readFileSync(resolve(cwd, 'package.json'), 'utf-8')
)

// 2. Collect target repo paths from CLI args
const repos = process.argv.slice(2)
if (repos.length === 0) {
  console.error('Usage: node update-deps.js <repo-path> [<repo-path> …]')
  process.exit(1) 
}

// 3. For each repo, update matching deps to the new version
for (const repo of repos) {
  const pkgPath = resolve(repo, 'package.json')
  if (!existsSync(pkgPath)) {
    console.warn(`Skipping ${repo}: package.json not found`)
    continue
  }

  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))
  for (const field of ['dependencies', 'devDependencies', 'resolutions']) {
    if (pkg[field]?.[pkgName]) {
      pkg[field][pkgName] = pkgVersion
    }
  }

  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
  console.log(`✔ Updated ${pkgName}@${pkgVersion} in ${repo}`)
}
