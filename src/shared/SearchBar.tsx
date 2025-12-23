"use client";
// import { SearchIcon, X } from 'lucide-react';
import {
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import {
  useState,
  useRef,
  useCallback,
  type KeyboardEvent,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Check, Loader2, X } from "lucide-react";
import { SanityFetch } from "@/lib/SanityFetch";

interface SearchBarI {
  name: string;
  PlaceHolder: string;
  OptionType?: string[];
  css?: string;
  InputCss?: string;
  Activevalue?: string | string[];
  MultiSelect?: boolean;
}

export const SearchBar = ({
  name,
  PlaceHolder,
  OptionType = ["area"],
  css,
  InputCss,
  Activevalue,
  MultiSelect = false,
}: SearchBarI) => {
  const [value, setvalue] = useState<Option>();
  const [MultiSelectValues, setMultiSelectValues] = useState<string[]>(
    Activevalue ? (Activevalue as string[]) : []
  );
  const [options, setOptions] = useState<Option[]>([]);
  const [isLoading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    SanityFetch({
      Query: `*[_type in ${JSON.stringify(OptionType)} ]`,
    })
      .then((data: any) => {
        const Data = data.map((items: any) =>
          items.name
            ? {
                label: items.name,
                value: items?.slug?.current ? items.slug.current : items?.name,
              }
            : {
                label: items.title,
                value: items?.slug?.current ? items.slug.current : items.title,
              }
        );
        setOptions(Data);
        setloading(false);
      })
      .catch(() => setloading(false));
  }, []);

  const FirstMultiSelectValue = options.find(
    (item) => item.value === MultiSelectValues[0]
  );

  return (
    <div
      className={`${css} flex items-center bg-white rounded w-full relative`}
    >
      {MultiSelect &&
        MultiSelect === true &&
        MultiSelectValues.length !== 0 &&
        options.length !== 0 && (
          <div className="w-fit ml-1 flex items-center gap-1">
            <div
              onClick={() =>
                setMultiSelectValues(
                  MultiSelectValues.filter(
                    (item) => item !== MultiSelectValues[0]
                  )
                )
              }
              className="cursor-pointer flex items-center gap-1 text-sm whitespace-nowrap p-1.5 font-medium text-secondary border border-secondary rounded hover:bg-secondary/5"
            >
              {FirstMultiSelectValue?.label}
              <X size={15} />
            </div>
            {MultiSelectValues.length > 1 && (
              <div
                onClick={() =>
                  setMultiSelectValues(
                    MultiSelectValues.filter(
                      (item) =>
                        item !== MultiSelectValues[MultiSelectValues.length - 1]
                    )
                  )
                }
                className="cursor-pointer flex items-center gap-1 text-sm whitespace-nowrap p-1.5 font-medium text-secondary border border-secondary rounded hover:bg-secondary/5"
              >
                {MultiSelectValues.length - 1 + " more"}
                <X size={15} />
              </div>
            )}
          </div>
        )}
      <Search
        InputCss={InputCss}
        name={MultiSelect ? "" : name}
        emptyMessage="No results found."
        onValueChange={setvalue}
        value={value}
        placeholder={PlaceHolder}
        InitialValue={
          Activevalue && typeof Activevalue !== "object"
            ? { label: Activevalue, value: Activevalue }
            : { label: "", value: "" }
        }
        OptionType={OptionType}
        MultiSelect={MultiSelect}
        MultiSelectValues={MultiSelectValues}
        setMultiSelectValues={setMultiSelectValues}
        isLoading={isLoading}
        setloading={setloading}
        options={options}
        setOptions={setOptions}
      />
      {MultiSelect && MultiSelect === true && (
        <input
          name={name}
          type="text"
          value={MultiSelectValues.join(",,")}
          className="hidden"
          readOnly
        />
      )}
    </div>
  );
};

export type Option = Record<"value" | "label", string> & Record<string, string>;

type AutoCompleteProps = {
  // options: Option[]
  emptyMessage: string;
  value?: Option;
  InitialValue?: Option;
  onValueChange?: (value: Option) => void;
  // isLoading?: boolean
  disabled?: boolean;
  placeholder?: string;
  InputCss?: string;
  refresh?: boolean;
  name: string;
  OptionType?: string[];
  MultiSelectValues: string[];
  setMultiSelectValues: Dispatch<SetStateAction<string[]>>;
  MultiSelect?: boolean;

  setloading: Dispatch<SetStateAction<boolean>>;
  isLoading?: boolean;

  setOptions: Dispatch<SetStateAction<Option[]>>;
  options?: Option[];
};

