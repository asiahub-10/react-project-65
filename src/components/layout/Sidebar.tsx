import { useState } from "react";
import { NavLink } from "react-router-dom"

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <>
    <input type="checkbox" id="sidebarMenu" className="d-none" />
    <label htmlFor="sidebarMenu" className="bg-layer"></label>
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
              <a href="index.html" className="app-brand-link">
                <span className="app-brand-logo demo">                  
                </span>
                <span className="app-brand-text demo menu-text fw-bolder ms-2">Sneat</span>
              </a>
              <label htmlFor="sidebarMenu" className="menu-link fs-1 text-danger ms-auto d-block d-xl-none">×</label>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
              {/* Dashboard */}
              <NavLink to="/" className="menu-item">
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Dashboard</div>
                </li>
              </NavLink>

              {/* Custom Menu */}
              <li className="menu-item">
                <NavLink to="/pos" className="menu-link" target="_blank">
                  <i className="menu-icon tf-icons bx bx-layout"></i>
                  <div data-i18n="Analytics">POS</div>
                </NavLink>
              </li>              
              <NavLink to="/products" className={({isActive})=>isActive ? "menu-item active" : "menu-item"}>
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-box"></i>
                  <div data-i18n="Analytics">Products</div>
                </li>
              </NavLink>
              <NavLink to="/sales" className="menu-item">
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-clipboard"></i>
                  <div data-i18n="Analytics">Sales</div>
                </li>
              </NavLink>
              <NavLink to="/users" className="menu-item">
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-user"></i>
                  <div data-i18n="Analytics">Users</div>
                </li>
              </NavLink>
              <NavLink to="/roles" className="menu-item">
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-briefcase-alt-2"></i>
                  <div data-i18n="Analytics">Role</div>
                </li>
              </NavLink>
              <NavLink to="/product-tags" className="menu-item">
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-tag"></i>
                  <div data-i18n="Analytics">Product Tags</div>
                </li>
              </NavLink>
              <NavLink to="/categories" className="menu-item">
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-box"></i>
                  <div data-i18n="Analytics">Categories</div>
                </li>
              </NavLink>
              <NavLink to="/posts" className="menu-item">
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-message-minus"></i>
                  <div data-i18n="Analytics">Posts</div>
                </li>
              </NavLink>

              {/* Layouts */}
               <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Layout</span>
              </li>
              <li className="menu-item">
                <span onClick={toggle} className="menu-link menu-toggle cursor-pointer">
                  <i className="menu-icon tf-icons bx bx-layout"></i>
                  <div data-i18n="Layouts">Layouts</div>
                </span>
                <ul className={`menu-sub ${isOpen ? 'open' : 'closed'}`}>
                  <li className="menu-item">
                    <a href="layouts-without-menu.html" className="menu-link">
                      <div data-i18n="Without menu">Without menu</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-without-navbar.html" className="menu-link">
                      <div data-i18n="Without navbar">Without navbar</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-container.html" className="menu-link">
                      <div data-i18n="Container">Container</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-fluid.html" className="menu-link">
                      <div data-i18n="Fluid">Fluid</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="layouts-blank.html" className="menu-link">
                      <div data-i18n="Blank">Blank</div>
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
    </aside>
    </>
  )
}

export default Sidebar