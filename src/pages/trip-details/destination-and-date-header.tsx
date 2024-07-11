import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar, MapPin, Settings2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '../../components/button'
import { api } from '../../lib/axios'

interface Trip {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

export function DestinationAndDateHeader() {
  const [trip, setTrip] = useState<Trip>()

  const { tripId } = useParams()

  useEffect(() => {
    api.get(`/trips/${tripId}`).then((response) => {
      setTrip(response.data.trip)
    })
  }, [tripId])

  let displayedDate = null

  if (trip) {
    displayedDate = format(trip.starts_at, "d' de 'LLL", {
      locale: ptBR,
    })
      .concat(' até ')
      .concat(
        format(trip.ends_at, "d' de 'LLL", {
          locale: ptBR,
        }),
      )
  }

  return (
    <header className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">{displayedDate}</span>
        </div>

        <div className="h-6 w-px bg-zinc-800" />

        <Button variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </header>
  )
}
