import React from "react";
import Image from "next/image";
import Logo from "../../../../public/logo-small.png";

const WhatsOn = () => {
  return (
    <div className="WhatsON">
      <div className="p-10 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
        <div className="text-center">
          <h3 className="text-3xl font-semibold">Whats On</h3>
          <p className="mt-5 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            consequatur. Natus, dignissimos eveniet. Nisi dolores enim aliquam
            eligendi aperiam laborum dignissimos eaque pariatur, molestiae,
            assumenda blanditiis sed? Nihil accusamus reprehenderit officiis
            dolores aliquam itaque. A facilis aspernatur necessitatibus,
            sapiente saepe aliquid autem iste commodi! Laudantium mollitia
            distinctio eius sit modi? Lorem
          </p>
        </div>
        <div className="text-center">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <Image className="w-24" src={Logo} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsOn;
