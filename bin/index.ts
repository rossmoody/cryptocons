import path from 'path'
import fs from 'fs/promises'
import { clean } from './cleaner'
import { parse } from './parser'
import { stringify } from './stringifier'
import { transform } from './transformer'
import { pretty } from './prettifier'

const DIRECTORY_PATH = path.join(__dirname, '../svgs')

;(async () => {
    try {
        console.log(`Reading files in ${DIRECTORY_PATH}...`)
        const directory = await fs.readdir(DIRECTORY_PATH)

        directory.forEach(async (file) => {
            const FILE_PATH = `${DIRECTORY_PATH}/${file}`
            const FILE_NAME = file.slice(0, -4)

            const svg = await fs.readFile(FILE_PATH)
            const cleaned = clean(svg, FILE_NAME)
            const parsed = parse(cleaned)
            const transformed = transform(parsed)
            const stringified = stringify(transformed)

            const prettied = pretty(cleaned)
            console.log(`Writing optimized SVG file for ${FILE_NAME}...`)
            fs.writeFile(FILE_PATH, prettied)
        })
    } catch (error) {
        console.log(
            `Unable to scan ${DIRECTORY_PATH} directory due to: ${error}`
        )
    }
})()
