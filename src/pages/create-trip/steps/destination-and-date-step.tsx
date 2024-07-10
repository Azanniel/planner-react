import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  openGuestsInput: () => void
  closeGuestsInput: () => void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  openGuestsInput,
  closeGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-lg bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
          type="text"
          placeholder="Para onde você vai?"
          disabled={isGuestsInputOpen}
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          className="w-40 bg-transparent text-lg placeholder-zinc-400 outline-none"
          type="text"
          placeholder="Quando?"
          disabled={isGuestsInputOpen}
        />
      </div>

      <div className="h-6 w-px bg-zinc-800" />

      {isGuestsInputOpen ? (
        <button
          className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-colors hover:bg-zinc-700"
          onClick={closeGuestsInput}
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      ) : (
        <button
          className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
          onClick={openGuestsInput}
        >
          Continuar
          <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  )
}
