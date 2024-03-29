import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-transparent" style={{ color: '#122231' }}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              {/* <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link href="/stories">Stories</Link>
              </li>
              <li>
                <Link href="/">Secured</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Kiddo Alert</a>
        </div>

        <div className="navbar-center hidden lg:flex" style={{ color: '#122231' }}>
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            {/* <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-white">
                  <li>
                    <Link href="/">Submenu 1</Link>
                  </li>
                  <li>
                    <Link href="/">Submenu 2</Link>
                  </li>
                </ul>
              </details>
            </li> */}
            <li>
              <Link href="/stories">Stories</Link>
            </li>
            <li>
              <Link href="/stories">Secured</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  )
}

export default Nav
