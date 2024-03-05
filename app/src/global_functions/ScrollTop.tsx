const ScrollTop = (props: any) => {
  const { children } = props

  const handleClick = () => {
    const anchor = document.querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div onClick={handleClick} role='presentation' style={{ position: 'fixed', bottom: 16, right: 16, cursor: 'pointer' }}>
      {children}
    </div>
  )
}

export { ScrollTop }
