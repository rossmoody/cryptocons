import fs from 'fs/promises'
import Table from 'cli-table'
import chalk from 'chalk'
import { sortByFilename } from './sortify'

const header = chalk.white.bold
const red = chalk.redBright
const green = chalk.greenBright

const tableConfig = {
    head: [
        header('📛 Icon Name'),
        header('🤞 SVG Size'),
        header('🤞 Component Size'),
    ],
    style: {
        head: ['boog', 'butt'],
    },
    colWidths: [30, 25, 25],
}

function bToKb(bytes: number) {
    const kilobytes = bytes / 100
    const sizeString = `${kilobytes} kb`

    switch (true) {
        case kilobytes > 20:
            return red(sizeString)

        case kilobytes < 5:
            return green(sizeString)

        default:
            return sizeString
    }
}

/**
 * Make icon build statistics all nice and pretty in the console
 */
export function consolify(consoleData: string[][]) {
    const table = new Table(tableConfig)

    Promise.all(
        consoleData.sort(sortByFilename).map(async (componentData) => {
            const [fileName, svgFilePath, componentFilePath] = componentData
            const { size: svgFileSize } = await fs.stat(svgFilePath)
            const { size: componentFileSize } = await fs.stat(componentFilePath)

            table.push([fileName, bToKb(svgFileSize), bToKb(componentFileSize)])
        })
    )
        .then(() => console.log(table.toString()))
        .catch(console.error)
}
