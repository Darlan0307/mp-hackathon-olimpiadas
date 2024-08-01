import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface PaginationListProps {
  currentPage: number;
  nextPage: () => void;
  previousPage: () => void;
}

const PaginationList = ({
  currentPage,
  nextPage,
  previousPage,
}: PaginationListProps) => {
  return (
    <Pagination>
      <PaginationContent>
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
        <PaginationItem>
          <Button>
            <span>{currentPage}</span>
          </Button>
        </PaginationItem>

        <PaginationItem>
          <Button
            disabled={currentPage === 5}
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
