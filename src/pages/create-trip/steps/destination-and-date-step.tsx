import 'react-day-picker/dist/style.css'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react'
import { useState } from 'react'
import { type DateRange, DayPicker } from 'react-day-picker'

import { Button } from '../../../components/button'

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  startAndEndDates?: DateRange
  setDestination: (value: string) => void
  setStartAndEndDates: (value?: DateRange) => void
  openGuestsInput: () => void
  closeGuestsInput: () => void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  startAndEndDates,
  setDestination,
  setStartAndEndDates,
  openGuestsInput,
  closeGuestsInput,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false)
  }

  let displayedDate = null

  if (startAndEndDates && startAndEndDates.from && startAndEndDates.to) {
    displayedDate = format(startAndEndDates.from, "d' de 'LLL", {
      locale: ptBR,
    })
      .concat(' até ')
      .concat(
        format(startAndEndDates.to, "d' de 'LLL", {
          locale: ptBR,
        }),
      )
  }

  return (
    <div className="flex h-16 items-center gap-3 rounded-lg bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
          type="text"
          placeholder="Para onde você vai?"
          disabled={isGuestsInputOpen}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <button
        className="flex items-center gap-2 text-left outline-none"
        onClick={openDatePicker}
        disabled={isGuestsInputOpen}
      >
        <Calendar className="size-5 text-zinc-400" />
        <span
          className="min-w-40 text-lg text-zinc-400"
          title={displayedDate || undefined}
        >
          {displayedDate || 'Quando?'}
        </span>
      </button>

      {isDatePickerOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60"
          tabIndex={-1}
        >
          <div className="space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button type="button" onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>

              <p className="text-left text-sm text-zinc-400">
                Escolha uma data para a sua viagem
              </p>
            </div>

            <DayPicker
              mode="range"
              locale={ptBR}
              selected={startAndEndDates}
              onSelect={setStartAndEndDates}
            />

            <Button size="full" onClick={closeDatePicker}>
              Confirmar
            </Button>
          </div>
        </div>
      )}

      <div className="h-6 w-px bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button variant="secondary" onClick={closeGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}
