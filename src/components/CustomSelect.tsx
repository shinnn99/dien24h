import { Check, ChevronDown } from 'lucide-react'
import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { CSSProperties, KeyboardEvent } from 'react'

export type CustomSelectOption = {
  label: string
  value: string
  disabled?: boolean
}

type CustomSelectProps = {
  options: readonly (string | CustomSelectOption)[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  label?: string
  hideLabel?: boolean
  placeholder?: string
  ariaLabel?: string
  name?: string
  required?: boolean
  className?: string
}

const normalizeOptions = (options: CustomSelectProps['options']): CustomSelectOption[] =>
  options.map(option => typeof option === 'string'
    ? { label: option, value: option }
    : option)

export function CustomSelect({
  options,
  value,
  defaultValue,
  onChange,
  label,
  hideLabel = false,
  placeholder,
  ariaLabel,
  name,
  required = false,
  className = '',
}: CustomSelectProps) {
  const normalizedOptions = normalizeOptions(options)
  const firstEnabled = normalizedOptions.find(option => !option.disabled)?.value ?? ''
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? (placeholder ? '' : firstEnabled),
  )
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [invalid, setInvalid] = useState(false)
  const [menuStyle, setMenuStyle] = useState<CSSProperties>({})
  const [menuSide, setMenuSide] = useState<'top' | 'bottom'>('bottom')
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const typeaheadRef = useRef('')
  const typeaheadTimerRef = useRef<number | undefined>(undefined)
  const selectId = useId()
  const labelId = `${selectId}-label`
  const listboxId = `${selectId}-listbox`
  const errorId = `${selectId}-error`
  const accessibleLabel = label ?? ariaLabel ?? placeholder ?? 'Danh sách lựa chọn'
  const currentValue = value ?? internalValue
  const selectedIndex = normalizedOptions.findIndex(option => option.value === currentValue)
  const selectedOption = selectedIndex >= 0 ? normalizedOptions[selectedIndex] : undefined
  const validationMessage = label
    ? `Vui lòng chọn ${label.replace(/\s*\*$/, '').toLocaleLowerCase('vi')}.`
    : 'Vui lòng chọn một mục.'

  const updateMenuPosition = () => {
    const trigger = triggerRef.current
    const menu = menuRef.current
    if (!trigger || !menu) return

    const viewportPadding = 12
    const gap = 7
    const triggerRect = trigger.getBoundingClientRect()
    const width = Math.min(
      Math.max(triggerRect.width, 220),
      window.innerWidth - viewportPadding * 2,
    )
    const left = Math.min(
      Math.max(triggerRect.left, viewportPadding),
      window.innerWidth - width - viewportPadding,
    )
    const naturalHeight = Math.min(menu.scrollHeight, 320)
    const spaceBelow = window.innerHeight - triggerRect.bottom - viewportPadding
    const spaceAbove = triggerRect.top - viewportPadding
    const openAbove = spaceBelow < Math.min(naturalHeight, 220) && spaceAbove > spaceBelow
    const availableSpace = openAbove ? spaceAbove : spaceBelow

    setMenuSide(openAbove ? 'top' : 'bottom')
    setMenuStyle({
      left,
      width,
      maxHeight: Math.max(48, Math.min(320, availableSpace - gap)),
      top: openAbove ? undefined : triggerRect.bottom + gap,
      bottom: openAbove ? window.innerHeight - triggerRect.top + gap : undefined,
    })
  }

  useEffect(() => {
    if (!open) return
    const closeOutside = (event: PointerEvent) => {
      const target = event.target as Node
      if (!rootRef.current?.contains(target) && !menuRef.current?.contains(target)) setOpen(false)
    }
    document.addEventListener('pointerdown', closeOutside)
    return () => document.removeEventListener('pointerdown', closeOutside)
  }, [open])

  useEffect(() => {
    const closeWhenAnotherSelectOpens = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== selectId) setOpen(false)
    }
    window.addEventListener('dien24h:select-open', closeWhenAnotherSelectOpens)
    return () => window.removeEventListener('dien24h:select-open', closeWhenAnotherSelectOpens)
  }, [selectId])

  useEffect(() => () => {
    if (typeaheadTimerRef.current !== undefined) {
      window.clearTimeout(typeaheadTimerRef.current)
    }
  }, [])

  useEffect(() => {
    if (currentValue) setInvalid(false)
  }, [currentValue])

  useEffect(() => {
    if (value !== undefined) return
    const form = triggerRef.current?.closest('form')
    if (!form) return

    const resetSelect = () => {
      setInternalValue(defaultValue ?? (placeholder ? '' : firstEnabled))
      setInvalid(false)
      setOpen(false)
    }
    form.addEventListener('reset', resetSelect)
    return () => form.removeEventListener('reset', resetSelect)
  }, [defaultValue, firstEnabled, placeholder, value])

  useEffect(() => {
    if (!open) return
    const closeForViewportChange = (event: Event) => {
      if (event.type === 'scroll' && menuRef.current?.contains(event.target as Node)) return
      setOpen(false)
    }
    window.addEventListener('resize', closeForViewportChange)
    document.addEventListener('scroll', closeForViewportChange, true)
    return () => {
      window.removeEventListener('resize', closeForViewportChange)
      document.removeEventListener('scroll', closeForViewportChange, true)
    }
  }, [open])

  useLayoutEffect(() => {
    if (open) updateMenuPosition()
  }, [open])

  useLayoutEffect(() => {
    if (!open || activeIndex < 0) return
    document
      .getElementById(`${selectId}-option-${activeIndex}`)
      ?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, open, selectId])

  const enabledIndices = normalizedOptions
    .map((option, index) => option.disabled ? -1 : index)
    .filter(index => index >= 0)

  const openMenu = (fromEnd = false) => {
    if (!enabledIndices.length) return
    const fallback = fromEnd ? enabledIndices[enabledIndices.length - 1] : enabledIndices[0]
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : fallback)
    window.dispatchEvent(new CustomEvent('dien24h:select-open', { detail: selectId }))
    setOpen(true)
  }

  const selectOption = (index: number, restoreFocus = true) => {
    const option = normalizedOptions[index]
    if (!option || option.disabled) return
    if (value === undefined) setInternalValue(option.value)
    onChange?.(option.value)
    typeaheadRef.current = ''
    setInvalid(false)
    setOpen(false)
    if (restoreFocus) triggerRef.current?.focus()
  }

  const moveActive = (direction: 1 | -1) => {
    if (!enabledIndices.length) return
    const currentPosition = enabledIndices.indexOf(activeIndex)
    const nextPosition = currentPosition < 0
      ? (direction === 1 ? 0 : enabledIndices.length - 1)
      : (currentPosition + direction + enabledIndices.length) % enabledIndices.length
    setActiveIndex(enabledIndices[nextPosition])
  }

  const moveToTypedOption = (key: string) => {
    const normalizedKey = key.toLocaleLowerCase('vi')
    const nextBuffer = `${typeaheadRef.current}${normalizedKey}`
    typeaheadRef.current = nextBuffer
    if (typeaheadTimerRef.current !== undefined) {
      window.clearTimeout(typeaheadTimerRef.current)
    }
    typeaheadTimerRef.current = window.setTimeout(() => {
      typeaheadRef.current = ''
      typeaheadTimerRef.current = undefined
    }, 500)

    const search = nextBuffer.split('').every(character => character === normalizedKey)
      ? normalizedKey
      : nextBuffer
    const currentPosition = enabledIndices.indexOf(open ? activeIndex : selectedIndex)
    const orderedIndices = [
      ...enabledIndices.slice(currentPosition + 1),
      ...enabledIndices.slice(0, currentPosition + 1),
    ]
    const match = orderedIndices.find(index =>
      normalizedOptions[index].label.toLocaleLowerCase('vi').startsWith(search))

    if (match === undefined) return
    if (!open) {
      window.dispatchEvent(new CustomEvent('dien24h:select-open', { detail: selectId }))
      setOpen(true)
    }
    setActiveIndex(match)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      if (!open) openMenu(event.key === 'ArrowUp')
      else moveActive(event.key === 'ArrowDown' ? 1 : -1)
      return
    }
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault()
      if (!open) openMenu(event.key === 'End')
      else {
        setActiveIndex(event.key === 'Home'
          ? enabledIndices[0]
          : enabledIndices[enabledIndices.length - 1])
      }
      return
    }
    if (
      event.key.length === 1
      && event.key !== ' '
      && !event.altKey
      && !event.ctrlKey
      && !event.metaKey
    ) {
      event.preventDefault()
      moveToTypedOption(event.key)
      return
    }
    if (!open) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      selectOption(activeIndex)
    } else if (event.key === 'Escape') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Tab') {
      selectOption(activeIndex, false)
    }
  }

  return (
    <div
      ref={rootRef}
      className={`custom-select ${open ? 'is-open' : ''} ${invalid ? 'is-invalid' : ''} ${className}`.trim()}
    >
      {label && (
        <label
          id={labelId}
          htmlFor={selectId}
          className={`custom-select-label ${hideLabel ? 'is-visually-hidden' : ''}`}
        >
          {label}
        </label>
      )}
      <button
        id={selectId}
        ref={triggerRef}
        type="button"
        className="custom-select-trigger"
        role="combobox"
        aria-label={label ? undefined : accessibleLabel}
        aria-labelledby={label ? labelId : undefined}
        aria-controls={listboxId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-required={required || undefined}
        aria-activedescendant={open && activeIndex >= 0 ? `${selectId}-option-${activeIndex}` : undefined}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? errorId : undefined}
        onClick={() => open ? setOpen(false) : openMenu()}
        onKeyDown={handleKeyDown}
      >
        <span className={`custom-select-value ${selectedOption ? '' : 'is-placeholder'}`}>
          {selectedOption?.label ?? placeholder ?? 'Chọn một mục'}
        </span>
        <ChevronDown className="custom-select-chevron" size={19} strokeWidth={2.2} />
      </button>

      {open && createPortal(
        <div
          ref={menuRef}
          id={listboxId}
          className="custom-select-menu"
          role="listbox"
          aria-label={accessibleLabel}
          data-side={menuSide}
          style={menuStyle}
        >
          {normalizedOptions.map((option, index) => (
            <button
              id={`${selectId}-option-${index}`}
              key={option.value}
              type="button"
              role="option"
              tabIndex={-1}
              aria-selected={option.value === currentValue}
              disabled={option.disabled}
              className={[
                'custom-select-option',
                option.value === currentValue ? 'is-selected' : '',
                index === activeIndex ? 'is-active' : '',
              ].filter(Boolean).join(' ')}
              onMouseEnter={() => !option.disabled && setActiveIndex(index)}
              onPointerDown={event => event.preventDefault()}
              onClick={() => selectOption(index)}
            >
              <span>{option.label}</span>
              {option.value === currentValue && <Check size={17} strokeWidth={2.4} />}
            </button>
          ))}
        </div>,
        document.body,
      )}

      {(required || name) && (
        <select
          className="custom-select-native"
          name={name}
          value={currentValue}
          required={required}
          tabIndex={-1}
          aria-hidden="true"
          onChange={() => undefined}
          onInvalid={event => {
            event.preventDefault()
            setInvalid(true)
            const firstInvalidControl = event.currentTarget.form?.querySelector(':invalid')
            if (firstInvalidControl === event.currentTarget) {
              openMenu()
              requestAnimationFrame(() => triggerRef.current?.focus())
            }
          }}
        >
          <option value="" />
          {normalizedOptions.map(option => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      {invalid && <span id={errorId} className="custom-select-error" role="alert">{validationMessage}</span>}
    </div>
  )
}
