import React from "react";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
    <section>


<div className="flex items-center">
  <img
className="h-20 w-20 rounded-full mr-5"
src="https://st.depositphotos.com/1378583/1263/v/950/depositphotos_12631647-stock-illustration-salon-concept-logo.jpg"
    alt="Profile Image"
  />
</div>

            

    </section>
    <section className="bg-white dark:bg-gray-900 shadow-xl hover:shadow-slate-200 transition-all duration-1000">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          In all our salons, we are committed to providing you with the highest quality experience by exclusively using premium products. Your satisfaction is our top priority, and to ensure your beauty journey is nothing short of exceptional, our skilled makeup artists employ cutting-edge products and techniques. Whether it's for special events, glamorous galas, red carpet moments, or elegant soirees, our professionals craft stunning looks tailored to elevate your presence and showcase your unique beauty. Your experience with us is not just a service; it's a celebration of sophistication and individuality.    
          </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Our beauty treatments are truly unmatched. Looking to augment your life? This is the first and only stop. Indulge in a transformative salon experience at [Your Salon Name]. Our skilled and passionate team of stylists is dedicated to enhancing your unique beauty. From precision haircuts and creative coloring to rejuvenating spa services, we offer a range of personalized treatments that leave you feeling refreshed and confident. Step into a stylish and inviting atmosphere where modern trends meet timeless elegance. Discover the perfect blend of luxury and comfort at our salon. Book your appointment now for an unparalleled salon journey
            </p>
   
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex hover:shadow-slate-200 shadow-xl transition-all duration-1000">
            <img
              src={
                "https://beccahairandbeauty.co.uk/wp-content/uploads/2021/06/becca-hair-salon.jpg"
              }
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home