import path from 'path'
import fs from 'fs/promises'
import {
    clean,
    parse,
    stringify,
    transform,
    pretty,
    process,
    componentize,
    sort,
    consolify,
} from '.'

const svgDirPath = path.join(__dirname, '../src/svg')
const componentDirPath = path.join(__dirname, '../src/components')
const exportFilePath = path.join(componentDirPath, '/index.ts')

;(async () => {
    console.log(`Starting to build icon components from ${svgDirPath}`)

    const consoleData: string[][] = []
    const svgDirectory = await fs.readdir(svgDirPath)

    await fs.rmdir(componentDirPath, { recursive: true })
    await fs.mkdir(componentDirPath)

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
            const componentized = componentize(
                stringified,
                fileName,
                processed.rectFill
            )

            const prettiedSvg = pretty(cleaned)
            const prettiedComponent = pretty(componentized)
            await fs.writeFile(svgFilePath, prettiedSvg)
            await fs.writeFile(componentFilePath, prettiedComponent)

            consoleData.push([fileName, svgFilePath, componentFilePath])

            return [fileName, exportString]
        })
    )

    consolify(consoleData)
    fs.writeFile(exportFilePath, sort(exports))
})()
