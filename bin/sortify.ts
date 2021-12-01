/**
 * Sorts export declarations alphabetically based on filename
 */
function sortExportsByFilename(exportA: string[], exportB: string[]) {
    const [exportAFilename] = exportA
    const [exportBFilename] = exportB
    if (exportAFilename < exportBFilename) return -1
    return 1
}

/**
 * Creates an alphabetically sorted export file based on created components
 * @returns Formatted index.ts export file
 */
export function sort(params: string[][]) {
    const ordered = params
        .sort(sortExportsByFilename)
        .reduce((buffer, exportArr) => {
            const [_, exportStatement] = exportArr
            return `${buffer}\r\n${exportStatement}`
        }, String())

    return ordered
}
