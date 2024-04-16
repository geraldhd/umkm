import React from 'react'
import Layout from '@/components/layout/layout'
import Tb_periode from '@/components/Tb_periode/Tb_periode'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'


function Periode() {
  return (
    <Layout>
      <div>
        <h2 className="text-3xl font-bold tracking-tight my-4 text-[#CF7E1A]">
          Kelola Informasi Produk
        </h2>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-7">
          <Card className="lg:col-span-8">
            <CardHeader>
              <CardTitle>Data Informasi Produk</CardTitle>
            </CardHeader>
            <CardContent>
              <Tb_periode/>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default Periode
