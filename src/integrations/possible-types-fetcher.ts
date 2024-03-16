import fetch from 'cross-fetch'
import fs from 'fs'
import { Constants } from '../shared/constants'

fetch(Constants.GRAPHQL_ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `
  })
})
  .then(async (result) => await result.json())
  .then((result) => {
    const possibleTypes = {}

    result.data.__schema.types.forEach((supertype: Record<string, unknown>) => {
      if (
        'possibleTypes' in supertype &&
        Array.isArray(supertype.possibleTypes)
      ) {
        const name = supertype.name
        // @ts-expect-error Only used to generate possibleTypes we are unable to determine the shape of supertype
        possibleTypes[name] = supertype.possibleTypes.map(
          (subtype) => subtype.name
        )
      }
    })

    fs.writeFile(
      './src/integrations/possible-types.json',
      JSON.stringify(possibleTypes),
      (err) => {
        if (err !== null) {
          console.error('Error writing possibleTypes.json ❌', err)
        } else {
          console.log('Fragment types successfully extracted! ✅')
        }
      }
    )
  })
  .catch((err) => {
    console.error('Error fetching possibleTypes ❌', err)
  })
