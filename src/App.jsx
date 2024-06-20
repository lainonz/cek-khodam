import React, { useState } from "react";

function App() {
  const khodam = [
    {
      nama: "tutut",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Filopaludina_javanica_01.JPG/1200px-Filopaludina_javanica_01.JPG",
    },
    {
      nama: "piraun",
      img: "https://asset.kompas.com/crops/NSI_UWvzB3ilqBHxCleRKtzB90k=/0x110:637x535/1200x800/data/photo/2022/11/03/6363a3fe62651.png",
    },
    {
      nama: "semut api",
      img: "https://img.harianjogja.com/posts/2023/06/30/1140333/semut_api_1688108186.jpg",
    },
    {
      nama: "keong racun",
      img: "https://assets.kompasiana.com/statics/crawl/5581cc1a24a9d503608b4567.jpeg",
    },
    {
      nama: "raja banteng",
      img: "https://e7.pngegg.com/pngimages/963/825/png-clipart-bull-demon-king-bovini-water-buffalo-angry-red-bull-mammal-child.png",
    },
    {
      nama: "tomat legeg",
      img: "https://www.penbaypilot.com/sites/default/files/2021/04/field/image/tomato.jpg",
    },
    {
      nama: "kucing liar",
      img: "https://asset.inilahkoran.id/uploads/images/2024/06/image_750x_6667e7eb72c4e.jpg",
    },
  ];

  const [randomKhodam, setRandomKhodam] = useState(null);
  const [namaOrang, setNamaOrang] = useState("");

  const handleCekClick = () => {
    const randomIndex = Math.floor(Math.random() * khodam.length);
    setRandomKhodam(khodam[randomIndex]);
  };

  return (
    <>
      <div className="mt-4">
        <div className="lg:w-[600px] mx-auto p-3 flex flex-col items-center">
          <h1 className="text-center text-2xl font-bold text-white">
            Cek Khodam Yang Ada Didiri kamu Gratis 💀
          </h1>
          <div className="flex space-x-3 items-center mt-3">
            <input
              type="text"
              placeholder="Masukin Nama"
              className="w-[200px] py-1 px-2 rounded-md placeholder:text-center"
              onChange={(e) => setNamaOrang(e.target.value)}
            />
            <button
              onClick={handleCekClick}
              className="bg-blue-500 px-5 text-white py-1 rounded-md"
            >
              Cek
            </button>
          </div>
          {randomKhodam && (
            <div>
              <p className="text-white mt-4 text-2xl text-center mb-2">
                {namaOrang} Khodam kamu: {randomKhodam.nama} 😈
              </p>
              <img
                src={randomKhodam.img}
                alt={randomKhodam.nama}
                className="rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
