import { Calendar, Tag, X } from 'lucide-react'
import type { FormEvent } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '../../components/button'
import { api } from '../../lib/axios'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams()

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const title = formData.get('title')?.toString()
    const occursAt = formData.get('occurs_at')?.toString()

    if (!title || !occursAt) {
      return
    }

    try {
      await api.post(`/trips/${tripId}/activities`, {
        title,
        occurs_at: occursAt,
      })

      window.document.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="space-y-3" onSubmit={createActivity}>
          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <Tag className="size-5 text-zinc-400" />
            <input
              className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none"
              type="text"
              name="title"
              placeholder="Qual a atividade?"
            />
          </div>

          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <Calendar className="size-5 text-zinc-400" />
            <input
              className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none"
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e Horário da atividade"
            />
          </div>

          <Button type="submit" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}
