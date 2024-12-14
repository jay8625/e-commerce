import "../index.css";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <nav className="navigation-bar navbar navbar-expand-lg navbar-light bg-secondary position-sticky top-0">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          E-commerce
        </a>

        <button
          type="button"
          className="btn btn-light d-md-none d-block"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          title="Filter">
          <i className="bi bi-funnel"></i>
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-fullscreen-md-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel"></h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* filters on mobile is not handled here its just a UI to show responsive screen */}
                <SideBar />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal">
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
