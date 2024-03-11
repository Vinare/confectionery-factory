export const yandexMap = () => {
  window.map = null;

  async function initMap() {
    let map;

    await ymaps3.ready;

    const {
      YMap,
      YMapDefaultSchemeLayer,
      YMapDefaultFeaturesLayer,
      YMapMarker,
    } = ymaps3;

    map = new YMap(
      document.getElementById("map"),
      {
        location: {
          center: [46.00891089556499, 51.57077959379591],
          zoom: 17,
        },
      },
      [new YMapDefaultSchemeLayer({}), new YMapDefaultFeaturesLayer({})]
    );

    const markerElement = document.createElement("img");
    markerElement.className = "contacts-map--icon-marker";
    markerElement.style.width = "89px";
    markerElement.style.height = "117px";
    markerElement.style.position = "relative";
    markerElement.style.transform = "translate(-50%, -50%)";
    markerElement.src = "/images/icons/marker.png";
    map.addChild(
      new YMapMarker(
        { coordinates: [46.00829728258972, 51.57158353822383] },
        markerElement
      )
    );
  }

  initMap();
};
