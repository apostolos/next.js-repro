import { Accordion } from '@base-ui/react/accordion'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        {/* Error goes away if you remove this */}
        <Accordion.Root />

        <div>
          <p>Reproduction instructions:</p>
          <ul className="list-disc list-inside">
            <li>pnpm run dev</li>
            <li>open localhost:3000 in your browser</li>
            <li>change any of this text for HMR to fire</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
