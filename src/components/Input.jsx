import style from '../styles/css/input.module.scss';
import React, { useState } from 'react';

export const Input = () => {
  const [textidy, setTextidy] = useState()
  const [result, setResult] = useState()

  function tidy(text) {
    if(!text) return setTextidy('')
    let inputText = text
    if(inputText.startsWith('\"')) inputText = inputText.slice(1)
    if (inputText.endsWith('\"')) inputText = inputText.slice(0, -1)

    setTextidy('\"' + inputText.replace(/\"/g, '\\"' ) + '\"')
  }

  function copy() {
    if(!textidy) return setResult('no text was detected.')
    navigator.clipboard.writeText(textidy).then(() => {
      setResult('copied!')
    })
  }


  return (
    <div className={ style.input }>
      <div className={ style.in }>
        <label>テキストを入力</label>
        <textarea
          type="text"
          onChange={ event => tidy(event.target.value) }
        />
      </div>

      <div className={ style.arrow }>
        <span>▼</span>
      </div>

      <div className={ style.out }>
        <div className={ style.out__container }>
          <span className="outputText">
            { textidy }
          </span>
        </div>
      </div>

      <div className={style.buttons}>
        <button onClick={() => copy()}>Copy</button>
        <span className={style.smallNotice}>{ result }</span>
      </div>
    </div>
  )
}