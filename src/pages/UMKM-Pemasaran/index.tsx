import React from 'react'
import Layout from '@/components/layout/layout'
import Tb_pemasaran from '@/components/Tb_pemasaran/Tb_pemasaran'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function Pemasaran() {
  return (
    <Layout>
      <div>
        <h2 className="text-3xl font-bold tracking-tight my-4 text-[#CF7E1A]">
          Kelola UMKM Pemasaran
        </h2>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-7">
          <Card className="lg:col-span-8">
            <CardHeader>
              <CardTitle>Kelola Data UMKM Pemasaran</CardTitle>
            </CardHeader>
            <CardContent>
              <Tb_pemasaran/>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default Pemasaran