const Search = ({
  // options,
  placeholder,
  emptyMessage,
  value,
  InitialValue,
  onValueChange,
  disabled,
  // isLoading = false,
  InputCss,
  refresh,
  OptionType = ["area"],
  name,
  MultiSelect = false,
  MultiSelectValues,
  setMultiSelectValues,
  setloading,
  isLoading,
  setOptions,
  options,
}: AutoCompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option>(value as Option);

  useEffect(() => {
    setSelected({ value: "", label: "" });
  }, [refresh]);

  useEffect(() => {
    if (InitialValue) {
      const initialOption = options?.find(
        (option) => option.value === InitialValue.value
      );

      if (initialOption) {
        setSelected(initialOption);
      }
    }
  }, [options]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true);
      }

      // This is not a default behaviour of the <input /> field
      if (event.key === "Enter" && input.value !== "") {
        const optionToSelect = options?.find(
          (option) => option.label === input.value
        );
        if (optionToSelect) {
          setSelected(optionToSelect);
          onValueChange?.(optionToSelect);
        }
      }

      if (event.key === "Escape") {
        input.blur();
      }
    },
    [isOpen, options, onValueChange]
  );

  const handleBlur = useCallback(() => {
    setOpen(false);
    // setInputValue(selected?.label)
  }, [selected]);

  const handleSelectOption = useCallback(
    (selectedOption: Option) => {
      if (MultiSelect === false) {
        setSelected(selectedOption);
        onValueChange?.(selectedOption);
      }

      // This is a hack to prevent the input from being focused after the user selects an option
      // We can call this hack: "The next tick"
      setTimeout(() => {
        inputRef?.current?.blur();
      }, 0);
    },
    [onValueChange]
  );

  return (
    <CommandPrimitive
      shouldFilter={true}
      className="w-full"
      onKeyDown={handleKeyDown}
    >
      <div className={`w-full`}>
        <CommandInput
          className={InputCss}
          // name={name}
          ref={inputRef}
          value={selected?.label}
          onValueChange={
            isLoading ? undefined : (e) => setSelected({ label: e, value: e })
          }
          onBlur={handleBlur}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
        />
        <input
          value={selected?.value !== "" ? selected?.value : selected.label}
          name={name}
          type="text"
          className="hidden"
          readOnly
        />
      </div>

      <div className="sm:relative">
        {isOpen ? (
          <div className="absolute max-sm:!left-0 sm:top-1 top-12 z-50 w-full rounded bg-stone-50 outline-none animate-in fade-in-0 zoom-in-95">
            <CommandList className="rounded">
              {isLoading ? (
                <CommandPrimitive.Loading>
                  <div className="p-1 relative flex items-center justify-center">
                    <Skeleton className="h-8 w-full" />
                    <Loader2
                      className="absolute stroke-secondary animate-spin"
                      strokeWidth={1.3}
                    />
                  </div>
                </CommandPrimitive.Loading>
              ) : null}
              {options && options.length > 0 && !isLoading ? (
                <CommandGroup>
                  {MultiSelect &&
                    MultiSelect === true &&
                    MultiSelectValues.length !== 0 && (
                      <div className="w-fit m-1 flex items-center flex-wrap gap-2">
                        {MultiSelectValues.map((items: string, i: number) => {
                          const MultiSelectOption = options?.find(
                            (option) => option.value === items
                          );

                          return (
                            <div
                              key={i}
                              onMouseDown={() =>
                                setMultiSelectValues(
                                  MultiSelectValues.filter(
                                    (item) => item !== items
                                  )
                                )
                              }
                              className="cursor-pointer flex items-center gap-1 text-sm whitespace-nowrap p-1.5 font-medium text-secondary border border-secondary rounded hover:bg-secondary/5"
                            >
                              {MultiSelectOption?.label}
                              <X size={15} />
                            </div>
                          );
                        })}
                      </div>
                    )}

                  {options.map((option, i: number) => {
                    const isSelected = selected?.value === option.value;
                    return (
                      <CommandItem
                        key={i}
                        value={option.value}
                        onMouseDown={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                        }}
                        onSelect={() => {
                          handleSelectOption(option);
                          setMultiSelectValues([
                            ...MultiSelectValues,
                            option.value,
                          ]);
                          MultiSelect && setSelected({ label: "", value: "" });
                        }}
                        className={cn(
                          "flex cursor-pointer hover:!text-secondary items-center gap-2 w-full transition-all duration-300",
                          !isSelected ? "pl-8" : null,
                          MultiSelect &&
                            MultiSelectValues.includes(option.value)
                            ? "hidden"
                            : null
                        )}
                      >
                        {isSelected ? <Check className="w-4" /> : null}
                        {option.label}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              ) : null}
              {!isLoading ? (
                <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-sm text-center">
                  {emptyMessage}
                </CommandPrimitive.Empty>
              ) : null}
            </CommandList>
          </div>
        ) : null}
      </div>
    </CommandPrimitive>
  );
};
