
const Browse = () => {
    const styles = [
      { name: 'Casual', image: '/images/casual.png', size: 'col-span-1', alt: 'image' },
      { name: 'Formal', image: '/images/formal.png', size: 'col-span-2', alt: 'image' },
      { name: 'Party', image: '/images/party.png', size: 'col-span-2', alt: 'image' },
      { name: 'Gym', image: '/images/gym.png', size: 'row-span-1', alt: 'image' },
    ];
  
    return (
      <div className="flex items-center justify-center min-h-screen py-12 bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-10">Browse by Dress Style</h2>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {styles.map((style, index) => (
              <div
                key={index}
                className={`relative ${style.size} bg-gray-100 overflow-hidden rounded-lg shadow-md`}
              >
                <img
                  src={style.image}
                  alt={style.name}
                  className="object-cover w-full h-full"
                />
                {/* Label */}
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 text-sm font-medium rounded">
                  {style.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Browse;
  

