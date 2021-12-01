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

const SVG_DIR_PATH = path.join(__dirname, '../svgs')
const COMPONENT_DIR_PATH = path.join(__dirname, '../src/icons')
const EXPORT_FILE_PATH = path.join(COMPONENT_DIR_PATH, '/index.ts')

;(async () => {
    const SVG_DIRECTORY = await fs.readdir(SVG_DIR_PATH)

    const COMPONENT_EXPORT_STRINGS = await Promise.all(
        SVG_DIRECTORY.map(async (file) => {
            const FILE_NAME = file.slice(0, -4)
            const SVG_FILE_PATH = `${SVG_DIR_PATH}/${FILE_NAME}.svg`
            const COMPONENT_FILE_PATH = `${COMPONENT_DIR_PATH}/${FILE_NAME}.tsx`
            const EXPORT_STRING = `export * from './${FILE_NAME}'`

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
            fs.writeFile(SVG_FILE_PATH, prettiedSvg)
            fs.writeFile(COMPONENT_FILE_PATH, prettiedComponent)

            return { FILE_NAME: EXPORT_STRING }
        })
    )

    console.log(`Writing export file to ${EXPORT_FILE_PATH}...`)
    const sorted = sort(COMPONENT_EXPORT_STRINGS)
    fs.writeFile(EXPORT_FILE_PATH, sorted)
})()
