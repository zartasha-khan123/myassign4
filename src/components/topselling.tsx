import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function TopSelling() {
  const products = [
    {
      id: 1,
      name: "Vertical Striped Shirt",
      image: "/images/first2.png",
      rating: 5,
      price: 212,
      oldPrice: 232,
      discount: -20,
    },
    {
      id: 2,
      name: "COURAGE GRAPHIC T-SHIRT",
      image: "/images/second2.png",
      rating: 4,
      price: 145,
      oldPrice: 110,
      discount: 15,
    },
    {
      id: 3,
      name: "LOOSE FIT BERMUDA SHORTS",
      image: "/images/third.png",
      rating: 3.5,
      price: 80,
      oldPrice: 160,
      discount: 10,
    },
    {
      id: 4,
      name: "FADED SKINNY JEANS",
      image: "/images/paint2.png",
      rating: 5.0,
      price: 210,
      oldPrice: 250,
      discount: 20,
    },
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">TOP SELLING</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="text-center bg-white shadow-md p-4 rounded-md">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />

            {/* Product Name */}
            <h3 className="mt-4 text-gray-800 font-semibold">{product.name}</h3>

            {/* Rating */}
            <div className="flex justify-center items-center mt-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`h-5 w-5 ${
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              <span className="text-sm text-gray-600 ml-2">{product.rating}/5</span>
            </div>

            {/* Pricing */}
            <div className="flex justify-center items-center space-x-2 mt-4">
              <span className="text-lg font-bold text-gray-800">${product.price}</span>
              {product.oldPrice && (
                <span className="text-sm line-through text-gray-500">
                  ${product.oldPrice}
                </span>
              )}
              {product.discount && (
                <span className="text-sm font-semibold text-red-500">
                  -{product.discount}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
