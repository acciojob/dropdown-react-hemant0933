import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const states = [
  {
    name: "Madhya Pradesh",
    description: "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
    cities: [
      {
        name: "Indore",
        description: "Indore is a city in west-central India. It’s known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore’s 19th-century Holkar dynasty.",
        landmarks: [
          {
            name: "Mhow",
            description: "Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road.",
          },
          {
            name: "Dewas",
            description: "Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh. The municipality was formerly the seat of two princely states during the British Raj, Dewas Junior state and Dewas Senior state, ruled by the Puar clan of Maratha.",
          },
        ],
      },
      {
        name: "Bhopal",
        description: "Bhopal is a city in the central Indian state of Madhya Pradesh. It's one of India’s greenest cities. There are two main lakes, the Upper Lake and the Lower Lake.",
        landmarks: [
          {
            name: "MANIT",
            description: "Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India. It is part of a group of publicly funded institutions in India known as National Institutes of Technology.",
          },
          {
            name: "Berasia",
            description: "Berasia is a landmark and a nagar palika in Bhopal district in the state of Madhya Pradesh, India.",
          },
        ],
      },
      {
        name: "Gwalior",
        description: "Gwalior is a city in the central Indian state of Madhya Pradesh. It's known for its palaces and temples, including the Sas Bahu Ka Mandir intricately carved Hindu temple.",
        landmarks: [
          {
            name: "Ajaypur",
            description: "Little less known city Ajaypur.",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    description: "Jharkhand is a state in eastern India. It's known for its waterfalls, the elegant Jain temples of Parasnath Hill, and the elephants and tigers of Betla National Park.",
    cities: [
      {
        name: "Dhanbad",
        description: "Dhanbad is the second-most populated city in the Indian state of Jharkhand. It ranks as the 33rd largest city in India and is the 42nd largest million-plus urban agglomeration in India. It is the 96th fastest growing urban area of the world by the City Mayors Foundation.",
        landmarks: [
          {
            name: "IIT(ISM) Dhanbad",
            description: "Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical and research university located in Dhanbad, India. It is an Institute of National Importance. IIT has 18 academic departments covering Engineering.",
          },
          {
            name: "Hirapur",
            description: "Hirapur is a census landmark in Balaghat district in the Indian state of Madhya Pradesh.",
          },
        ],
      },
      {
        name: "Wasseypur",
        description: "Wasseypur is a neighborhood in the city of Dhanbad in Dhanbad Sadar subdivision of Dhanbad district in the state of Jharkhand in India.",
        landmarks: [
          {
            name: "Pandey muhalla",
            description: "Located behind the Dhanbad junction is a must-visit place.",
          },
          {
            name: "MPI Hall",
            description: "Space for everyone",
          },
        ],
      },
      {
        name: "Hazaribagh",
        description: "Hazaribagh is a city and a municipal corporation in Hazaribagh district in the Indian state of Jharkhand. It is the divisional headquarters of North Chotanagpur division.",
        landmarks: [
          {
            name: "Shaheed Nirmal Mahto Park",
            description: "Famous for its giant dinosaur structure",
          },
          {
            name: "Gandhi Maidan",
            description: "Ideal for conducting major events",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    description: "Assam is a state in northeastern India known for its wildlife, archaeological sites, and tea plantations.",
    cities: [
      {
        name: "Guwahati",
        description: "Guwahati is a sprawling city beside the Brahmaputra River in the northeast Indian state of Assam. It’s known for holy sites like the hilltop Kamakhya Temple.",
        landmarks: [
          {
            name: "Ganesh Guri",
            description: "Famous because of PVR city center.",
          },
          {
            name: "Kalyani Nagar",
            description: "Located near famous Lakshmi Nagar",
          },
        ],
      },
      {
        name: "Dimapur",
        description: "Dimapur is a city in Nagaland, India. It is the most populous city of Nagaland and also the most densely populated city in the state with an estimated population of about 250,000.",
        landmarks: [
          {
            name: "City Tower",
            description: "Giant Tower standing by the road since history.",
          },
          {
            name: "Sunday Market",
            description: "Famous for its weekend sale on all items.",
          },
        ],
      },
      {
        name: "Tezpur",
        description: "Tezpur is a landmark and urban agglomeration in Sonitpur district, Assam state, India. Tezpur is located on the banks of the river Brahmaputra, 175 kilometres northeast of Guwahati, and is the largest of the north bank landmarks with a population exceeding 100,000 as per Metropolitan Census 2011.",
        landmarks: [
          {
            name: "Bamuni Hills",
            description: "Best location for photoshoots",
          },
          {
            name: "Bhujkhowa Bazar",
            description: "Central Market for Tezpur",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    description: "Bihar is a state in East India, bordering Nepal. It is divided by the River Ganges, which floods its fertile plains. Important Buddhist pilgrimage sites include the Bodhi Tree in Bodhgaya's Mahabodhi Temple, under which the Buddha allegedly meditated.",
    cities: [
      {
        name: "Patna",
        description: "Patna is an ancient city that sprawls along the south bank of the Ganges River in Bihar, northeast India.",
        landmarks: [
          {
            name: "Sonpur",
            description: "Sonpur is a city and sub-division in the Indian state of Bihar, situated on the banks of the River Gandak and Ganges River in the Saran District.",
          },
          {
            name: "Maner",
            description: "Maner also spelled Maner or Maner Sharif, is a satellite landmark in Patna Metropolitan Region, in the Patna district in the Indian state of Bihar. Maner Sharif lies 24 km west of Patna the capital of Bihar on National Highway 30.",
          },
        ],
      },
      {
        name: "Gaya",
        description: "Gaya is a holy city beside the Falgu River, in the northeast Indian state of Bihar. It’s known for 18th-century Vishnupad Mandir, a riverside temple with an octagonal shrine. Close by, ancient Mangla Gauri Temple is set on a hilltop.",
        landmarks: [
          {
            name: "Bakraur",
            description: "Bakraur, sometimes called Bakrour, is a village located slightly east of Bodh Gaya in the state of Bihar, India. It lies directly across the Phalgu River from the landmark of Bodh Gaya, where Gautama Buddha is said to have attained enlightenment.",
          },
          {
            name: "Barachatti",
            description: "Barachatti is a block in the Gaya district of Bihar, India. Barachatti contains 141 villages and 13 gram panchayat. Sarwan Bazar is the biggest, and Nimi is the smallest village of Barachatti. The total population in Barachatti sub-district is 142,534 according to the census during 2011 by the Indian Government.",
          },
        ],
      },
      {
        name: "Darbhanga",
        description: "Darbhanga is a city and Municipal Corporation in the Indian state of Bihar. It is the 6th largest city of Bihar, only after Patna, Gaya, Bhagalpur, Muzaffarpur, and Purnea. It is the headquarters of Darbhanga district and Darbhanga division and was the seat of the Raj Darbhanga and capital of the Mithila region.",
        landmarks: [
          {
            name: "Singhwara",
            description: "Famous for its Groundnut Market",
          },
          {
            name: "Jale",
            description: "Famous for its roasted seeds market.",
          },
        ],
      },
    ],
  },
];

function App() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLandmark, setSelectedLandmark] = useState("");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
    setSelectedLandmark("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedLandmark("");
  };

  const handleLandmarkChange = (event) => {
    setSelectedLandmark(event.target.value);
  };

  const getStateOptions = () => {
    return states.map((state) => (
      <option key={state.name} value={state.name}>
        {state.name}
      </option>
    ));
  };

  const getCityOptions = () => {
    const selectedStateData = states.find((state) => state.name === selectedState);
    if (selectedStateData) {
      return selectedStateData.cities.map((city) => (
        <option key={city.name} value={city.name}>
          {city.name}
        </option>
      ));
    }
    return [];
  };

  const getLandmarkOptions = () => {
    const selectedStateData = states.find((state) => state.name === selectedState);
    if (selectedStateData) {
      const selectedCityData = selectedStateData.cities.find((city) => city.name === selectedCity);
      if (selectedCityData) {
        return selectedCityData.landmarks.map((landmark) => (
          <option key={landmark.name} value={landmark.name}>
            {landmark.name}
          </option>
        ));
      }
    }
    return [];
  };

  useEffect(() => {
    setSelectedCity("");
    setSelectedLandmark("");
  }, [selectedState]);

  useEffect(() => {
    setSelectedLandmark("");
  }, [selectedCity]);

  return (
    <div className="App">
      <h1>Dropdown Example</h1>
      <div>
        <label>State:</label>
        <select id="state" value={selectedState} onChange={handleStateChange}>
          {/* <option value="">Select a state</option> */}
          {getStateOptions()}
        </select>
      </div>
      {selectedState && (
        <div>
          <label>City:</label>
          <select id="city" value={selectedCity} onChange={handleCityChange}>
            {/* <option value="">Select a city</option> */}
            {getCityOptions()}
          </select>
        </div>
      )}
      {selectedCity && (
        <div>
          <label>Landmark:</label>
          <select id="landmark" value={selectedLandmark} onChange={handleLandmarkChange}>
            {/* <option value="">Select a landmark</option> */}
            {getLandmarkOptions()}
          </select>
        </div>
      )}
      {selectedLandmark && (
        <div>
          <h2>Selected Landmark:</h2>
          <p>State: {selectedState}</p>
          <p>City: {selectedCity}</p>
          <p>Landmark: {selectedLandmark}</p>
        </div>
      )}
    </div> 
  );
}

export default App;
