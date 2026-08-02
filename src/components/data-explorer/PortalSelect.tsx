'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, ChevronDown } from 'lucide-react';
import type { SelectOption } from '@/ui';

interface PortalSelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: 'sm' | 'md';
  className?: string;
  id?: string;
}

interface PanelPosition {
  top: number;
  left: number;
  width: number;
  maxHeight: number;
}

export function PortalSelect({
  options,
  value = '',
  onChange,
  placeholder = 'Pilih opsi',
  disabled = false,
  size = 'sm',
  className,
  id,
}: PortalSelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const listboxId = `${selectId}-listbox`;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [position, setPosition] = useState<PanelPosition | null>(null);
  const selectedIndex = Math.max(0, options.findIndex((option) => option.value === value));
  const selectedOption = options.find((option) => option.value === value);

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    const viewportGap = 8;
    const preferredHeight = Math.min(256, options.length * 38 + 8);
    const roomBelow = window.innerHeight - rect.bottom - viewportGap;
    const roomAbove = rect.top - viewportGap;
    const placeAbove = roomBelow < Math.min(180, preferredHeight) && roomAbove > roomBelow;
    const maxHeight = Math.max(120, Math.min(preferredHeight, placeAbove ? roomAbove : roomBelow));
    const top = placeAbove ? Math.max(viewportGap, rect.top - maxHeight - 5) : rect.bottom + 5;
    setPosition({ top, left: rect.left, width: rect.width, maxHeight });
  }, [options.length]);

  useEffect(() => {
    if (!open) return;
    setHighlightedIndex(selectedIndex);
    updatePosition();

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!triggerRef.current?.contains(target) && !panelRef.current?.contains(target)) setOpen(false);
    };
    const onViewportChange = () => updatePosition();
    document.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('resize', onViewportChange);
    window.addEventListener('scroll', onViewportChange, true);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('resize', onViewportChange);
      window.removeEventListener('scroll', onViewportChange, true);
    };
  }, [open, selectedIndex, updatePosition]);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>(`[data-option-index="${highlightedIndex}"]`)?.scrollIntoView({ block: 'nearest' });
  }, [highlightedIndex, open]);

  const selectOption = (option: SelectOption) => {
    if (option.disabled) return;
    onChange?.(option.value);
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  const moveHighlight = (direction: 1 | -1) => {
    if (!options.length) return;
    let next = highlightedIndex;
    do {
      next = (next + direction + options.length) % options.length;
    } while (options[next]?.disabled && next !== highlightedIndex);
    setHighlightedIndex(next);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!open) setOpen(true);
      else moveHighlight(event.key === 'ArrowDown' ? 1 : -1);
      return;
    }
    if ((event.key === 'Enter' || event.key === ' ') && open) {
      event.preventDefault();
      const option = options[highlightedIndex];
      if (option) selectOption(option);
    }
  };

  return (
    <div className={`min-w-0 ${className ?? ''}`.trim()}>
      <button
        ref={triggerRef}
        id={selectId}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listboxId : undefined}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={onKeyDown}
        className={`flex w-full items-center justify-between gap-2 rounded-md border border-border-subtle bg-surface px-3 text-left text-text-main transition-colors hover:border-pd-primary-500 focus-visible:border-pd-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-pd-secondary-300 disabled:cursor-not-allowed disabled:bg-subtle disabled:text-text-muted ${size === 'sm' ? 'h-8 text-xs' : 'h-10 text-sm'}`}
      >
        <span className="min-w-0 truncate">{selectedOption?.label ?? placeholder}</span>
        <ChevronDown size={15} className={`shrink-0 text-text-muted transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {open && position && typeof document !== 'undefined' ? createPortal(
        <div
          ref={panelRef}
          id={listboxId}
          role="listbox"
          aria-labelledby={selectId}
          className="prodeskel-scrollbar fixed z-modal overflow-y-auto rounded-lg border border-border-subtle bg-surface p-1 shadow-md"
          style={{ top: position.top, left: position.left, width: position.width, maxHeight: position.maxHeight }}
        >
          {options.map((option, index) => {
            const selected = option.value === value;
            const highlighted = index === highlightedIndex;
            return (
              <button
                key={`${option.value}-${option.label}`}
                type="button"
                role="option"
                aria-selected={selected}
                disabled={option.disabled}
                data-option-index={index}
                onMouseEnter={() => setHighlightedIndex(index)}
                onClick={() => selectOption(option)}
                className={`flex min-h-9 w-full items-center justify-between gap-3 rounded-md px-2.5 py-2 text-left text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${selected ? 'bg-pd-primary-50 font-semibold text-primary' : highlighted ? 'bg-subtle text-text-main' : 'text-text-main hover:bg-subtle'}`}
              >
                <span>{option.label}</span>
                {selected ? <Check size={14} className="shrink-0 text-primary" aria-hidden="true" /> : null}
              </button>
            );
          })}
        </div>,
        document.body,
      ) : null}
    </div>
  );
}
