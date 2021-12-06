import { format, Options } from 'prettier'
import { prettier } from '../package.json'
import metadata from '../src/metadata.json'

type TagData = Record<string, string[]>

/**
 * Creates a current metadata object based on available component names.
 * If component doesn't exist, an empty string array is added.
 * If metadata already exists, it is retained.
 */
export function tagify(componentNames: string[]) {
    const updatedMetadata = componentNames.sort().reduce((acc, name) => {
        acc[name] = (metadata as TagData)[name] || ['']
        return acc
    }, {} as TagData)

    const metaString = JSON.stringify(updatedMetadata)

    return format(metaString, {
        ...prettier,
        parser: 'json',
    } as Options)
}
