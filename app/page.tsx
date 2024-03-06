
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Overview } from './components/overview'
import { UMKMP } from './components/umkmp'

export default function Home() {
  return (
    <>
       <h2 className="text-3xl font-bold tracking-tight my-4 text-[#CF7E1A]">Data UMKM Pemasaran dan Binaan</h2>

      <div className="flex-1 space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                212 Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">Jumlah Data</div>
              <p className="text-xs text-muted-foreground">
                UMKM Pemasaran
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold">
                803 Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">Jumlah Data</div>
              <p className="text-xs text-muted-foreground">
                UMKM Binaan
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold">26,4%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">Persentase UMKM Binaan dari UMKM pemasaran Data</div>
              <p className="text-xs text-muted-foreground">
                
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-bold tracking-tight my-4 text-center text-[#CF7E1A]">Jumlah UMKM masuk ke NTB Mall</h2>

        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-7">
          <Card className="lg:col-span-8">
            <CardHeader>
              <CardTitle>Data jumlah UMKM masuk ke NTB Mall</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
        </div>

{/* pemasaran */}
        <h2 className="text-3xl font-bold tracking-tight my-4 text-[#CF7E1A]">Kelola UMKM Pemasaran</h2>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-7">
        <Card className="lg:col-span-8">
            <CardHeader>
              <CardTitle>Kelola Data UMKM Pemasaran</CardTitle>
            </CardHeader>
            <CardContent>
              <UMKMP />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
