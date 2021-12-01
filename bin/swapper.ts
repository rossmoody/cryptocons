import { UNIQUE_RADIUS_KEY } from './processor'

export function swapify(componentString: string) {
    const radiusKeyWithPunctuation = `"${UNIQUE_RADIUS_KEY}"`
    const replaced = componentString.replace(
        radiusKeyWithPunctuation,
        `{badgeRadius}`
    )
    return replaced
}
