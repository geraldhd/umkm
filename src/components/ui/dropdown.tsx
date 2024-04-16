import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Tambahkan props untuk value dan onChange
interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export function Dropdown({ value, onChange }: DropdownProps) {
  // Handle ketika item dipilih
  const handleSelect = (selectedValue: string) => {
    // Panggil onChange prop dengan value yang baru
    onChange(selectedValue);
  };

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Pilih Kategori" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Kategori</SelectLabel>
          {/* 
            Gunakan handleSelect untuk memperbarui state di komponen induk 
            ketika item dipilih
          */}
          <SelectItem onClick={() => handleSelect("MUTIARA")} value="MUTIARA">MUTIARA</SelectItem>
          <SelectItem onClick={() => handleSelect("FASHION TURUNAN")} value="FASHION TURUNAN">FASHION TURUNAN</SelectItem>
          <SelectItem onClick={() => handleSelect("KRIYA")} value="KRIYA">KRIYA</SelectItem>
          <SelectItem onClick={() => handleSelect("KAOS DAN MERCHANDISE")} value="KAOS DAN MERCHANDISE">KAOS DAN MERCHANDISE</SelectItem>
          <SelectItem onClick={() => handleSelect("SKINCARE")} value="SKINCARE">SKINCARE</SelectItem>
          <SelectItem onClick={() => handleSelect("MAKANAN")} value="MAKANAN">MAKANAN</SelectItem>
          <SelectItem onClick={() => handleSelect("PAKAN")} value="PAKAN">PAKAN</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
