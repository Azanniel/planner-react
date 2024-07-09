import {
  ArrowRight,
  AtSign,
  Calendar,
  MapPin,
  Plus,
  Settings2,
  UserRoundPlus,
  X,
} from 'lucide-react'
import { useState } from 'react'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  return (
    <div className="bg-pattern flex h-screen items-center justify-center bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />

          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="shadow-shape flex h-16 items-center gap-3 rounded-lg bg-zinc-900 px-4">
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

          {isGuestsInputOpen && (
            <div className="shadow-shape flex h-16 items-center gap-3 rounded-lg bg-zinc-900 px-4">
              <button
                type="button"
                className="flex flex-1 items-center gap-2"
                onClick={openGuestsModal}
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                <span className="flex-1 text-left text-lg text-zinc-400">
                  Quem estará na viagem?
                </span>
              </button>

              <div className="h-6 w-px bg-zinc-800" />

              <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br /> com nossos{' '}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{' '}
          e{' '}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="shadow-shape w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button type="button" onClick={closeGuestsModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>

              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5">
                <span className="text-zinc-300">jessica.white44@yahoo.com</span>
                <button type="button">
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>

              <div className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5">
                <span className="text-zinc-300">erik_leffler3@gmail.com</span>
                <button type="button">
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>

              <div className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5">
                <span className="text-zinc-300">rebekah.conn21@gmail.com</span>
                <button type="button">
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>

              <div className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5">
                <span className="text-zinc-300">emile.mayer25@yahoo.com</span>
                <button type="button">
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            </div>

            <div className="h-px w-full bg-zinc-800" />

            <form className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-2.5">
              <div className="flex flex-1 items-center gap-2 px-2">
                <AtSign className="size-5 text-zinc-400" />

                <input
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none"
                  type="text"
                  placeholder="Digite o e-mail do convidado"
                />
              </div>

              <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400">
                Convidar
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
