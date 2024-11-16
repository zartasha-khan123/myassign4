// // components/Hero.js
export default function Hero() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12">
        {/* Text */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Find Clothes <br /> That Matches <br /> Your Style
          </h2>
          <p className="mt-4 text-gray-600">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
            Shop Now
          </button>
          <div className="flex justify-around text-center pt-20">
        <div>
          <h3 className="text-3xl font-bold">200+</h3>
          <p className="text-gray-600">International Brands</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">2,000+</h3>
          <p className="text-gray-600">High-Quality Products</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">30,000+</h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>
      </div>
       
        </div>
        {/* Image */}
        <div className="mt-8 md:mt-0">
          <img
            src="/images/Rectangle 2.png"
            alt="Fashion Models"
            className="w-full max-w-sm md:max-w-md rounded-lg"
          />
        </div>
      </section>
    );
  }
  