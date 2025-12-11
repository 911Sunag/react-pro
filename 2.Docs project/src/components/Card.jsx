import { FileText } from "lucide-react";
import { Ban } from "lucide-react";
import { Download } from "lucide-react";
import { motion, scale } from "motion/react"

const Card = ({ info, filesize, close, tagCorO,color, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragTransition={{bounceStiffness:600, bounceDamping:10}} className=" relative px-5 py-8 w-60 h-72 rounded-[25px] bg-gray-500/90 overflow-hidden">
      <FileText className="text-gray-300" />
      <p className="mt-5 leading-tight text-sm font-semibold text-white">
        {info}
      </p>

      <div className="absolute bottom-0 left-0 w-full bg-gray-400">
        <div className="flex justify-between px-5 py-2">
          <h5>{filesize}</h5>
          <span className="w-6 h-6 bg-green-700 flex items-center justify-center rounded-full">
            {close ? (
              <Ban size="0.9rem" color="black" />
            ) : (
              <Download size="0.9rem" color="black" />
            )}
          </span>
        </div>
        {tagCorO ? (
          <div className={`w-full py-2 ${color} flex items-center justify-center`}>
            <h5 className="text-white text-sm">Download Now</h5>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Card;
