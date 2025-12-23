"use client"

import { CommandGroup, CommandItem, CommandList, CommandInput } from "@/components/ui/command"
import { Command as CommandPrimitive } from "cmdk"
import { useState, useRef, useCallback, type KeyboardEvent, useEffect } from "react"

import { Skeleton } from "./skeleton"
import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react"
import { SanityFetch } from "@/lib/SanityFetch"

export type Option = Record<"value" | "label", string> & Record<string, string>

type AutoCompleteProps = {
  // options: Option[]
  emptyMessage: string
  value?: Option;
  InitialValue?: Option,
  onValueChange?: (value: Option) => void
  // isLoading?: boolean
  disabled?: boolean
  placeholder?: string;
  InputCss?: string;
  refresh?: boolean;
  name: string;
  OptionType?: string
}

export const Search = ({
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
  OptionType = "area",
  name
}: AutoCompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [options, setOptions] = useState<Option[]>()
  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState<Option>(value as Option)
  const [inputValue, setInputValue] = useState<string>(value?.label || "")
  const [isLoading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    SanityFetch({
      Query: `*[_type in ['${OptionType}'] ] { title }`
    }).then((data: any) => {
      const Data = data.map((items: any) => ({ label: items.title, value: items.title }));
      setOptions(Data);
      setloading(false);
    }).catch(() => setloading(false))
  }, [])

  // useEffect(() => {
  //   setInputValue("")
  //   setSelected({ value: "", label: "" })
  // }, [refresh])

  useEffect(() => {
    if (InitialValue) {
      setSelected(InitialValue)
      setInputValue(InitialValue.value)
    }
  }, [])


  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (!input) {
        return
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true)
      }

      // This is not a default behaviour of the <input /> field
      if (event.key === "Enter" && input.value !== "") {
        const optionToSelect = options?.find((option) => option.label === input.value)
        if (optionToSelect) {
          setSelected(optionToSelect)
          onValueChange?.(optionToSelect)
        }
      }

      if (event.key === "Escape") {
        input.blur()
      }
    },
    [isOpen, options, onValueChange]
  )

  const handleBlur = useCallback(() => {
    setOpen(false)
    // setInputValue(selected?.label)
  }, [selected])

  const handleSelectOption = useCallback(
    (selectedOption: Option) => {
      setInputValue(selectedOption.label)

      setSelected(selectedOption)
      onValueChange?.(selectedOption)

      // This is a hack to prevent the input from being focused after the user selects an option
      // We can call this hack: "The next tick"
      setTimeout(() => {
        inputRef?.current?.blur()
      }, 0)
    },
    [onValueChange]
  )

  return (
    <CommandPrimitive className="w-full" onKeyDown={handleKeyDown}>
      <div className={`w-full ${InputCss}`}>
        <CommandInput
          name={name}
          ref={inputRef}
          value={inputValue}
          onValueChange={isLoading ? undefined : setInputValue}
          onBlur={handleBlur}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
        />
        {/* <X size={20} className={`cursor-pointer relative z-50 stroke-red-600 transition-all duration-300`} /> */}
      </div>

      <div className="relative">
        {isOpen ? (
          <div className="absolute top-1 z-50 w-full rounded bg-stone-50 outline-none animate-in fade-in-0 zoom-in-95">
            <CommandList className="rounded">
              {isLoading ? (
                <CommandPrimitive.Loading>
                  <div className="p-1">
                    <Skeleton className="h-8 w-full" />
                  </div>
                </CommandPrimitive.Loading>
              ) : null}
              {options && options.length > 0 && !isLoading ? (
                <CommandGroup>
                  {options.map((option) => {
                    const isSelected = selected?.value === option.value
                    return (
                      <CommandItem
                        key={option.value}
                        value={option.label}
                        onMouseDown={(event) => {
                          event.preventDefault()
                          event.stopPropagation()
                        }}
                        onSelect={() => handleSelectOption(option)}
                        className={cn("flex items-center gap-2 w-full", !isSelected ? "pl-8" : null)}
                      >
                        {isSelected ? <Check className="w-4" /> : null}
                        {option.label}
                      </CommandItem>
                    )
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
  )
}