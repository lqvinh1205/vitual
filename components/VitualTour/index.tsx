import dynamic from "next/dynamic";

const VitualTour = dynamic(() => import("./components/VitualTour"), {
  ssr: false,
});

export default VitualTour;
