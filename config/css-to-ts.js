import * as fs from 'fs';
import { globSync } from 'glob'

console.log('Start building: css-to-ts')

/**
 * Reads all .css
 */
var files = globSync('**/*.css', {
  dotRelative: true
}).filter(e => !e.match(/(catalog|node_modules)/))

for (let i = 0; i < files.length; i++) {
  try {
    const filePath = files[i]
    const content = fs.readFileSync(filePath)
    fs.writeFileSync(
      `${filePath}.ts`,
      `import {css} from 'lit'
export const styles = css\`

${content.toString('utf8')}
\`
`
    )
  } catch (error) {
    console.error(error)
  }
}

console.log('End building: css-to-ts');
