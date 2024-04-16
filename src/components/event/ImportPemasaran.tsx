import { PemasaranResponse, DataStateType } from "../Tb_pemasaran/Tb_pemasaran";
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "../ui/button";

type addDataProps = {
  setData: React.Dispatch<React.SetStateAction<PemasaranResponse[]>>,
  setDataState: React.Dispatch<React.SetStateAction<DataStateType>>
};

function ImportPemasaran({setData, setDataState} : addDataProps) {

  const handleFileChange = (event: any) => {
    setDataState(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (!setDataState || !(setDataState instanceof File)) {
      alert('Silakan pilih file terlebih dahulu.');
      return;
    }

    const formData = new FormData();
    formData.append('file', setDataState, setDataState.name);

    try {
      const response = await axios.post('/api/pemasaran?type=import', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setData(response.data);
    } catch (error) {
      console.error('Error during file upload:', error);
      alert('Terjadi kesalahan saat mengunggah file.');
    }
  }


  return (
    <div className=" backdrop-blur-sm w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none ">
      <div className="mt-7 opacity-100 duration-500  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="w-full flex flex-col bg-white border shadow-sm rounded-md p-4 items-center gap-4 mt-16 ">
          <p className="text-[#CF7E1A] text-xl font-semibold text-center">
            Import Data UMKM Pemasaran 
          </p>
          <form onSubmit={uploadFile}>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
            <div>
              <button
                type="submit"
                className="bg-green-500 px-10 py-2 text-white rounded-lg font-semibold text-sm w-fit mt-3 ml-3 cursor-pointer"
              >
                Import
              </button>
              <button
                type="button"
                className="bg-red-600 px-10 py-2 text-white rounded-lg font-semibold text-sm w-fit mt-3 ml-3 cursor-pointer"
                onClick={() => {
                  setDataState(null);
                }}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ImportPemasaran
