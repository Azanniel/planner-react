import { format, isBefore } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CircleCheck, CircleDashed } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { api } from '../../lib/axios'

interface Activity {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export function Activities() {
  const [activities, setActivities] = useState<Activity[]>([])

  const { tripId } = useParams()

  useEffect(() => {
    api.get(`/trips/${tripId}/activities`).then((response) => {
      setActivities(response.data.activities)
    })
  }, [tripId])

  return (
    <div className="space-y-8">
      {activities.map((activity) => {
        return (
          <div key={activity.date} className="space-y-2.5">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-zinc-300">
                Dia {format(activity.date, 'dd')}
              </span>
              <span className="text-xs text-zinc-500">
                {format(activity.date, 'EEEE', { locale: ptBR })}
              </span>
            </div>

            {activity.activities.length > 0 ? (
              <div className="space-y-2.5">
                {activity.activities.map((activityByDay) => {
                  return (
                    <div
                      key={activityByDay.id}
                      className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape"
                    >
                      {isBefore(activityByDay.occurs_at, new Date()) ? (
                        <CircleCheck className="size-5 text-lime-300" />
                      ) : (
                        <CircleDashed className="size-5 text-zinc-400" />
                      )}

                      <span className="text-zinc-100">
                        {activityByDay.title}
                      </span>

                      <span className="ml-auto text-sm text-zinc-400">
                        {format(activityByDay.occurs_at, 'HH:mm')}h
                      </span>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
