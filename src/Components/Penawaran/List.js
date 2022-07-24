import React from "react";

const List = () => {
  return (
    <div class="flex space-x-4">
      <img
        src="/images/jamtangan.png"
        alt=""
        class="h-12 w-12 rounded-xl object-cover"
      />
      <div class="w-full">
        <div class="space-y-1">
          <div class="flex justify-between text-xs text-neutral3">
            <div>Penawaran produk</div>
            <div>20 Apr, 14:04</div>
          </div>
          <div>Jam Tangan Casio</div>
          <div>Rp 250.000</div>
          <div>Ditawar Rp 200.000</div>
        </div>
      </div>
    </div>
  );
};

export default List;
