import Lanyard from "./components/Lanyard/Lanyard";
import { TextGenerate } from "./components/text-effect";
import Waves from "./components/ui/waves";

export default function Hero() {
    return   <div className="min-h-screen overflow-x-hidden ">
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12 ">
          <div className="col-span-6 mx-auto flex justify-center items-center">
            <TextGenerate></TextGenerate>
          </div>
          <div className="col-span-6">
            <Lanyard />
          </div>
        </div>
      </div>
    </div>
}