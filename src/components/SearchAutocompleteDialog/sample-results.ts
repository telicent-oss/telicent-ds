const RESULTS = [
  {
    id: "http://environment.data.gov.uk/flood-monitoring/id/floodAreas/065FWC8101",
    types: ["http://ies.data.gov.uk/ontology/ies4#FloodArea"],
    label: "Cowes, East Cowes, and Newport",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov059",
    types: ["http://ies.data.gov.uk/ontology/ies4#Library"],
    label: "Cowes Library",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov072",
    types: ["http://ies.data.gov.uk/ontology/ies4#Bandstand"],
    label: "Cowes Bandstand",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#C009",
    types: ["http://ies.data.gov.uk/ontology/ies4#TelecommunicationsComplex"],
    label: "Cowes Communications Mast",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#C024",
    types: ["http://ies.data.gov.uk/ontology/ies4#TelecommunicationsExchange"],
    label: "Cowes Telephone exchange",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Ed003",
    types: ["http://ies.data.gov.uk/ontology/ies4#FurtherEducationalCollege"],
    label: "Cowes Enterprise College",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#F001",
    types: ["http://ies.data.gov.uk/ontology/ies4#LiquidFuelStorageComplex"],
    label: "Cowes Harbour Fuels",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#W018",
    types: ["http://ies.data.gov.uk/ontology/ies4#WastewaterCollectionNetwork"],
    label: "Esplanade Cowes Wps",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov060",
    types: ["http://ies.data.gov.uk/ontology/ies4#PrimarySchool"],
    label: "Cowes Primary School",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov064",
    types: ["http://ies.data.gov.uk/ontology/ies4#CommunityCentre"],
    label: "Cowes Youth Centre",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov079",
    types: ["http://ies.data.gov.uk/ontology/ies4#Facility"],
    label: "Cowes Sea Cadets",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov106",
    types: ["http://ies.data.gov.uk/ontology/ies4#CommunityCentre"],
    label: "Cowes Childrens Centre",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov116",
    types: ["http://ies.data.gov.uk/ontology/ies4#PrimarySchool"],
    label: "East Cowes Primary",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov121",
    types: ["http://ies.data.gov.uk/ontology/ies4#Cemetery"],
    label: "East Cowes Cemetery",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#E001",
    types: [
      "http://ies.data.gov.uk/ontology/ies4#OilFiredPowerGenerationComplex",
    ],
    label: "East Cowes Power Station",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#T024",
    types: ["http://ies.data.gov.uk/ontology/ies4#FerryPort"],
    label: "East Cowes Ferry Terminal",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#T025",
    types: ["http://ies.data.gov.uk/ontology/ies4#FerryPort"],
    label: "Cowes Ferry Terminal (foot)",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#W017",
    types: ["http://ies.data.gov.uk/ontology/ies4#WastewaterDisposalComplex"],
    label: "Egypt Point Cowes CSO",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#W039",
    types: ["http://ies.data.gov.uk/ontology/ies4#WastewaterCollectionNetwork"],
    label: "Market Hill Cowes Wps",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#W041",
    types: ["http://ies.data.gov.uk/ontology/ies4#WastewaterCollectionNetwork"],
    label: "Medina Road Cowes Wps",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov077",
    types: ["http://ies.data.gov.uk/ontology/ies4#Office"],
    label: "Cowes Floating Bridge Office",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov096",
    types: ["http://ies.data.gov.uk/ontology/ies4#CycleTrack"],
    label: "Land off Cowes Cycletrack",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov102",
    types: ["http://ies.data.gov.uk/ontology/ies4#Facility"],
    label: "Cowes Week Temporary Supply",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov135",
    types: ["http://ies.data.gov.uk/ontology/ies4#CommunityCentre"],
    label: "East Cowes Childrens Centre",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov138",
    types: ["http://ies.data.gov.uk/ontology/ies4#Facility"],
    label: "East Cowes Beach Huts",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov141",
    types: ["http://ies.data.gov.uk/ontology/ies4#Facility"],
    label: "East Cowes MUGA Queensgate",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#Gov151",
    types: ["http://ies.data.gov.uk/ontology/ies4#Facility"],
    label: "East Cowes Group Home",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#E002",
    types: [
      "http://ies.data.gov.uk/ontology/ies4#LowVoltageElectricitySubstationComplex",
    ],
    label: "East Cowes 33kv /11kV Substation",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#E003",
    types: [
      "http://ies.data.gov.uk/ontology/ies4#HighVoltageElectricitySubstationComplex",
    ],
    label: "East Cowes 132/33kV Substation",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#T044",
    types: ["http://ies.data.gov.uk/ontology/ies4#Road"],
    label: "Road - A3020 Newport to Cowes",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#W008",
    types: ["http://ies.data.gov.uk/ontology/ies4#WastewaterCollectionNetwork"],
    label: "Albany Road East Cowes Wps",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#W059",
    types: ["http://ies.data.gov.uk/ontology/ies4#WastewaterCollectionNetwork"],
    label: "St Marys Road Cowes Wps",
  },
  {
    id: "https://www.iow.gov.uk/DigitalTwin#T043",
    types: ["http://ies.data.gov.uk/ontology/ies4#HighwayRoundabout"],
    label: "Road - A3021 Palmers Brook Farm Roundabout to East Cowes",
  },
];

export default RESULTS;
