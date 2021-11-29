import path from 'path'
import fs from 'fs/promises'
import { clean } from './cleaner'
import { parse } from './parser'
import { stringify } from './stringifier'
import { transform } from './transformer'
import { pretty } from './prettifier'
import { process } from './processor'
import { componentize } from './componentizer'

const SVG_DIRECTORY_PATH = path.join(__dirname, '../svgs')
const COMPONENT_DIRECTORY_PATH = path.join(__dirname, '../src/icons')
const EXPORT_FILE_PATH = path.join(COMPONENT_DIRECTORY_PATH, '/index.ts')

;(async () => {
    try {
        fs.unlink(EXPORT_FILE_PATH)

        const SVG_DIRECTORY = await fs.readdir(SVG_DIRECTORY_PATH)

        SVG_DIRECTORY.forEach(async (file) => {
            const FILE_NAME = file.slice(0, -4)
            const SVG_FILE_PATH = `${SVG_DIRECTORY_PATH}/${FILE_NAME}.svg`
            const COMPONENT_FILE_PATH = `${COMPONENT_DIRECTORY_PATH}/${FILE_NAME}.tsx`
            const EXPORT_STRING = `export * from './${FILE_NAME}' \r\n`

            const svg = await fs.readFile(SVG_FILE_PATH)
            const cleaned = clean(svg, FILE_NAME)
            const parsed = parse(cleaned)
            const transformed = transform(parsed)
            const processed = process(transformed, FILE_NAME)
            const stringified = stringify(processed)
            const componentized = componentize(stringified, FILE_NAME)
            const prettiedSvg = pretty(cleaned)
            const prettiedComponent = pretty(componentized)

            console.log(`Writing files for ${FILE_NAME}...`)
            fs.appendFile(EXPORT_FILE_PATH, EXPORT_STRING)
            fs.writeFile(SVG_FILE_PATH, prettiedSvg)
            fs.writeFile(COMPONENT_FILE_PATH, prettiedComponent)
        })
    } catch (error) {
        console.log(`Unable to process components due to: ${error}`)
    }
})()
