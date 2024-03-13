import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UMKM_B } from "@/app/components/umkmB";

import React from "react";

export default function page() {
  return (
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
            <UMKM_B />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
