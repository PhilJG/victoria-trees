const data = [
  {
    type: "FeatureCollection",
    name: "Tree_Species",
    crs: {
      type: "name",
      properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
    },
    features: [
      {
        type: "Feature",
        properties: {
          OBJECTID: 1,
          SiteID: "134",
          Address: "100",
          Street: "DALLAS RD",
          OnStreet: "DALLAS RD",
          FromStreet: "COOK ST",
          ToStreet: "DOUGLAS ST",
          SideOfParcel: "N/A",
          Site: "794",
          Species: "Quercus garryana",
          DiameterAtBreastHeight: 34.0,
          GrowSpace: "Turf",
          Trunks: 1,
          Height: 7.0,
          Width: 6.0,
          TreeCategory: "Park Trees",
          Area: "James Bay",
          Parks: "BEACON HILL PARK",
          BotanicalName: "Quercus garryana",
          CommonName: "Garry oak",
        },
        geometry: {
          type: "Point",
          coordinates: [-123.364702156148766, 48.411793350014378],
        },
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 2,
          SiteID: "135",
          Address: "100",
          Street: "DALLAS RD",
          OnStreet: "DALLAS RD",
          FromStreet: "COOK ST",
          ToStreet: "DOUGLAS ST",
          SideOfParcel: "N/A",
          Site: "795",
          Species: "Quercus garryana",
          DiameterAtBreastHeight: 41.0,
          GrowSpace: "Turf",
          Trunks: 1,
          Height: 6.0,
          Width: 6.0,
          TreeCategory: "Park Trees",
          Area: "James Bay",
          Parks: "BEACON HILL PARK",
          BotanicalName: "Quercus garryana",
          CommonName: "Garry oak",
        },
        geometry: {
          type: "Point",
          coordinates: [-123.364757967280511, 48.411808861312018],
        },
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 3,
          SiteID: "136",
          Address: "100",
          Street: "DALLAS RD",
          OnStreet: "DALLAS RD",
          FromStreet: "COOK ST",
          ToStreet: "DOUGLAS ST",
          SideOfParcel: "N/A",
          Site: "798",
          Species: "Pseudotsuga menziesii",
          DiameterAtBreastHeight: 61.0,
          GrowSpace: "Shrub bed",
          Trunks: 1,
          Height: 20.0,
          Width: 5.0,
          TreeCategory: "Park Trees",
          Area: "Fairfield",
          Parks: "BEACON HILL PARK",
          BotanicalName: "Pseudotsuga menziesii",
          CommonName: "Douglas fir",
        },
        geometry: {
          type: "Point",
          coordinates: [-123.36383956423424, 48.413274617755938],
        },
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 4,
          SiteID: "137",
          Address: "100",
          Street: "DALLAS RD",
          OnStreet: "DALLAS RD",
          FromStreet: "COOK ST",
          ToStreet: "DOUGLAS ST",
          SideOfParcel: "N/A",
          Site: "799",
          Species: "Pseudotsuga menziesii",
          DiameterAtBreastHeight: 40.0,
          GrowSpace: "Shrub bed",
          Trunks: 1,
          Height: 12.0,
          Width: 5.0,
          TreeCategory: "Park Trees",
          Area: "Fairfield",
          Parks: "BEACON HILL PARK",
          BotanicalName: "Pseudotsuga menziesii",
          CommonName: "Douglas fir",
        },
        geometry: {
          type: "Point",
          coordinates: [-123.363837540942981, 48.413288030825896],
        },
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 5,
          SiteID: "138",
          Address: "100",
          Street: "DALLAS RD",
          OnStreet: "DALLAS RD",
          FromStreet: "COOK ST",
          ToStreet: "DOUGLAS ST",
          SideOfParcel: "N/A",
          Site: "800",
          Species: "Pseudotsuga menziesii",
          DiameterAtBreastHeight: 95.0,
          GrowSpace: "Shrub bed",
          Trunks: 1,
          Height: 30.0,
          Width: 10.0,
          TreeCategory: "Park Trees",
          Area: "Fairfield",
          Parks: "BEACON HILL PARK",
          BotanicalName: "Pseudotsuga menziesii",
          CommonName: "Douglas fir",
        },
        geometry: {
          type: "Point",
          coordinates: [-123.363832505463549, 48.413256941144596],
        },
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 6,
          SiteID: "139",
          Address: "100",
          Street: "DALLAS RD",
          OnStreet: "DALLAS RD",
          FromStreet: "COOK ST",
          ToStreet: "DOUGLAS ST",
          SideOfParcel: "N/A",
          Site: "801",
          Species: "Pseudotsuga menziesii",
          DiameterAtBreastHeight: 99.0,
          GrowSpace: "Shrub bed",
          Trunks: 1,
          Height: 28.0,
          Width: 12.0,
          TreeCategory: "Park Trees",
          Area: "Fairfield",
          Parks: "BEACON HILL PARK",
          BotanicalName: "Pseudotsuga menziesii",
          CommonName: "Douglas fir",
        },
        geometry: {
          type: "Point",
          coordinates: [-123.363548824724646, 48.413337316069949],
        },
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 7,
          SiteID: "140",
          Address: "100",
          Street: "DALLAS RD",
          OnStreet: "DALLAS RD",
          FromStreet: "COOK ST",
          ToStreet: "DOUGLAS ST",
          SideOfParcel: "N/A",
          Site: "802",
          Species: "Pseudotsuga menziesii",
          DiameterAtBreastHeight: 66.0,
          GrowSpace: "Shrub bed",
          Trunks: 1,
          Height: 18.0,
          Width: 8.0,
          TreeCategory: "Park Trees",
          Area: "Fairfield",
          Parks: "BEACON HILL PARK",
          BotanicalName: "Pseudotsuga menziesii",
          CommonName: "Douglas fir",
        },
        geometry: {
          type: "Point",
          coordinates: [-123.363388283422282, 48.41335636418777],
        },
      },
    ],
  },
];

const map = L.map("map").setView(
  [48.411793350014378, -123.364702156148766],
  15
);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const trees = L.geoJson(data)
  .bindPopup((layer) => {
    return `${layer.feature.properties.CommonName}`;
  })
  .addTo(map);

const treeData = data[0].features;
console.log(treeData);

// read-script
treeData.forEach((f) => {
  const { properties } = f;
  console.log(f.properties.Site);
});
