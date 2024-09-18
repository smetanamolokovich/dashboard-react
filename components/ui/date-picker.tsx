"use client"

import { CalendarIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Calendar } from "./calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { format, startOfMonth, endOfMonth } from "date-fns";

const defaultDate = {
  from: startOfMonth(new Date()),
  to: endOfMonth(new Date()),
};

export function DatePicker() {
  const [date, setDate] = useState<DateRange | undefined>(defaultDate);

  const fromDate =
    date && date.from ? format(new Date(date.from), "PP") : defaultDate.from;
  const toDate =
    date && date.to ? format(new Date(date.to), "PP") : defaultDate.to;

  const formattedDateRange = `${fromDate} - ${toDate}`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} className="w-[260px] pl-3 text-left font-normal">
          {date ? formattedDateRange : <span>Pick a date</span>}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
        <Calendar
          mode="range"
          numberOfMonths={2}
          selected={date}
          onSelect={setDate}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
