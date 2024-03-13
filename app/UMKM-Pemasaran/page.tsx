import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UMKM_P } from "@/app/components/umkmP";

import React from "react";

export default function page() {
  return (
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
            <UMKM_P />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
