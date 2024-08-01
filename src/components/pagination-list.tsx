import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface PaginationListProps {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  previousPage: () => void;
  goToPage: (page: number) => void;
}

const PaginationList = ({
  currentPage,
  nextPage,
  previousPage,
  totalPages,
  goToPage,
}: PaginationListProps) => {
  return (
    <Pagination>
      <PaginationContent className="flex flex-wrap gap-4 justify-center p-2">
        <PaginationItem>
          <Button
            disabled={currentPage === 1}
            onClick={() => {
              previousPage();
            }}
            variant="secondary"
          >
            <ChevronLeftIcon className="h-4 w-4" />
            <span>Previous</span>
          </Button>
        </PaginationItem>

        {currentPage > 1 && (
          <PaginationItem>
            <Button onClick={() => goToPage(1)} variant="secondary">
              <span>1</span>
            </Button>
          </PaginationItem>
        )}
        {currentPage > 2 && (
          <PaginationItem>
            <Button onClick={() => goToPage(2)} variant="secondary">
              <span>2</span>
            </Button>
          </PaginationItem>
        )}
        {currentPage > 3 && currentPage < 4 && (
          <PaginationItem>
            <Button onClick={() => goToPage(3)} variant="secondary">
              <span>3</span>
            </Button>
          </PaginationItem>
        )}

        {currentPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <Button>
            <span>{currentPage}</span>
          </Button>
        </PaginationItem>

        {currentPage < totalPages - 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPage < totalPages && (
          <PaginationItem>
            <Button onClick={() => goToPage(totalPages)} variant="secondary">
              <span>{totalPages}</span>
            </Button>
          </PaginationItem>
        )}

        <PaginationItem>
          <Button
            disabled={currentPage === totalPages}
            onClick={() => {
              nextPage();
            }}
            variant="secondary"
          >
            <span>Next</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationList;
