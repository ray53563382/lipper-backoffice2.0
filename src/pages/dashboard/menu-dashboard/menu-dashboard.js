import TranslateService from "../../../services/translate-service";
import Logo from "../../../assets/images/login/Logo.png";
import iconButtonPlus from "../../../assets/images/dashboard/buttonPlus.png";
import imgUser from "../../../assets/images/dashboard/imgUser.png";
import iconRight from "../../../assets/images/dashboard/iconRight.png";
import * as Icon from "react-bootstrap-icons";
import Dashboard from "../pages/dashboard/dashboard";
import Collaborators from "../pages/collaborators/collaborators";
import Contacts from "../pages/contacts/contacts";
import Profile from "../pages/profile/profile"
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Contents from "../pages/contents/contents";
import Templates from "../pages/templates/templates";
import "./menu-dashboard.scss";

export default function MenuDashboard() {
  return (
    <div className="menu-dashboard-page">
      <div className="menu-dashboard-sidebar">
        <div>
          <img src={Logo} className="menu-dashboard-image" alt="" />
        </div>
        <div className="menu-dashboard-title-content  ">
          <Icon.Grid1x2Fill className="iconDashboard" />
          <div>
            <Link to="/dashboard">{TranslateService.get("dashboard.title")}</Link>
          </div>
        </div>
        <div className="menu-dashboard-content">
          <div className="menu-dashboard-subtitle">
            <strong>{TranslateService.get("dashboard.label.subtitle.administrate")}</strong>
          </div>

          <div className="">
            <div className="menu-dasboard-row menu-dashboard-active">
              <div>
                <Icon.PersonFill className="iconDashboard"/>
                <Link to="/dashboard/collaborators">{TranslateService.get("dashboard.label.collaborators")} </Link>
              </div>
              <div>
                <img src={iconButtonPlus} className="iconDashboard" alt="" />
              </div>
            </div>
            <div className="menu-dasboard-row">
              <div>
                <Icon.PersonBadgeFill className="iconDashboard" />
                <Link to="/dashboard/contacts">{TranslateService.get("dashboard.label.contacts")}</Link>
              </div>
              <div>
                <img src={iconButtonPlus} className="iconDashboard" alt="" />
              </div>
            </div>
            <div className="menu-dasboard-row">
              <div>
                <Icon.MortarboardFill className="iconDashboard" />
                <Link to="/dashboard/contents">{TranslateService.get("dashboard.label.materials")}</Link>
              </div>
              <div>
                <img src={iconButtonPlus} className="iconDashboard" alt="" />
              </div>
            </div>
          </div>
          <div className="menu-dashboard-subtitle">
            <strong>{TranslateService.get("dashboard.label.subtitle.plataform")}</strong>
          </div>
          <div className="menu-dasboard-content">
            <div className="menu-dasboard-row">
              <div>
                <Icon.GearFill className="iconDashboard" />
                <Link to="/dashboard">{TranslateService.get("dashboard.label.settings")} </Link>
              </div>
              <div>
                <img src={iconButtonPlus} className="iconDashboard" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="menu-dasboard-footer">
          <Link to="/dashboard/profile">
            <div className="menu-dasboard-row-footer">
              <div>
                <img src={imgUser} alt="" />
              </div>
              <div>Darla García</div>
              <div>
                <img src={iconRight} alt="" />
              </div>
            </div>
          </Link>
          <div className="menu-dasboard-row-footer-close-session">
            <p>{TranslateService.get("dashboard.label.singOff")}</p>
          </div>
        </div>
      </div>
      <div className="menu-dashboard-content-page">
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/collaborators" exact element={<Collaborators />} />
          <Route path="/contacts" exact element={<Contacts />} />
          <Route path="/contents" exact element={<Contents />} />
          <Route path="/templates" exact element={<Templates />} />
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
