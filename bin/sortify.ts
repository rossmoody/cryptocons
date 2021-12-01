type ExportObject = Record<string, string>

/**
 * Sorts export declarations alphabetically based on filename
 */
function sortExportsByFilename(exportA: ExportObject, exportB: ExportObject) {
    const exportAFilename = Object.keys(exportA)[0]
    const exportBFilename = Object.keys(exportB)[0]
    if (exportAFilename < exportBFilename) return -1
    return 1
}

/**
 * Creates an alphabetically sorted export file based on created components
 * @returns Formatted index.ts export file
 */
export function sort(params: ExportObject[]) {
    const ordered = params
        .sort(sortExportsByFilename)
        .reduce((buffer, exportObject) => {
            const { _, value } = exportObject
            return `${buffer}\r\n${value}`
        }, String())

    return ordered
}
