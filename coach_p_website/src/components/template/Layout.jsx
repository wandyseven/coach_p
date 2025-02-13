import React from 'react';


const Layout = () => {
  return (
    <main>
        <Header />
        <section>
            <Outlet />
        </section>
            <Footer />
    </main>
  )
}

export default Layout