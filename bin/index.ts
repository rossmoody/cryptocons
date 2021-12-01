import path from 'path'
import fs from 'fs/promises'
import { clean } from './cleaner'
import { parse } from './parser'
import { stringify } from './stringifier'
import { transform } from './transformer'
import { pretty } from './prettifier'
import { process } from './processor'
import { componentize } from './componentizer'
import { sort } from './sortify'
import { consolify } from './consoler'

const svgDirPath = path.join(__dirname, '../svgs')
const componentDirPath = path.join(__dirname, '../src/icons')
const exportFilePath = path.join(componentDirPath, '/index.ts')

;(async () => {
    const svgDirectory = await fs.readdir(svgDirPath)
    const consoleData: string[][] = []

    const exports = await Promise.all(
        svgDirectory.map(async (file) => {
            const fileName = file.slice(0, -4)
            const svgFilePath = `${svgDirPath}/${fileName}.svg`
            const componentFilePath = `${componentDirPath}/${fileName}.tsx`
            const exportString = `export * from './${fileName}'`

            const svg = await fs.readFile(svgFilePath)
            const cleaned = clean(svg, fileName)
            const parsed = parse(cleaned)
            const transformed = transform(parsed)
            const processed = process(transformed, fileName)
            const stringified = stringify(processed)
            const componentized = componentize(stringified, fileName)
            const prettiedSvg = pretty(cleaned)
            const prettiedComponent = pretty(componentized)

            fs.writeFile(svgFilePath, prettiedSvg)
            fs.writeFile(componentFilePath, prettiedComponent)

            consoleData.push([fileName, svgFilePath, componentFilePath])

            return [fileName, exportString]
        })
    ).catch(console.error)

    const sorted = sort(exports!)
    fs.writeFile(exportFilePath, sorted).then(() => consolify(consoleData))
})()
