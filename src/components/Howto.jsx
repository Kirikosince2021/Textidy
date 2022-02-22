import style from '../styles/css/howto.module.scss';

export const Howto = () => {
  return (
    <div className={style.howto}>
      <h2>ABOUT</h2>
      <p>入力された文字列の間に含まれている「"」を正規表現に変換します。(先頭・末尾の「"」は置換されません。)</p>
      <p>JSON形式での利用を想定しているため、変換後の文章は自動で「"」で囲われます。</p>
      <p>I18n用の翻訳ファイルを作成するときなどに便利です。</p>
    </div>
  )
}