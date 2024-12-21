import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Button from '@/components/UI/primitives/Button/Button'
import React from 'react'

const NotFoundPage = () => {
  return (
    <>
      <Header />
        <div className="notfound-page container" style={{ marginBottom: 80 }}>
          <div className="notfound-page__title">
            404
          </div>
          <div className="notfound-page__info">
            <div className="notfound-page__text">
              This page doesn&apos;t exist
            </div>
            <Button size='s' className='notfound-page__button'>Try for free</Button>
          </div>
        </div>
      <Footer className="container" />
    </>
  )
}

export default NotFoundPage