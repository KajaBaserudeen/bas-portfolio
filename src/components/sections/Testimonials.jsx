import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Container from "../common/Container";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section py-28">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Testimonials</h2>

          <p className="text-slate-400 mt-4">
            What colleagues and stakeholders say
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="
                max-w-4xl
                mx-auto
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-10
                text-center
              "
              >
                <p
                  className="
                  text-slate-300
                  text-lg
                  leading-8
                  italic
                "
                >
                  "{item.message}"
                </p>

                <div className="mt-8">
                  <h3
                    className="
                    text-xl
                    font-semibold
                    text-accent-light
                  "
                  >
                    {item.name}
                  </h3>

                  <p className="text-slate-400">{item.designation}</p>

                  <p className="text-slate-500 text-sm">{item.company}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;
