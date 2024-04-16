import { PemasaranResponse, DataStateType } from "../Tb_pemasaran/Tb_pemasaran";
import axios from "axios";
import moment from "moment";
import React, { FormEvent } from "react";
import { Input } from "@/components/ui/input"

type addDataProps = {
    setData: React.Dispatch<React.SetStateAction<PemasaranResponse[]>>
    setDataState: React.Dispatch<React.SetStateAction<DataStateType>>
}

function AddPemasaran({setData, setDataState} : addDataProps) {
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const FormElement = e.target as HTMLFormElement;
        const formData = new FormData(FormElement);
        const formDataJson = Object.fromEntries(formData.entries());
        
        const {data} = await axios.post('/api/infoProduk', formDataJson)

        setData((lastData)=>[
            ...lastData,
            {
                Id: data.Id,
                Nomor: data.Nomor, 
                NamaProduk: data.NamaProduk,
                NamaUMKM: data.NamaUMKM,
                NamaPemilik: data.NamaPemilik,
                JumlahBarang: data.JumlahBarang,
                TanggalTerima: data.TanggalTerima,
                TanggalExpired: data.TanggalExpired,
                Status: data.Status,
                createdAt: new Date(moment(data.createdAt).toISOString()),
                updatedAt: new Date(moment(data.updatedAt).toISOString()),  
            }]
        );
        setDataState(null);
    }

  return (
    <div className=" backdrop-blur-sm w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none ">
        <div className="mt-7 opacity-100 duration-500  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
            <div className="w-full flex flex-col bg-white border shadow-sm rounded-md p-4 items-center gap-4 mt-16 ">
                <p className="text-[#CF7E1A] text-xl font-semibold text-center">
                    Tambah Data UMKM Binaan 
                </p>
                <form onSubmit={handleSubmit}className="pointer-events-auto">
                    <p className="mb-1">Nama Produk</p>
                    <Input
                        placeholder="Masukan Nama Produk"
                        name = 'NamaProduk'
                        className="mb-3" 
                    />
                    <p className="mb-1">Nama UMKM</p>
                    <Input
                        placeholder="Masukan Nama UMKM"
                        name ='NamaUMKM'
                        className="mb-3" 
                    />
                    <p className="mb-1">Nama Pemilik </p>
                    <Input
                        placeholder="Masukan Nama Pemilik"
                        name = 'NamaPemilik'
                        className="mb-3" 
                    />
                    <p className="mb-1">Jumlah Barang</p>
                    <Input
                        placeholder="Masukan Jumlah Barang"
                        name = 'JumlahBarang'
                        className="mb-3" 
                    />
                    <p className="mb-1">Tanggal Terima</p>
                    <Input
                        placeholder="Masukan Tanggal Terima"
                        name= 'TanggalTerima'
                        className="mb-3" 
                    />
                    <p className="mb-1">Tanggal Expired</p>
                    <Input
                        placeholder="Masukan Tanggal Expired"
                        name = 'TanggalExpired'
                        className="mb-3" 
                    />
                    <p className="mb-1">Status</p>
                    <Input
                        placeholder="Masukan Status"
                        name = 'Status'
                        className="mb-3" 
                    />
                    <div>
                        <button
                            type="submit"
                            className="bg-teal-600 px-10 py-2 text-white rounded-lg 
                            font-semibold text-sm w-fit mt-3 cursor-pointer"
                            >
                            Tambah
                        </button>
                        <button
                            type="button"
                            className="bg-red-600 px-10 py-2 text-white rounded-lg 
                            font-semibold text-sm w-fit mt-3 ml-3 cursor-pointer"
                            onClick={() => {
                                setDataState(null);
                            }}
                            >
                            Batal
                        </button>        
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddPemasaran
