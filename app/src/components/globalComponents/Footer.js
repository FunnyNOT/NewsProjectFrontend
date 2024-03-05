import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__container__left'>
          <div className='footer__container__left__logo'>
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='Logo' height='56' />
          </div>
          <div className='footer__container__left__text'>
            <p>© 2024 News Project</p>
          </div>
        </div>
        <div className='footer__container__right'>
          <div className='footer__container__right__text'>
            <p>
              Created by: <a href=''>News Project</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Footer }
