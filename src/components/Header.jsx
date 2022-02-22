import style from '../styles/css/header.module.scss';

export const Header = () => {
  return (
    <header className={ style.header }>
      <div className={ style.siteLogo }>
        <span className={ style.siteName }>Textidy</span>
        <small>テクスタイディー</small>
      </div>
    </header>
  )
}