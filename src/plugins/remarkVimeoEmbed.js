// Author: Hasin Hayder (https://github.com/hasinhayder)
// remark-vimeo-embed plugin

import { visit } from 'unist-util-visit';

export default function remarkVimeoEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (
        node.children.length === 1 &&
        node.children[0].type === 'text'
      ) {
        const match = node.children[0].value.match(/^#vimeo\s+([\w-]+)$/);
        if (match) {
          const videoId = match[1];
          parent.children[index] = {
            type: 'html',
            value: `<iframe width="100%" class='aspect-ratio' style="aspect-ratio: 16/9; border-radius:10px;" src="https://player.vimeo.com/video/${videoId}" frameborder="0" allowfullscreen></iframe>`,
          };
        }
      }
    });
  };
}
