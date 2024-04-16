import React, {useEffect, useState} from 'react'
import axios from 'axios'
import moment from 'moment';
import AddPeriode from '../event/AddPeriode';
import UpdatePeriode from '../event/UpdatePeriode'


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

export type PeriodeResponse = {
    Id: string;
    Nomor: number; 
    NamaProduk: string;
    NamaUMKM: string;
    NamaPemilik: string;
    JumlahBarang: number;
    TanggalTerima: Date;
    TanggalExpired: Date;
    Status: string;
    createdAt: Date;
    updatedAt: Date;  
}
export type DataStateType = null | "insert" | "update" | "delete";

function Tb_periode() {

    const [data, setData] = useState<PeriodeResponse[]>([]);
    const [datastate, setDataState] = useState<DataStateType>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
// fetch data
    const getData = async () => {
        try {
        const {data} = await axios.get('/api/infoProduk');
        console.log(data);
        setData(
            data.map((item: PeriodeResponse)=>({
                Id: item.Id,
                Nomor: item.Nomor, 
                NamaProduk: item.NamaProduk,
                NamaUMKM: item.NamaUMKM,
                NamaPemilik: item.NamaPemilik,
                JumlahBarang: item.JumlahBarang,
                TanggalTerima: new Date(moment(item.TanggalTerima).toISOString()),
                TanggalExpired: new Date(moment(item.TanggalExpired).toISOString()),
                Status: item.Status,
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
            `/api/infoProduk?Id=${Id}`
        )
        setData([...data.filter((item)=> item.Id !== responseData.Id)])
    }
//search data
    const filteredData = data.filter((item) =>
    item.NamaPemilik.toLowerCase().includes(searchTerm.toLowerCase()) || item.NamaUMKM.toLowerCase().includes(searchTerm.toLowerCase())
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
                                    NAMA PRODUK
                                </TableHead>          
                                <TableHead>
                                    NAMA UMKM
                                </TableHead>          
                                <TableHead>
                                    NAMA PEMILIK
                                </TableHead>          
                                <TableHead>
                                    Jumlah Barang
                                </TableHead>          
                                <TableHead>
                                    Tanggal Terima
                                </TableHead>          
                                <TableHead>
                                    TanggalExpired
                                </TableHead>           
                                <TableHead>
                                    Status
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
                                {item.NamaProduk}
                                </TableCell>
                                <TableCell>
                                {item.NamaUMKM}
                                </TableCell>
                                <TableCell>
                                {item.NamaPemilik}
                                </TableCell>
                                <TableCell>
                                {item.JumlahBarang}
                                </TableCell>
                                <TableCell>
                                {item.TanggalTerima.toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                {item.TanggalExpired.toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                {item.Status}
                                </TableCell>
                                <TableCell>
                                {item.createdAt.toLocaleDateString()}
                                </TableCell>
                                <TableCell>
                                    <Button className='bg-blue-500 mb-3 mx-1'>
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
                <AddPeriode setData={setData} setDataState={setDataState}/>
            )}
            {/* {datastate == "import" && (
                <ImportPemasaran setData={setData} setDataState={setDataState}/>
            )} */}
        </>
    );
}
export default Tb_periode
