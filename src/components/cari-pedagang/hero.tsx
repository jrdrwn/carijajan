import { Candy, Pizza, UtensilsCrossed } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export function Hero() {
  return (
    <section className="container mx-auto py-16 pb-32 flex justify-center relative">
      <div>
        <div className="w-20 h-20 bg-muted rounded-md absolute left-22 rotate-45 border-2 shadow border-primary flex items-center justify-center">
          <Candy size={52} className="text-primary" />
        </div>
        <div className="w-20 h-20 bg-muted rounded-md absolute left-45 top-50 rotate-12 border-2 shadow border-primary flex items-center justify-center">
          <Pizza size={52} className="text-primary" />
        </div>
        <div className="w-20 h-20 bg-muted rounded-md absolute left-20 top-80 rotate-12 border-2 shadow border-primary flex items-center justify-center">
          <UtensilsCrossed size={52} className="text-primary" />
        </div>

        <div className="w-20 h-20 bg-muted rounded-md absolute right-22 -rotate-45 scale-x-[-1] border-2 shadow border-primary flex items-center justify-center">
          <Candy size={52} className="text-primary" />
        </div>
        <div className="w-20 h-20 bg-muted rounded-md absolute right-45 top-50 -rotate-12 scale-x-[-1] border-2 shadow border-primary flex items-center justify-center">
          <Pizza size={52} className="text-primary" />
        </div>
        <div className="w-20 h-20 bg-muted rounded-md absolute right-20 top-80 -rotate-12 scale-x-[-1] border-2 shadow border-primary flex items-center justify-center">
          <UtensilsCrossed size={52} className="text-primary" />
        </div>

        <h1 className="text-7xl text-center  max-w-4xl font-bold tracking-wide leading-tight  bg-gradient-to-b from-orange-900 to-neutral-500 bg-clip-text text-transparent mt-4 mb-8">
          Temukan Pedagang Kaki Lima di Sekitarmu!
        </h1>
        <div className="flex items-center justify-center gap-4 mt-12 mx-auto">
          <Input type="text" placeholder="Contoh: Gorengan Renyah..." className="w-full max-w-[400px] py-6 px-4" />
          <Button className="py-6 px-4">Cari</Button>
          <Button className="py-6 px-4" variant={'secondary'}>
            Filter
          </Button>
        </div>
      </div>
    </section>
  )
}
