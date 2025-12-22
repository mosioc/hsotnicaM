function convertMarkdown() {
  const input = document.getElementById("markdown-input").value || "";
  if (input.trim() === "") return "";

  function applyInline(text) {
    // images: ![alt](src)
    text = text.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');
    // links: [text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    // bold: **text** or __text__
    text = text.replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>");
    // italic: *text* or _text_
    text = text.replace(/(\*|_)(.*?)\1/g, "<em>$2</em>");
    return text;
  }

  const lines = input.split(/\r?\n/);
  const out = lines
    .map((line) => {
      let m;
      if ((m = line.match(/^\s*###\s+(.+)$/))) {
        return `<h3>${applyInline(m[1].trim())}</h3>`;
      }
      if ((m = line.match(/^\s*##\s+(.+)$/))) {
        return `<h2>${applyInline(m[1].trim())}</h2>`;
      }
      if ((m = line.match(/^\s*#\s+(.+)$/))) {
        return `<h1>${applyInline(m[1].trim())}</h1>`;
      }
      if ((m = line.match(/^\s*>\s+(.+)$/))) {
        return `<blockquote>${applyInline(m[1].trim())}</blockquote>`;
      }
      // For other lines, apply inline formatting but don't wrap in block-level tags
      if (line.trim() === "") return "";
      return applyInline(line);
    })
    .join("");

  return out;
}

// expose for tests
window.convertMarkdown = convertMarkdown;

// hookup input event
document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("markdown-input");
  const htmlOutput = document.getElementById("html-output");
  const preview = document.getElementById("preview");

  function update() {
    const html = convertMarkdown();
    htmlOutput.textContent = html;
    preview.innerHTML = html;
  }

  textarea.addEventListener("input", update);

  // optional: initialize with an example
  textarea.value =
    "# Welcome\n## Subtitle\n**bold** and *italic*\n> A quote with **bold** and *italic*\n![alt-text](image-source)\n[link text](https://example.com)";
  update();
});
