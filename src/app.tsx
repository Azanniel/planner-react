import { ArrowRight, Calendar, MapPin } from 'lucide-react'

export function App() {
  return (
    <div className="bg-pattern flex h-screen items-center justify-center bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />

          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="shadow-shape flex h-16 items-center gap-3 rounded-lg bg-zinc-900 px-4">
          <div className="flex flex-1 items-center gap-2">
            <MapPin className="size-5 text-zinc-400" />
            <input
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
              type="text"
              placeholder="Para onde você vai?"
            />
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <input
              className="w-40 bg-transparent text-lg placeholder-zinc-400 outline-none"
              type="text"
              placeholder="Quando?"
            />
          </div>

          <div className="h-6 w-px bg-zinc-800" />

          <button className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 transition-colors hover:bg-lime-400">
            Continuar
            <ArrowRight className="size-5" />
          </button>
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
    </div>
  )
}
