import React from 'react'

const AboutSection = () => {
  const amenities = [
    {
      icon: "https://static.codia.ai/image/2025-10-23/7VT6cP0K22.png",
      text: "2 bedroom"
    },
    {
      icon: "https://static.codia.ai/image/2025-10-23/XtXGtPqAW2.png",
      text: "1 living room"
    },
    {
      icon: "https://static.codia.ai/image/2025-10-23/vdTy83s8ri.png",
      text: "1 bathroom"
    },
    {
      icon: "https://static.codia.ai/image/2025-10-23/HHwaQyVShe.png",
      text: "1 dining room"
    },
    {
      icon: "https://static.codia.ai/image/2025-10-23/vnMVoZQX2S.png",
      text: "WiFi"
    },
    {
      icon: "https://static.codia.ai/image/2025-10-23/tmiGmxZuUW.png",
      text: "AC"
    },
    {
      icon: "https://static.codia.ai/image/2025-10-23/sC5LoDtf1Y.png",
      text: "1 refigrator"
    },
    {
      icon: "https://static.codia.ai/image/2025-10-23/YCAiboaJXZ.png",
      text: "2 television"
    }
  ]

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-20 font-medium leading-30 text-primary mb-4">
          About the place
        </h2>
        <div className="space-y-4 text-gray-text leading-27">
          <p>
            Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.
          </p>
          <p>
            Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img 
              src={amenity.icon} 
              alt={amenity.text}
              className="w-10 h-10 mb-2"
            />
            <span className="text-gray-text leading-27 text-sm">
              {amenity.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
