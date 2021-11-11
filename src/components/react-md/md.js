//https://qiita.com/dobusarai/items/d6c4b98d8696bc382fa6

import React, {useState} from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor, {Plugins} from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs.css'; // highlight.jsの好みのスタイルをここで指定

MdEditor.use(Plugins.TabInsert, {
    tabMapValue: 1, // EditorでのTab入力有効
  })

  const mdParser = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    // Prismも使おうと思えばここでいけるかな？
    highlight(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value
        } catch (__) {}
      }
      return ''
    },
  })

export default function MdSample() {
    const [text, setText] = useState('')
    const handleEditorChange = ({text, html}) => {
      setText(text)
    }
    const handleImageUpload = async (file) => {
      return
    };
    const renderHTML = (text) => {
      return mdParser.render(text)
    }
    return (
      <MdEditor
        style={{ height: "600px" }}
        renderHTML={renderHTML}
        onChange={handleEditorChange}
        onImageUpload={handleImageUpload}
        /*onCustomImageUpload={handleImageUpload}*/
        config={{
          view: {
            menu: true,
            md: true,
            html: true,
            fullScreen: true,
            hideMenu: true,
          },
          table: {
            maxRow: 5,
            maxCol: 6,
          },
          syncScrollMode: ['leftFollowRight', 'rightFollowLeft'],
          imageAccept:'.jpg,.png',
        }}
      />
    )
}
