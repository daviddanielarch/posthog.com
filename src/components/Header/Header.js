import React, { Component } from 'react'
import { Link } from 'gatsby'
import Menu from '../Menu'
import logo from '../../images/posthog-logo-lg.svg'
import smallLogo from '../../images/posthog-logo-150x29.svg'
import whiteLogo from '../../images/posthog-logo-white.svg'
import { getMenuState } from '../../store/selectors'
import { connect } from 'react-redux'


class Header extends Component {
  render() {
    const { sidebarDocked, onPostPage, sidebarHide, screenIsSmall, isBlogPage } = this.props

    return (
      <div className={"menuHeaderWrapper " + (onPostPage && "docsHeaderWrapper ") + (isBlogPage && "blogPostHeaderWrapper")}>
          {screenIsSmall ? (
          <Link
            id="logo"
            to="/">
            <img alt="logo" src={smallLogo} id="logo-image-header"/>
          </Link>
          ) : (
            (isBlogPage || !onPostPage) ? (
            <Link
            id="logo"
            to="/">
              {isBlogPage ? (
                <img alt="logo" src={whiteLogo} id="logo-image-header"/>
              ):(
                <img alt="logo" src={logo} id="logo-image-header"/>
              )}
            
          </Link>
            ) : (
              <div/>
            )
          )}
        <Menu 
        sidebarDocked={sidebarDocked}
        sidebarHide={sidebarHide}
        isBlogPage={isBlogPage} 
        screenIsSmall={screenIsSmall}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuOpen: getMenuState(state).open,
    nMenuItem: getMenuState(state).nItem,
  }
}

export default connect(mapStateToProps)(Header)
