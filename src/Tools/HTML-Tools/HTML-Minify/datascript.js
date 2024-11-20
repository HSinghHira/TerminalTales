// datascript.js

export const minifyHTML = (html, options) => {
  let result = html

  // Remove comments
  if (options.removeComments) {
    result = result.replace(/<!--[\s\S]*?-->/g, '')
  }

  // Remove whitespace
  if (options.removeWhitespace) {
    // Preserve whitespace within text content
    result = result
      .replace(/>\s+</g, '><') // Remove whitespace between tags
      .replace(/^\s+|\s+$/gm, '') // Remove leading/trailing whitespace
      .replace(/\s{2,}/g, ' ') // Replace multiple spaces with single space
  }

  // Remove empty attributes
  if (options.removeEmptyAttributes) {
    result = result.replace(/\s+(?:class|style|id|title)=["']\s*["']/g, '')
  }

  // Minify inline CSS
  if (options.minifyInlineCss) {
    result = result.replace(
      /<style[^>]*>([\s\S]*?)<\/style>/gi,
      function (match, css) {
        return (
          '<style>' +
          css
            .replace(/\s+/g, ' ')
            .replace(/:\s+/g, ':')
            .replace(/;\s+/g, ';')
            .replace(/{\s+/g, '{')
            .replace(/}\s+/g, '}')
            .trim() +
          '</style>'
        )
      }
    )
  }

  // Minify inline JavaScript
  if (options.minifyInlineJs) {
    result = result.replace(
      /<script[^>]*>([\s\S]*?)<\/script>/gi,
      function (match, js) {
        return (
          '<script>' +
          js
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\/\/.*/g, '')
            .replace(/\s+/g, ' ')
            .trim() +
          '</script>'
        )
      }
    )
  }

  // Remove unnecessary quotes from attributes
  if (options.removeQuotes) {
    result = result.replace(/=["']([^"'<>` ]+)["']/g, '=$1')
  }

  return result
}
