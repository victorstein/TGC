import { type BlockFragment } from '@integrations/graphql/operations'

export const combineHTMLBlocks = (
  htmlBlocks: NonNullable<BlockFragment[]>
): string => {
  const parsed = htmlBlocks.map((block): string => {
    if (
      'attributes' in block &&
      block.attributes !== undefined &&
      block.attributes !== null
    ) {
      if ('content' in block.attributes) {
        if (block.name === 'core/paragraph') {
          return `<p>${String(block.attributes?.content)}</p>` ?? ''
        }

        if (block.name === 'core/heading') {
          return `<h3>${String(block.attributes?.content)}</h3>` ?? ''
        }
      }

      if ('url' in block.attributes) {
        return `<img src="${String(block.attributes?.url)}">` ?? ''
      }
    }

    if (
      'innerBlocks' in block &&
      block.innerBlocks !== undefined &&
      block.innerBlocks !== null
    ) {
      const innerBlocks = block.innerBlocks
        .map((innerBlock) => {
          if (
            'originalContent' in innerBlock &&
            innerBlock.originalContent !== undefined
          ) {
            return String(innerBlock.originalContent)
          }
          return ''
        })
        .join(' ')
      return `<ul>${innerBlocks}</ul>`
    }

    return ''
  })

  return parsed.join(' ')
}
