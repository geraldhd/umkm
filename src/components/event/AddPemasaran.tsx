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
        
        
        const {data} = await axios.post('/api/pemasaran', formDataJson)

        setData((lastData)=>[
            ...lastData,
            {
                Id: data.Id,
                Nomor: data.Nomor, 
                NamaBrand: data.NamaBrand,
                NamaOwner: data.NamaOwner,
                Kategori: data.Kategori,
                Alamat: data.Alamat,
                NoHP: data.NoHP,
                Keterangan: data.Keterangan,
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
                    Tambah Data UMKM Pemasaran 
                </p>
                <form onSubmit={handleSubmit}className="pointer-events-auto">
                    <p className="mb-1">Nama Brand</p>
                    <Input
                        placeholder="Masukan Nama Brand"
                        name='NamaBrand'
                        className="mb-3" 
                    />
                    <p className="mb-1">Nama Owner</p>
                    <Input
                        placeholder="Masukan Nama Owner"
                        name="NamaOwner"
                        className="mb-3" 
                    />
                    <p className="mb-1">Kategori </p>
                    <Input
                        placeholder="Masukan Kategori"
                        name='Kategori'
                        className="mb-3" 
                    />
                    <p className="mb-1">Alamat</p>
                    <Input
                        placeholder="Masukan Alamat"
                        className="mb-3"
                        name='Alamat'
                    />
                    <p className="mb-1">No HP</p>
                    <Input
                        placeholder="Masukan No HP"
                        className="mb-3"
                        name='NoHP' 
                    />
                    <p className="mb-1">Keterangan</p>
                    <Input
                        placeholder="Masukan Keterangan"
                        className="mb-3" 
                        name='Keterangan'
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
