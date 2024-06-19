import React, { useState } from "react";

const TestingServices = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabIndex) => {
    if (activeTab === tabIndex) {
      setActiveTab(null); // Close the tab if it's already open
    } else {
      setActiveTab(tabIndex); // Open the selected tab
    }
  };

  // Define image URLs (placeholder URLs)
  const foodAndAgriImage =
    "https://avantesusa.com/wp-content/uploads/2019/03/NIR-Grain-testing.jpg";
  const nutritionalValueImage =
    "http://farelabs.com/wp-content/uploads/Nutritional-Value-Testing-Image-pql1812q17g4iapvji08n3y9mtf1x34frryefann9k-1.jpg";
  const qualityTestingImage =
    "https://www.sftslab.com/assets/images/service/large/FOOD-AGRICULTURAL-PRODUCT-TESTING-736x325.jpg";
  const waterTestingImage =
    "https://sherwoodinspection.com/wp-content/uploads/2020/06/potable-water-testing-1536x864.jpg";
  const drinkingWaterImage =
    "https://i.ytimg.com/vi/roHI0-X3J9M/maxresdefault.jpg";
  const rawWaterImage =
    "https://5.imimg.com/data5/CH/AF/MY-925184/raw-water-testing-500x500.png";
  const herbalAyushImage =
    "https://5.imimg.com/data5/SELLER/Default/2021/1/KP/BS/DF/3940029/ayush-approved-lab-500x500.jpg";
  const packageSilverImage =
    "https://pngimg.com/uploads/silver/silver_PNG17190.png";
  const packageGoldImage =
    "https://www.flyycredit.com/wp-content/uploads/2015/12/gold_package.png";
  const packageDiamondImage =
    "https://blackbirdcorporate.co.uk/wp-content/uploads/2017/11/diamond-package_.png";

  return (
    <div className=" max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-center text-gray-200 mb-6">
        Testing
        <br></br>
        <p>-------</p>
        
        <p className="py-4"> Food and Agriculture </p>
      </h2>

      {/* Food and Agricultural Testing */}
      <div className="border rounded-lg overflow-hidden shadow-md mb-6">
        <button
          onClick={() => toggleTab(1)}
          className="w-full text-left py-4 px-6 text-gray-800 hover:bg-gray-200 focus:outline-none flex items-center"
        >
          <img
            src={foodAndAgriImage}
            alt="Food and Agricultural Testing"
            className="h-20 w-20 object-cover rounded-lg mr-4"
          />
          <span className="font-semibold">Food and Agricultural Testing</span>
        </button>
        {activeTab === 1 && (
          <div className="p-4 border-t border-gray-200 flex justify-evenly">
            <div className="mr-10 ">
              <img
                src={nutritionalValueImage}
                alt="Nutritional Value Testing"
                className="h-16 w-16 object-cover rounded-lg mb-2"
              />
              <button
                className="text-black  font-serif  hover:text-blue-600  hover:underline  focus:outline-none block"
                onClick={() => toggleTab(2)}
              >
                Nutritional Value Testing
              </button>
            </div>
            <div>
              <img
                src={qualityTestingImage}
                alt="Quality Testing"
                className="h-16 w-16 object-cover rounded-lg mb-2"
              />
              <button
                className="text-black  font-serif hover:underline hover:text-blue-600   focus:outline-none block"
                onClick={() => toggleTab(3)}
              >
                Quality Testing
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Dropdowns for Nutritional Value and Quality Testing */}
      {/* Nutritional Value Testing Dropdown */}
      {activeTab === 2 && (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Nutritional Value Testing
          </h3>
          <div className="mb-2">
            <p className="mb-1">Details:</p>
            <p className="mb-1">Price: $XX</p>
            <p className="mb-1">Time: XX days</p>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none">
            Book Now
          </button>
        </div>
      )}

      {/* Quality Testing Dropdown */}
      {activeTab === 3 && (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Quality Testing
          </h3>
          <div className="mb-2">
            <p className="mb-1">Details:</p>
            <p className="mb-1">Price: $XX</p>
            <p className="mb-1">Time: XX days</p>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none">
            Book Now
          </button>
        </div>
      )}

      {/* Water Testing */}
      <div className="border rounded-lg overflow-hidden shadow-md mb-6">
        <button
          onClick={() => toggleTab(4)}
          className="w-full text-left py-4 px-6 text-gray-800 hover:bg-gray-200 focus:outline-none flex items-center"
        >
          <img
            src={waterTestingImage}
            alt="Water Testing"
            className="h-20 w-20 object-cover rounded-lg mr-4"
          />
          <span className="font-semibold">Water Testing</span>
        </button>
        {activeTab === 4 && (
          <div className="p-4 border-t border-gray-200 flex justify-evenly">
            <div className="mr-8">
              <img
                src={drinkingWaterImage}
                alt="Drinking Water Testing"
                className="h-16 w-16 object-cover rounded-lg mb-2"
              />
              <button
                className="text-black  font-serif  hover:text-blue-600 hover:underline focus:outline-none block"
                onClick={() => toggleTab(5)}
              >
                Drinking Water Testing
              </button>
            </div>
            <div>
              <img
                src={rawWaterImage}
                alt="Raw Water Testing"
                className="h-16 w-16 object-cover rounded-lg mb-2"
              />
              <button
                className="text-black  font-serif  hover:text-blue-600 hover:underline focus:outline-none block"
                onClick={() => toggleTab(6)}
              >
                Raw Water Testing
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Dropdowns for Water and Herbal Products */}
      {/* Drinking Water Testing Dropdown */}
      {activeTab === 5 && (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Drinking Water Testing
          </h3>
          <div className="mb-2">
            <p className="mb-1">Details:</p>
            <p className="mb-1">Price: $XX</p>
            <p className="mb-1">Time: XX days</p>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      )}

      {/* Raw Water Testing Dropdown */}
      {activeTab === 6 && (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Raw Water Testing
          </h3>
          <div className="mb-2">
            <p className="mb-1">Details:</p>
            <p className="mb-1">Price: $XX</p>
            <p className="mb-1">Time: XX days</p>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      )}

      {/* Herbal and Ayush Products */}
      <div className="border rounded-lg overflow-hidden shadow-md mb-6">
        <button
          onClick={() => toggleTab(7)}
          className="w-full text-left py-4 px-6 text-gray-800 hover:bg-gray-200 focus:outline-none flex items-center"
        >
          <img
            src={herbalAyushImage}
            alt="Herbal and Ayush Products"
            className="h-20 w-20 object-cover rounded-lg mr-4"
          />
          <span className="font-semibold">Herbal and Ayush Products</span>
        </button>
        {activeTab === 7 && (
          <div className="p-4 border-t border-gray-200 flex justify-around">
            <div className="mr-8">
              <img
                src={packageSilverImage}
                alt="Package Silver Testing"
                className="h-16 w-16 object-cover rounded-lg mb-2"
              />
              <button
                className="text-black  font-serif  hover:text-blue-600 hover:underline focus:outline-none block"
                onClick={() => toggleTab(8)}
              >
                Package Silver
              </button>
            </div>
            <div className="mr-8">
              <img
                src={packageGoldImage}
                alt="Package Gold Testing"
                className="h-16 w-16 object-cover rounded-lg mb-2"
              />
              <button
                className="ttext-black  font-serif  hover:text-blue-600 hover:underline focus:outline-none block"
                onClick={() => toggleTab(9)}
              >
                Package Gold
              </button>
            </div>
            <div>
              <img
                src={packageDiamondImage}
                alt="Package Diamond Testing"
                className="h-16 w-16 object-cover rounded-lg mb-2"
              />
              <button
                className="text-black  font-serif  hover:text-blue-600 hover:underline focus:outline-none block"
                onClick={() => toggleTab(10)}
              >
                Package Diamond
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Package Silver Testing Dropdown */}
      {activeTab === 8 && (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Package Silver Testing
          </h3>
          <div className="mb-2">
            <p className="mb-1">Details:</p>
            <p className="mb-1">Price: $XX</p>
            <p className="mb-1">Time: XX days</p>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      )}

      {/* Package Gold Testing Dropdown */}
      {activeTab === 9 && (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Package Gold Testing
          </h3>
          <div className="mb-2">
            <p className="mb-1">Details:</p>
            <p className="mb-1">Price: $XX</p>
            <p className="mb-1">Time: XX days</p>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      )}

      {/* Package Diamond Testing Dropdown */}
      {activeTab === 10 && (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Diamond Testing
          </h3>

          <div className="mb-2">
            <p className="mb-1">Details:</p>
            <p className="mb-1">Price: $XX</p>
            <p className="mb-1">Time: XX days</p>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      )}
    </div>
  );
};

export default TestingServices;
