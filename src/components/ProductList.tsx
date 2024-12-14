import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import products from "../Entities/Products.json";
import { Product } from "../Entities/Product";
import { Filters } from "../Entities/filters";

const ProductList = (filters: Filters) => {
  const itemsPerPage: number = 6;
  const [product, setProduct] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSort, setSelectedSort] = useState<string>("Sort");

  const filteredData: Product[] = product.filter((x) => {
    return (
      filters.brandFilter.length === 0 || filters.brandFilter.includes(x.brand)
    );
  });
  const totalPages: number = Math.ceil(filteredData.length / itemsPerPage);
  const displayedData: Product[] = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect((): void => {
    setProduct(products);
    setCurrentPage(1)
  }, [filters]);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const sortProducts = (prize: string): void => {
    setSelectedSort(
      prize === "low" ? "Prize low to high" : "Prize high to low"
    );
    const sortedProduct = [...product].sort((x, y) => {
      const priceX = Number(x.price);
      const priceY = Number(y.price);

      if (prize === "low") {
        return priceX - priceY;
      } else if (prize === "high") {
        return priceY - priceX;
      } else {
        return 0;
      }
    });
    setProduct(sortedProduct);
  };

  return (
    <div className="offset-md-3 col-md-9">
      <div className="py-3 px-3 justify-content-between d-flex">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle d-none d-md-block"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            {selectedSort}
          </button>
          <button
            className="btn btn-secondary dropdown-toggle d-md-none d-block"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Sort
          </button>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2">
            <li>
              <button
                className="btn-light dropdown-item"
                onClick={() => sortProducts("low")}
                title="Prize low to high">
                Prize low to high
              </button>
            </li>
            <li>
              <button
                className="btn-light dropdown-item"
                onClick={() => sortProducts("high")}
                title="Prize high to low">
                Prize high to low
              </button>
            </li>
          </ul>
        </div>
        <span className="d-none d-md-block">
          Showing {currentPage * itemsPerPage - itemsPerPage + 1}-
          {currentPage * itemsPerPage > filteredData.length
            ? filteredData.length
            : currentPage * itemsPerPage}{" "}
          of {filteredData.length}
        </span>
        {totalPages > 1 && <nav>
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link text-dark btn-light"
                onClick={() =>
                  handlePageChange(
                    currentPage - 1 < 1 ? currentPage : currentPage - 1
                  )
                }>
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              if (
                currentPage === pageNumber ||
                pageNumber === currentPage + 1 ||
                pageNumber === currentPage - 1)
                return (
                  <li
                    key={pageNumber}
                    className={`page-item ${
                      pageNumber === currentPage && "active"
                    }`}>
                    <button
                      className={`page-link text-dark btn-light ${
                        pageNumber === currentPage && "bg-secondary text-white"
                      }`}
                      onClick={() => handlePageChange(pageNumber)}>
                      {pageNumber}
                    </button>
                  </li>
                );
            })}
            <li className="page-item">
              <button
                className="page-link text-dark btn-light"
                onClick={() =>
                  handlePageChange(
                    currentPage + 1 > totalPages ? currentPage : currentPage + 1
                  )
                }>
                Next
              </button>
            </li>
          </ul>
        </nav>}
      </div>
      <div className="row m-0">
        {displayedData.map((product, index) => (
          <div className="col-md-4 col-6 mb-4 p-2" key={index}>
            <ProductCard {...product}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
