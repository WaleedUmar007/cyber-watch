    import Image from 'next/image'
    import image from '../public/about.png'

    function Features() {
      return (
        <div className="h-[880px] w-full bg-[#250F55] features">
          <div className="mt-4">
            <h1 className="font-normal text-white text-[80px] mt-5 text-center">
              Features
            </h1>
          </div>

          {/* card for Chatbot */}
          <div className="grid grid-cols-3 gap-3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-12 bg-[#B9A1D6] space-x-2">
              <div className="flex align-middle justify-center mt-2">
                <Image
                  class="rounded-full"
                  src={image}
                  alt="chatbot feature"
                  height="300"
                  width="300"
                />
              </div>

              <div className="px-6 py-4">
                <div className="font-semibold text-[55px] mb-2 text-[#250F55] font-Montserrat text-center">
                  Chatbot
                </div>
                <p className="text-[#4A15BA] text-[25px] font-normal font-Montserrat">
                  Chatbot that will recommend you personalized content to make you
                  feel better
                </p>
              </div>
            </div>

            {/* card for Recommender System*/}
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-12 bg-[#B9A1D6] space-x-2">
              <div className="flex align-middle justify-center mt-2">
                <Image
                  class="rounded-full"
                  src={image}
                  alt="chatbot feature"
                  height="300"
                  width="300"
                />
              </div>

                <div className="px-6 py-4">
                  <div className="font-semibold text-[55px] mb-2 text-[#250F55] font-Montserrat text-center">
                    Recommnder System
                  </div>
                  <p className="text-[#4A15BA] text-[25px] font-normal font-Montserrat">
                    Chatbot that will recommend you personalized content to make you
                    feel better
                  </p>
                </div>
              </div>

            {/* card for Analytics */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-12 bg-[#B9A1D6] space-x-2">
              <div className="flex align-middle justify-center mt-2">
                <Image
                  class="rounded-full"
                  src={image}
                  alt="chatbot feature"
                  height="300"
                  width="300"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-semibold text-[55px] mb-2 text-[#250F55] font-Montserrat text-center">
                  Analytics
                </div>
                <p className="text-[#4A15BA] text-[25px] font-normal font-Montserrat">
                  Chatbot that will recommend you personalized content to make you
                  feel better
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }

    export default Features
