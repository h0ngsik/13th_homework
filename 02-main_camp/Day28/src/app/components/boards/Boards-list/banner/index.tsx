import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./styles.module.css";

export default function BoardsListBanner() {
  return (
    <div className={styles.BannerContainer}>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          "--swiper-pagination-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-opacity": "0.8",
        }}
      >
        <SwiperSlide>
          <Image
            src="/assets/banner1.png"
            alt="해변가 이미지"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "512px",
              objectFit: "cover",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/banner2.png"
            alt="해변가 이미지"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "512px", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/banner3.png"
            alt="해변가 이미지"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "512px", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
