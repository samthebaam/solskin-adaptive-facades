import PresentationPlayer from "./PresentationPlayer";

// Import all slides
import { Slide01Title } from "./slides/Slide01Title";
import { Slide02Origin } from "./slides/Slide02Origin";
import { Slide03Facade } from "./slides/Slide03Facade";
import { Slide04Intro } from "./slides/Slide04Intro";
import { Slide05Research } from "./slides/Slide05Research";
import { Slide06Actuator } from "./slides/Slide06Actuator";
import { Slide07Solskin } from "./slides/Slide07Solskin";
import { Slide08Validation } from "./slides/Slide08Validation";
import { Slide09Founding } from "./slides/Slide09Founding";
import { Slide10RealBuildings } from "./slides/Slide10RealBuildings";
import { Slide11Keller } from "./slides/Slide11Keller";
import { Slide12Installation } from "./slides/Slide12Installation";
import { Slide12AI } from "./slides/Slide12AI";
import { Slide13Flexibility } from "./slides/Slide13Flexibility";
import { Slide15Competitive } from "./slides/Slide15Competitive";
import { Slide16HSG } from "./slides/Slide16HSG";
import { Slide14Closing } from "./slides/Slide14Closing";

const slides = [
  Slide01Title,
  Slide02Origin,
  Slide03Facade,
  Slide04Intro,
  Slide05Research,
  Slide06Actuator,
  Slide07Solskin,
  Slide08Validation,
  Slide09Founding,
  Slide10RealBuildings,
  Slide11Keller,
  Slide12Installation,
  Slide12AI,
  Slide13Flexibility,
  Slide15Competitive,
  Slide16HSG,
  Slide14Closing,
];

const PresentationApp = () => {
  return <PresentationPlayer slides={slides} />;
};

export default PresentationApp;
