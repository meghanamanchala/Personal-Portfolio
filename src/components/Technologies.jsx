import {  FaNodeJs, FaPython } from "react-icons/fa6"
import {RiReactjsLine} from "react-icons/ri"
import { SiMongodb,SiCplusplus, SiReact, SiReactbootstrap, SiBootstrap, SiMysql } from "react-icons/si"

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div>
                <RiReactjsLine className="text-7xl text-cyan-400 animate-pulse duration-[5s] animate-bounce duration-[2s]"/>
            </div>
            <div className="p-4">
                <SiMongodb className="text-7xl text-green-700 animate-pulse duration-[5s]" />    
            </div>
            <div className="p-4">
                <FaNodeJs className="text-7xl text-green-700 animate-pulse duration-[5s]" />    
            </div>
            <div className="p-4">
                <FaPython className="text-7xl text-cyan-400 animate-pulse duration-[5s]" />    
            </div>
            <div className="p-4">
                <SiCplusplus className="text-7xl text-cyan-700 animate-pulse duration-[5s]" />    
            </div>
            <div className="p-4">
                <SiMysql className="text-7xl text-red-700 animate-pulse duration-[5s]" />    
            </div>
            <div className="p-4">
                <SiBootstrap className="text-7xl text-cyan-700 animate-pulse duration-[5s]" />    
            </div>
        </div>
      
    </div>
  )
}

export default Technologies
