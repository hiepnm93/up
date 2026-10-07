// Keep the rendered homepage and the repository README on the same source.
export function repositoryReadmeFromDocs(source) {
  return source
    .replace("中文 | [English](en/)", "中文 | [English](docs/en/README.md)")
    .replace(/\]\((assets|threads|templates|reference)\//g, "](docs/$1/")
    .replace(/src="\.\/assets\//g, 'src="./docs/assets/')
    .replace(/href="\.\/downloads\//g, 'href="./docs/public/downloads/')
    .replace(/href="\.\/book-downloads"/g, 'href="./docs/book-downloads.md"')
    .replace(/\]\((projects|practice)\.md([#?][^)]*)?\)/g, "](docs/$1.md$2)")
    .replace(/href="\.\/((?:threads|templates)\/[^"#?]+|(?:projects|practice)(?:\.md)?)([?#][^"]*)?"/g, (_match, pathname, suffix = "") => {
      return `href="./docs/${pathname.replace(/\.md$/, "")}.md${suffix}"`;
    });
}

// Fork: the repository README mirrors the Vietnamese homepage (docs/vi/README.md).
export function repositoryReadmeFromVi(source) {
  return source
    .replace("[中文](https://byoungd.github.io/up/) | [English](../en/)", "[中文](docs/README.md) | [English](docs/en/README.md)")
    .replace(/src="\.\.\/assets\//g, 'src="./docs/assets/')
    .replace(/href="\.\.\/downloads\//g, 'href="./docs/public/downloads/')
    .replace(/\]\((threads|templates|reference)\//g, "](docs/vi/$1/")
    .replace(/\]\((projects|practice|book-downloads)\.md([#?][^)]*)?\)/g, "](docs/vi/$1.md$2)")
    .replace(/href="\.\/((?:threads|templates|reference)\/[^"#?]+|projects|practice|book-downloads)(?:\.md)?([?#][^"]*)?"/g, (_match, pathname, suffix = "") => {
      return `href="./docs/vi/${pathname}.md${suffix}"`;
    });
}
