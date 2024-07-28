import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface AlgoPaginationProps {
  className?: string;
  page: number;
  setPage: (page: number) => void;
  total: number;
  limit?: number;
}

const AlgoPagination: React.FC<AlgoPaginationProps> = ({
  className = "mt-8",
  page,
  setPage,
  total,
  limit = 10,
}) => {
  const totalPages = Math.ceil(total / limit);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const renderPaginationItems = () => {
    const items = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              className={`cursor-pointer ${
                i === page
                  ? "bg-primary text-white hover:bg-primary hover:text-white"
                  : ""
              }`}
              isActive={i === page}
              onClick={() => setPage(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            className={`cursor-pointer ${
              1 === page
                ? "bg-primary text-white hover:bg-primary hover:text-white"
                : ""
            }`}
            isActive={1 === page}
            onClick={() => setPage(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      if (page > 3) {
        items.push(
          <PaginationItem key="ellipsis-prev">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      const startPage = Math.max(2, page - 1);
      const endPage = Math.min(totalPages - 1, page + 1);

      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              className={`cursor-pointer ${
                i === page
                  ? "bg-primary text-white hover:bg-primary hover:text-white"
                  : ""
              }`}
              isActive={i === page}
              onClick={() => setPage(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (page < totalPages - 2) {
        items.push(
          <PaginationItem key="ellipsis-next">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            className={`cursor-pointer ${
              totalPages === page
                ? "bg-primary text-white hover:bg-primary hover:text-white"
                : ""
            }`}
            isActive={totalPages === page}
            onClick={() => setPage(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <Pagination className={`select-none ${className}`}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`cursor-pointer ${page === 1 ? "disabled" : ""}`}
            onClick={handlePrevious}
          />
        </PaginationItem>
        {renderPaginationItems()}
        <PaginationItem>
          <PaginationNext
            className={`cursor-pointer ${
              page === totalPages ? "disabled" : ""
            }`}
            onClick={handleNext}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default AlgoPagination;
