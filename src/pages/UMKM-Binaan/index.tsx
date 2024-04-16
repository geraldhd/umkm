import React from 'react'
import Layout from '@/components/layout/layout'
import Tb_binaan from '@/components/Tb_binaan/Tb_binaan'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'


function Binaan() {
  return (
    <Layout>
      <div>
        <h2 className="text-3xl font-bold tracking-tight my-4 text-[#CF7E1A]">
          Kelola UMKM Binaan
        </h2>
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-7">
          <Card className="lg:col-span-8">
            <CardHeader>
              <CardTitle>Kelola Data UMKM Binaan</CardTitle>
            </CardHeader>
            <CardContent>
              <Tb_binaan/>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default Binaan
