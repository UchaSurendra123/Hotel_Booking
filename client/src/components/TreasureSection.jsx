import React from 'react'

const TreasureSection = () => {
  const treasures = [
    {
      image: "https://static.codia.ai/image/2025-10-23/WwDQyc4kyP.png",
      title: "Green Lake",
      category: "Nature"
    },
    {
      image: "https://static.codia.ai/image/2025-10-23/FtRqZZypH7.png",
      title: "Dog Clubs",
      category: "Pool"
    },
    {
      image: "https://static.codia.ai/image/2025-10-23/auY3TD4kPh.png",
      title: "Labour and Wait",
      category: "Shopping",
      isPopular: true
    },
    {
      image: "https://static.codia.ai/image/2025-10-23/BfB1Dt81bA.png",
      title: "Snorkeling",
      category: "Beach"
    }
  ]

  return (
    <section className="mt-16 mb-16">
      <h2 className="text-20 font-medium leading-30 text-primary mb-8">
        Famous Places 
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {treasures.map((treasure, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden">
            <div className="relative">
              <img 
                src={treasure.image} 
                alt={treasure.title}
                className="w-full h-45 object-cover"
              />
              
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-20 font-normal leading-30 text-primary mb-1">
                {treasure.title}
              </h3>
              <p className="text-15 leading-22.5 text-gray-text">
                {treasure.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TreasureSection
