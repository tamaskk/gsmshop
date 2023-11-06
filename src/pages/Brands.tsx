import React from "react";
import Brandscard from "../components/Brandscard";
import iPhone from "../assets/iphone.jpg";
import Samsung from "../assets/samsung.jpg";
import Xiaomi from "../assets/xiaomi.png";
import Huawei from "../assets/huawei.jpg";

const Brands = () => {
  return (
    <section className="mx-auto max-w-[1200px] px-[19px] py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Válassz egy márkát!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Brandscard brand="iphone" img={iPhone} name="iPhone" />
        <Brandscard brand="samsung" img={Samsung} name="Samsung" />
        <Brandscard brand="xiaomi" img={Xiaomi} name="Xiaomi" />
        <Brandscard brand="huawei" img={Huawei} name="Huawei" />
        <Brandscard brand="iphone" img={iPhone} name="iPhone" />
        <Brandscard brand="samsung" img={Samsung} name="Samsung" />
        <Brandscard brand="xiaomi" img={Xiaomi} name="Xiaomi" />
        <Brandscard brand="huawei" img={Huawei} name="Huawei" />
      </div>
    </section>
  );
};

export default Brands;
