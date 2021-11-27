import fs from 'fs'
import path from 'path'

const DIRECTORY_PATH = path.join(__dirname, '../src/icons')
const EXPORT_FILE_PATH = `${DIRECTORY_PATH}/index.ts`

fs.unlinkSync(EXPORT_FILE_PATH)

fs.readdir(DIRECTORY_PATH, (err, files) => {
    console.log(`Reading files in ${DIRECTORY_PATH}...`)
    if (err) return console.log(`Unable to scan ${DIRECTORY_PATH} directory...`)

    files.forEach((file) => {
        const componentName = file.slice(0, -4)
        const iconExportString = `export * from './${componentName}' \r\n`

        console.log(`Writing ${componentName} export definition...`)
        fs.appendFileSync(EXPORT_FILE_PATH, iconExportString)
    })
})
