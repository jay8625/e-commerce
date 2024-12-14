import { ChangeEvent } from "react";
import { Brand } from "./enum"
import { SideBarProps } from "../Entities/types/SideBarProps";

const SideBar:React.FC<SideBarProps> = ({brandFilter=[],handleFilters,clearFilters}) => {

    const brandArray: string[] = Object.values(Brand);
    const addBrandFilter = (event:ChangeEvent<HTMLInputElement>,brand:string) => {
        handleFilters(event.target.checked,brand);
    };
    const emptyFilters = ():void => {
        clearFilters();
    }

    return (
        <div className="d-flex flex-column p-4 mb-5">
            <h5 className={brandFilter.length ? 'mb-3':'mb-4'}>Filters</h5>

            <div className={brandFilter.length ? 'mb-4':'mb-5'}>
                <div className="d-flex justify-content-between small">
                <h6>Active Filters</h6>
                {brandFilter.length > 0 && <button className="text-white rounded bg-secondary" onClick={emptyFilters}>Clear All</button>}
                </div>
                <div className="mb-2">
                    {brandFilter.map(brand=>{
                        return(
                            <span className="badge bg-secondary me-2">{brand}</span>
                        );
                    })}
                </div>
            </div>

            <div className="accordion" id="filtersAccordion">

                <div className="accordion-item">
                    <h2 className="accordion-header" id="brandHeading">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#brandCollapse"
                            aria-expanded="true"
                            aria-controls="brandCollapse"
                        >
                            Brand
                        </button>
                    </h2>
                    <div
                        id="brandCollapse"
                        className="accordion-collapse collapse show"
                        aria-labelledby="brandHeading"
                    >
                        <div className="accordion-body">
                            {brandArray.map(brand => {
                                return (
                                    <div className="form-check" key={brand}>
                                        <input className="form-check-input" type="checkbox" checked={brandFilter.some(x=>x===brand)} onChange={(e)=>addBrandFilter(e,brand)} id={brand} />
                                        <label className="form-check-label" htmlFor={brand}>
                                            {brand}
                                        </label>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="viscosityHeading">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#viscosityCollapse"
                            aria-expanded="false"
                            aria-controls="viscosityCollapse"
                        >
                            Viscosity
                        </button>
                    </h2>
                    <div
                        id="viscosityCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="viscosityHeading"
                    >
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="0w20" />
                                <label className="form-check-label" htmlFor="0w20">
                                    0W-20
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="5w30" />
                                <label className="form-check-label" htmlFor="5w30">
                                    5W-30
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="10w40" />
                                <label className="form-check-label" htmlFor="10w40">
                                    10W-40
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="sizeHeading">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#sizeCollapse"
                            aria-expanded="false"
                            aria-controls="sizeCollapse"
                        >
                            Size
                        </button>
                    </h2>
                    <div
                        id="sizeCollapse"
                        className="accordion-collapse collapse"
                        aria-labelledby="sizeHeading"
                    >
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="1quart" />
                                <label className="form-check-label" htmlFor="1quart">
                                    S - 30cm
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="5quarts" />
                                <label className="form-check-label" htmlFor="5quarts">
                                    M - 35cm
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="1gallon" />
                                <label className="form-check-label" htmlFor="1gallon">
                                    L - 45cm
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
