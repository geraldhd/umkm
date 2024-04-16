import React, { useState } from 'react';
import axios from 'axios';
import { BinaanResponse, DataStateType } from "../Tb_binaan/Tb_binaan";
import { Input } from "../ui/input";

type UpdateDataProps = {
    setData: React.Dispatch<React.SetStateAction<BinaanResponse[]>>
    setDataState: React.Dispatch<React.SetStateAction<DataStateType>>
}

const UpdatePemasaran: React.FC<UpdateDataProps> = ({ setData, setDataState }) => {
    const [formData, setFormData] = useState({
        NamaBrand: '',
        NamaOwner: '',
        Kategori: '',
        Alamat: '',
        NoHP: '',
        Keterangan: '',
        Id: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const response = await axios.put('/api/binaan', formData);
    };

    return (
        <div className="backdrop-blur-sm w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none">
            <div className="mt-7 opacity-100 duration-500 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                <div className="w-full flex flex-col bg-white border shadow-sm rounded-md p-4 items-center gap-4 mt-16 ">
                    <p className="text-[#CF7E1A] text-xl font-semibold text-center">
                        Update Data UMKM Binaan
                    </p>
                    <form onSubmit={handleUpdate} className="pointer-events-auto">
                        <Input name="NamaBrand" value={formData.NamaBrand} onChange={handleInputChange} placeholder="Masukan Nama Brand" className="mb-3" />
                        <Input name="NamaOwner" value={formData.NamaOwner} onChange={handleInputChange} placeholder="Masukan Nama Owner" className="mb-3" />
                        <Input name="Kategori" value={formData.Kategori} onChange={handleInputChange} placeholder="Masukan Kategori" className="mb-3" />
                        <Input name="Alamat" value={formData.Alamat} onChange={handleInputChange} placeholder="Masukan Alamat" className="mb-3" />
                        <Input name="NoHP" value={formData.NoHP} onChange={handleInputChange} placeholder="Masukan No HP" className="mb-3" />
                        <Input name="Keterangan" value={formData.Keterangan} onChange={handleInputChange} placeholder="Masukan Keterangan" className="mb-3" />
                        <div>
                            <button type="submit" className="bg-teal-600 px-10 py-2 text-white rounded-lg font-semibold text-sm w-fit mt-3 cursor-pointer">
                                Submit
                            </button>
                            <button type="button" className="bg-red-600 px-10 py-2 text-white rounded-lg font-semibold text-sm w-fit mt-3 ml-3 cursor-pointer" onClick={() => { setDataState(null); }}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdatePemasaran;
