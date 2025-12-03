import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "animate.css";

const heroSlides = [
  {
    serviceId: 1,
    serviceName: "Winter Coat Fitting for Dogs",
    providerName: "PawCare Studio",
    providerEmail: "info@pawcare.com",
    price: 25,
    rating: 4.9,
    slotsAvailable: 4,
    description:
      "Custom coat fitting and warm outfit options to keep your dog comfortable in the cold.",
    image: "https://i.ibb.co.com/G4ZKbstd/unnamed.jpg",
    category: "Clothing",
  },
  {
    serviceId: 2,
    serviceName: "Winter Grooming & Paw Treatment",
    providerName: "CozyPets Grooming",
    providerEmail: "hello@cozypets.com",
    price: 30,
    rating: 4.8,
    slotsAvailable: 3,
    description:
      "Professional grooming with moisturizing paw balm and winter-safe shampoo.",
    image: "https://i.ibb.co.com/Nnxb80Xv/unnamed.jpg",
    category: "Grooming",
  },
  {
    serviceId: 3,
    serviceName: "Pet Heated Bed Rental",
    providerName: "WarmPaws Care",
    providerEmail: "support@warmpaws.com",
    price: 15,
    rating: 4.7,
    slotsAvailable: 10,
    description:
      "Keep your pets cozy with heated beds during chilly nights. Rent for daily or weekly use.",
    image: "https://i.ibb.co.com/nMXTkCkv/unnamed.jpg",
    category: "Comfort",
  },
  {
    serviceId: 4,
    serviceName: "Winter Vitamin & Nutrition Package",
    providerName: "HealthyPet Clinic",
    providerEmail: "contact@healthypet.com",
    price: 40,
    rating: 4.9,
    slotsAvailable: 5,
    description:
      "Tailored winter diet plans and vitamin supplements to boost immunity and energy in cold weather.",
    image: "https://i.ibb.co.com/Cpnmmyhs/unnamed.jpg",
    category: "Nutrition",
  },
  {
    serviceId: 5,
    serviceName: "Indoor Play & Exercise Session",
    providerName: "HappyPaws Indoor Park",
    providerEmail: "info@happypaws.com",
    price: 20,
    rating: 4.6,
    slotsAvailable: 6,
    description:
      "Keep your pets active and healthy indoors during winter with fun exercise sessions.",
    image: "https://i.ibb.co.com/VpHPdNvR/unnamed.jpg",
    category: "Activity",
  },
  {
    serviceId: 6,
    serviceName: "Winter Skin & Fur Hydration Treatment",
    providerName: "FurCare Spa",
    providerEmail: "services@furcare.com",
    price: 35,
    rating: 4.8,
    slotsAvailable: 4,
    description:
      "Deep conditioning treatment for pets’ skin and fur to prevent dryness and irritation in winter.",
    image: "https://i.ibb.co.com/cKd8hKRw/unnamed.jpg",
    category: "Grooming",
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full h-[400px] shadow-2xl overflow-hidden group rounded-3xl container px-2 mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.serviceId}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center space-y-3">
                
                {/* Category */}
                <span className="bg-primary/90 text-white text-xs md:text-sm px-4 py-1 rounded-full uppercase tracking-wider shadow-md animate__animated animate__fadeInDown">
                  {slide.category}
                </span>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-extrabold animate__animated animate__fadeInDown drop-shadow-lg text-secondary">
                  {slide.serviceName}
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg max-w-xl animate__animated animate__fadeInUp animate__delay-1s text-gray-200">
                  {slide.description}
                </p>

                {/* Provider + Rating */}
                <div className="flex flex-wrap gap-4 items-center justify-center text-sm md:text-base animate__animated animate__fadeInUp animate__delay-1s">
                  <span className="bg-black/40 px-4 py-1 rounded-full">
                    {slide.providerName}
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 px-4 py-1 rounded-full">
                    <FaStar className="text-yellow-400" />
                    {slide.rating}
                  </span>
                  <span className="bg-black/40 px-4 py-1 rounded-full">
                    ${slide.price}
                  </span>
                </div>

                {/* Button */}
                <Link
                  to={`/service/${slide.serviceId}`}
                  className="mt-4 btn bg-secondary hover:bg-primary border-none text-white text-sm md:text-base font-semibold 
                  rounded-full px-8 py-3 shadow-lg uppercase tracking-wider transform transition 
                  hover:scale-110 animate__animated animate__zoomIn animate__delay-2s"
                >
                  View Details
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Arrows */}
        <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-4 z-10 
          p-3 rounded-full bg-black/40 text-white cursor-pointer 
          hover:bg-primary transition-all duration-300 
          opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center shadow-lg">
          <FiChevronLeft size={26} />
        </div>

        <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-4 z-10 
          p-3 rounded-full bg-black/40 text-white cursor-pointer 
          hover:bg-primary transition-all duration-300 
          opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center shadow-lg">
          <FiChevronRight size={26} />
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
