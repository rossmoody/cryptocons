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

;(async () => {
    try {
        console.log(`Reading files in ${SVG_DIRECTORY_PATH}...`)
        const directory = await fs.readdir(SVG_DIRECTORY_PATH)

        directory.forEach(async (file) => {
            const FILE_NAME = file.slice(0, -4)
            const SVG_FILE_PATH = `${SVG_DIRECTORY_PATH}/${FILE_NAME}.svg`
            const COMPONENT_FILE_PATH = `${COMPONENT_DIRECTORY_PATH}/${FILE_NAME}.tsx`

            const svg = await fs.readFile(SVG_FILE_PATH)
            const cleaned = clean(svg, FILE_NAME)
            const parsed = parse(cleaned)
            const transformed = transform(parsed)
            const processed = process(transformed, FILE_NAME)
            const stringified = stringify(processed)
            const componentized = componentize(stringified, FILE_NAME)

            console.log(`Writing optimized SVG file for ${FILE_NAME}...`)
            const prettiedSvg = pretty(cleaned)
            fs.writeFile(SVG_FILE_PATH, prettiedSvg)

            console.log(`Writing component file for ${FILE_NAME}...`)
            const prettiedComponent = pretty(componentized)
            fs.writeFile(COMPONENT_FILE_PATH, prettiedComponent)
        })
    } catch (error) {
        console.log(
            `Unable to scan ${SVG_DIRECTORY_PATH} directory due to: ${error}`
        )
    }
})()
