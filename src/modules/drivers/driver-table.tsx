import dayjs from "dayjs";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Button } from "../../components/ui/button";
import { ListFilter, Settings2Icon } from "lucide-react";
import AlgoSearch from "../../components/ui/search-bar";
import AlgoTable from "../../components/table";
import { Badge } from "../../components/ui/badge";
import { drivers, driverTableColumns, filters, tabs } from "./common";

const DriverTable = () => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterClick = (filterValue: string) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filterValue)) {
        return prevFilters.filter((value) => value !== filterValue);
      } else {
        return [...prevFilters, filterValue];
      }
    });
  };

  //   table data
  const tableData = drivers?.map((data) => ({
    user: (
      <>
        <div className="font-medium">{data.customer}</div>
        <div className="hidden text-sm text-muted-foreground md:inline">
          {data.email}
        </div>
      </>
    ),
    date: dayjs(data.date).format("DD MMM YYYY"),
    type: data?.type,
    amount: data?.amount,
    status: (
      <Badge variant={data.statusVariant}>
        {data.status}
      </Badge>
    ),
  }));

  return (
    <div className="border rounded-lg p-6 mt-4">
      <div className="flb mb-6">
        <Tabs defaultValue={selectedTab}>
          <TabsList>
            {tabs?.map((tab, index) => (
              <TabsTrigger
                onClick={() => setSelectedTab(tab.value)}
                key={index}
                value={tab.value}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="fl">
          <AlgoSearch
            setValue={setSearchValue}
            value={searchValue}
            placeholder="Search orders..."
            className="w-[360px]"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-10 gap-1 text-sm"
              >
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="fl">
                <Settings2Icon className="h-4" /> Filter by
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {filters?.map((filter, index) => (
                <DropdownMenuCheckboxItem
                  key={index}
                  onClick={() => handleFilterClick(filter.value)}
                  checked={selectedFilters.includes(filter.value)}
                >
                  {filter.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <AlgoTable
        columns={driverTableColumns}
        data={tableData || []}
        totalDataCount={drivers?.length || 0}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default DriverTable;
