import {
  ArrowRight,
  Calendar,
  MapPin,
  Settings2,
  UserRoundPlus,
} from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ConfirmTripModal } from './confirm-trip-modal'
import { InviteGuestsModal } from './invite-guests-modal'

export function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  const navigate = useNavigate()

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return event.currentTarget.reset()
    }

    setEmailsToInvite([...emailsToInvite, email])

    event.currentTarget.reset()
  }

  function removeEmailFromInvite(emailToRemove: string) {
    const emailsWithoutOneRemoved = emailsToInvite.filter((email) => {
      return email !== emailToRemove
    })

    setEmailsToInvite(emailsWithoutOneRemoved)
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    navigate('/trips/123')
  }

  return (
    <div className="flex h-screen items-center justify-center bg-pattern bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />

          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
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

          {isGuestsInputOpen && (
            <div className="flex h-16 items-center gap-3 rounded-lg bg-zinc-900 px-4 shadow-shape">
              <button
                type="button"
                className="flex flex-1 items-center gap-2"
                onClick={openGuestsModal}
              >
                <UserRoundPlus className="size-5 text-zinc-400" />

                {emailsToInvite.length > 0 ? (
                  <span className="text-left text-lg text-zinc-100">
                    {emailsToInvite.length} pessoa(s) convidadas
                  </span>
                ) : (
                  <span className="flex-1 text-left text-lg text-zinc-400">
                    Quem estará na viagem?
                  </span>
                )}
              </button>

              <div className="h-6 w-px bg-zinc-800" />

              <button
                className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400"
                onClick={openConfirmTripModal}
              >
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
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          removeEmailFromInvite={removeEmailFromInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          createTrip={createTrip}
          closeConfirmTripModal={closeConfirmTripModal}
        />
      )}
    </div>
  )
}
