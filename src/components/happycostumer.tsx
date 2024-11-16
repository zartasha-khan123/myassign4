const HappyCustomers = () => {
    const testimonials = [
      {
        name: 'Sarah M.',
        review:
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        rating: 5,
        verified: true,
      },
      {
        name: 'Alex K.',
        review:
          'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. Their unique offerings cater to a variety of occasions.',
        rating: 5,
        verified: true,
      },
      {
        name: 'James L.',
        review:
          "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 5,
        verified: true,
      },
    ];
  
    return (
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
            Our Happy Customers
          </h2>
  
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .288l2.833 8.718h9.167l-7.417 5.391 2.833 8.718-7.416-5.391-7.416 5.391 2.833-8.718-7.417-5.391h9.167z" />
                    </svg>
                  ))}
                </div>
  
                {/* Name and Verification */}
                <div className="flex items-center mb-4">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  {testimonial.verified && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5 text-green-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.285 6.707l-1.414-1.414-9.171 9.171-4.243-4.243-1.414 1.414 5.657 5.657z" />
                    </svg>
                  )}
                </div>
  
                {/* Review */}
                <p className="text-gray-600">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default HappyCustomers