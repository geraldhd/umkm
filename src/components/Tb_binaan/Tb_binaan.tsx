import React, {useEffect, useState} from 'react'
import axios from 'axios'
import moment from 'moment';
import AddBinaan from '../event/AddBinaan';
import UpdateBinaan from '../event/UpdateBinaan'


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export type BinaanResponse = {
    Id: string;
    Nomor: number; 
    NamaUMKM: string;
    NamaPemilik: string;
    Kategori: string;
    Alamat: string;
    KabKota: string;
    NoHP: string;
    Keterangan: string;
    createdAt: Date;
    updatedAt: Date;  
}
export type DataStateType = null | "insert" | "update" | "delete";

function TbBinaan() {
  
  const [data, setData] = useState<BinaanResponse[]>([]);
  const [datastate, setDataState] = useState<DataStateType>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
// fetch data
  const getData = async () => {
      try {
      const {data} = await axios.get('/api/binaan');
      console.log(data);
      setData(
          data.map((item: BinaanResponse)=>({
              Id: item.Id,
              Nomor: item.Nomor, 
              NamaUMKM: item.NamaUMKM,
              NamaPemilik: item.NamaPemilik,
              Kategori: item.Kategori,
              Alamat: item.Alamat,
              KabKota: item.KabKota,
              NoHP: item.NoHP,
              Keterangan: item.Keterangan,
              createdAt: new Date(moment(item.createdAt).toISOString()),
              updatedAt: new Date(moment(item.updatedAt).toISOString()),  
          }))
      ); 
      setLoading(false);
      } catch (err) {
      console.error('Failed to fetch data:', err);
      setError('Failed to fetch data');
      setLoading(false);
      }
  };
// import handler
  const handleFileChange = (e: any) => {
      setDataState(e.target.files[0]);
  };
// delete handler   
  const handleDelete = async (Id: string)=>{
      const {data:responseData} = await axios.delete(
          `/api/binaan?Id=${Id}`
      )
      setData([...data.filter((item)=> item.Id !== responseData.Id)])
  }
//search data
    const filteredData = data.filter((item) =>
    item.NamaUMKM.toLowerCase().includes(searchTerm.toLowerCase()) || item.Kategori.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  useEffect(() => {
      getData();
  }, []);

//loading screen
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <>
          <div className="w-full">
              <div className="flex flex-row items-center justify-between py-4">
                  <Input
                      placeholder="Cari Kategori  atau brand... "
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      className="max-w-sm"
                  />
                  
                  <div>
                      <Button
                      className="bg-[rgb(26,207,47)]  mx-5 mt-3 mb-3"
                      onClick={() => {
                          setDataState('insert');
                      }}
                      >
                      Tambah Data
                      </Button>
                      <Button
                      className="bg-[#CF7E1A] mb-3 mx-5"
                      onClick={() => {
                        //   setDataState("");
                    }}
                    >
                      Eksport Data
                      </Button>
                      <Button
                      className="bg-[#CF7E1A] mx-5 mb-3"
                      onClick={() => {
                        //   setDataState("import");
                      }}
                      >
                      Import Data
                      </Button>
                  </div>
              </div>
              <div className="rounded-md border">
                  <Table>
                      <TableHeader>
                          <TableRow>
                              <TableHead>
                                  NO
                              </TableHead>          
                              <TableHead>
                                  NAMA UMKM
                              </TableHead>          
                              <TableHead>
                                  NAMA PEMILIK
                              </TableHead>          
                              <TableHead>
                                  KATEGORI
                              </TableHead>          
                              <TableHead>
                                  ALAMAT
                              </TableHead>          
                              <TableHead>
                                  Kab
                              </TableHead>          
                              <TableHead>
                                  NO HP
                              </TableHead>          
                              <TableHead>
                                  CREATED AT
                              </TableHead>               
                              <TableHead>
                                  Action
                              </TableHead>          
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                      {filteredData?.map((item, index) =>(
                          <TableRow key={item.Id}>
                              <TableCell>
                              {index + 1}
                              </TableCell>
                              <TableCell>
                              {item.NamaUMKM}
                              </TableCell>
                              <TableCell>
                              {item.NamaPemilik}
                              </TableCell>
                              <TableCell>
                              {item.Kategori}
                              </TableCell>
                              <TableCell>
                              {item.Alamat}
                              </TableCell>
                              <TableCell>
                              {item.KabKota}
                              </TableCell>
                              <TableCell>
                              {item.NoHP}
                              </TableCell>
                              <TableCell>
                              {item.createdAt.toLocaleDateString()}
                              </TableCell>
                              <TableCell>
                                  <Button 
                                  onClick={() => {
                                    setDataState("update");
                                }}
                                  className='bg-blue-500 mb-3 mx-1'>
                                      Edit
                                  </Button>
                                  <Button
                                      onClick={()=> handleDelete(item.Id)}
                                      className='bg-red-500 mx-1'>
                                      Hapus
                                  </Button>
                              </TableCell>
                          </TableRow>
                      ))}
                      </TableBody>
                  </Table>
              </div>
          </div>
          {datastate == "insert" && (
              <AddBinaan setData={setData} setDataState={setDataState}/>
          )}
          {datastate == "update" && (
                <UpdateBinaan setData={setData} setDataState={setDataState}/>
            )}
          {/* {datastate == "import" && (
              <ImportPemasaran setData={setData} setDataState={setDataState}/>
          )} */}
      </>
  );
}
export default TbBinaan
