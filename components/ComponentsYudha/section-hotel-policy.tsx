import type { NextPage } from "next";

const SectionHotelPolicy: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col py-9 px-[92px] items-start justify-start text-left text-xl text-darkslategray-300 font-body-txt-body-s-regular">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
          <b className="self-stretch relative">Hotel Policy</b>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative font-medium">
              Syarat dan Ketentuan Umum
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-[inherit] text-darkslategray-100 font-inherit">
            <div className="self-stretch relative font-medium opacity-[0.75]">
              <ul className="m-0 pl-[27px] flex flex-col">
                <li className="mb-0">
                  a. Waktu check-in adalah pukul 14.00 dan waktu check-out adalah
                  pukul 12.00.
                </li>
                <li className="mb-0">
                  b. Early check-in dan late check-out tergantung
                  pada ketersediaan kamar dan dapat dikenakan biaya tambahan.
                </li>
                <li className="mb-0">
                  c.
                  Diperlukan ID yang sah yang dikeluarkan oleh pemerintah dan
                  kartu kredit pada saat check-in.
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHotelPolicy;
