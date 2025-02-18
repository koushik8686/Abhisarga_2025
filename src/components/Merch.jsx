"use client"

import { useState, useEffect } from "react"
import ParallaxComponent from "./ParllaxComponent"
import { Sparkles } from "lucide-react"

const merchandiseItems = [
  {
    image: "/TShirt.webp",
    title: "Front View",
  },
  {
    image: "/TShirt.webp",
    title: "Side View",
  },
  {
    image: "/TShirt.webp",
    title: "Back View",
  },
]

export default function Merch() {
  const [selectedItem, setSelectedItem] = useState(0)

  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"]
  const getCardStyle = (index) => {
    const baseStyle = "absolute w-full h-full transition-all duration-500 ease-in-out rounded-lg cursor-pointer"

    if (index === selectedItem) {
      return `${baseStyle} transform scale-100 opacity-100 z-30 border-2 border-[#B8860B] shadow-[0_0_25px_rgba(184,134,11,0.4)]`
    } else if (index === (selectedItem + 1) % merchandiseItems.length) {
      return `${baseStyle} transform translate-x-1/2 scale-90 opacity-40 z-20`
    } else {
      return `${baseStyle} transform -translate-x-1/2 scale-90 opacity-40 z-10`
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedItem((prev) => (prev + 1) % merchandiseItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.98)), url(${encodeURI("/MerchBg.jpg")})`,
      }}
    >
      <ParallaxComponent backgroundImage="/Merch.jpg" heading="Mystical Merchandise" />
      <img src="/divider.png" className="mx-auto block" alt="" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#B8860B] mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
             Collection
            <Sparkles className="w-6 h-6" />
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Adorn yourself with Abhisarga's merchandise and show off your mystical prowess.
          </p>
        </div>

        <div className="relative w-full max-w-[400px] h-[400px] sm:h-[500px] mx-auto">
          <div className="relative w-full h-full">
            {merchandiseItems.map((item, index) => (
              <div key={index} className={getCardStyle(index)} onClick={() => setSelectedItem(index)}>
                <div className="relative h-full bg-[#0D1117] rounded-lg overflow-hidden border border-[#B8860B]/20">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-[300px] sm:h-[400px] object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#0D1117] to-transparent p-4">
                    <h3 className="text-xl font-bold text-[#B8860B] mb-2 text-center">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="flex justify-center gap-2 mb-4">
            {merchandiseItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === selectedItem ? "bg-[#B8860B]" : "bg-gray-600"
                }`}
                onClick={() => setSelectedItem(index)}
              />
            ))}
          </div>
          <div className="mb-6">
            <h4 className="text-[#B8860B] font-semibold mb-3">Select Size</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  className={`w-12 h-12 rounded-lg border-2 transition-all duration-300 
                    hover:border-[#B8860B]/50 hover:bg-[#B8860B]/10`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="inline-block bg-[#0D1117] p-4 rounded-lg border border-[#B8860B]/20">
            <span className="text-2xl font-bold text-[#B8860B] mr-4">₹229.99</span>
            <button className="px-6 py-2 bg-[#B8860B] text-black font-semibold rounded-md hover:bg-[#9A7209] transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

