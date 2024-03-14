"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"

import { DataTable } from "@/components/ui/custom/data-table"

// ganti umkmp
export type Sales = { 
  id: string
  namaBrand:string
  namaOwner:string
  kategori: "FASHION TURUNAN" | "MUTIARA" | "KRIYA" | "SKINCARE" | "KAOS DAN MERCH"
  alamat: string
  noHp:number
  keterangan: string 
}

export const columns: ColumnDef<Sales>[] = [
  {
    accessorKey:"id",
    header:"No"
  },
  {
    accessorKey:"namaBrand",
    header:"Nama Brand"
  },
  {
    accessorKey:"namaOwner",
    header:"Nama Owner"
  },
  {
    accessorKey:"kategori",
    header:"Kategori"
  },
  {
    accessorKey:"alamat",
    header:"Alamat"
  },
  {
    accessorKey:"noHp",
    header:"No Hp"
  },
  {
    accessorKey:"keterangan",
    header:"Keterangan"
  },
]



const data: Sales[] = [
  {
    id: "1",
    namaBrand:"ALDISH SONGKET",
    namaOwner:"ALDISH",
    kategori: "FASHION TURUNAN",
    alamat: "Ungga, Praya Barat Da..",
    noHp: +6287864308149,
    keterangan: "",
  },
  {
    id: "2",
    namaBrand:"IRHA MUTIARA",
    namaOwner:"ZOHIRAL AINI",
    kategori: "MUTIARA",
    alamat: "Jl. Hangtuah 4 No 10 F KMP TNI .....",
    noHp: +6282236891173,
    keterangan: "",
  },
  {
    id: "3",
    namaBrand:"ALDISH SONGKET",
    namaOwner:"ALDISH",
    kategori: "FASHION TURUNAN",
    alamat: "Ungga, Praya Barat Da..",
    noHp: +6287864308149,
    keterangan: "",
  },
  {
    id: "4",
    namaBrand:"ALDISH SONGKET",
    namaOwner:"ALDISH",
    kategori: "FASHION TURUNAN",
    alamat: "Ungga, Praya Barat Da..",
    noHp: +6287864308149,
    keterangan: "",
  },
  {
    id: "5",
    namaBrand:"ALDISH SONGKET",
    namaOwner:"ALDISH",
    kategori: "FASHION TURUNAN",
    alamat: "Ungga, Praya Barat Da..",
    noHp: +6287864308149,
    keterangan: "",
  },
  {
    id: "6",
    namaBrand:"ALDISH SONGKET",
    namaOwner:"ALDISH",
    kategori: "FASHION TURUNAN",
    alamat: "Ungga, Praya Barat Da..",
    noHp: +6287864308149,
    keterangan: "",
  },
  {
    id: "7",
    namaBrand:"ALDISH SONGKET",
    namaOwner:"ALDISH",
    kategori: "FASHION TURUNAN",
    alamat: "Ungga, Praya Barat Da..",
    noHp: +6287864308149,
    keterangan: "",
  },
  {
    id: "8",
    namaBrand:"ALDISH SONGKET",
    namaOwner:"ALDISH",
    kategori: "FASHION TURUNAN",
    alamat: "Ungga, Praya Barat Da..",
    noHp: +6287864308149,
    keterangan: "",
  },
]

export function UMKM_B() {
  return (
    <div className="w-full">
      <DataTable data={data} columns={columns} ></DataTable>
    </div>
  )
}
