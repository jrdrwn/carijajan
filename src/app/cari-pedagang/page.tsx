import { Hero } from '@/components/cari-pedagang/hero'
import EndCTA from '@/components/shared/end-cta'
import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function CariPedagang() {
  return (
    <>
      <Header />
      <Hero />
      <section className="container mx-auto py-16">
        <div className="flex flex-col items-center justify-center">
          <Card className='relative w-115 pt-42'>
              <Image
                src={'https://images.unsplash.com/photo-1572000423136-e94e163fb50b'}
                alt="hero"
                width={800}
                height={800}
                className="rounded-lg object-cover object-center absolute -top-full translate-y-52 h-46 w-[calc(100%-2rem)] left-1/2 -translate-x-1/2"
              />
              <CardContent>
                <CardTitle className='text-2xl'>
                Gorengan murah paman yoshua
                </CardTitle>
              </CardContent>
          </Card>
        </div>
      </section>
      <EndCTA />
      <Footer />
    </>
  )
}
