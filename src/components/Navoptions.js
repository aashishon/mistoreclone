import React , {useEffect , useState} from 'react'
import Navcard from "./Navcard.js"
import "../styles/navoptions.css"


const Navoptions = ({miphones,redmiphones,laptops,tv,fitness,audio,home}) => {
  
    const [miphonesToggle,setmiphoneToggle] = useState(false);
    const [redmiphonesToggle , setredmiphonesToggle] = useState(false);
    const [laptopsToggle , setlaptopsToggle] = useState(false);
    const [tvToggle , settvToggle] = useState(false);
    const [audioToggle , setaudioToggle] = useState(false);
    const [fitnessToggle , setfitnessToggle] = useState(false);
    const [homeToggle , sethomeToggle] = useState(false);




    useEffect(()=>{
        if(window.location.pathname === "/Home"){
            return sethomeToggle(true)
        }
        if(window.location.pathname === "/MiPhones"){
            return setmiphoneToggle(true)
        }
        if(window.location.pathname === "/RedmiPhones"){
            return setredmiphonesToggle(true)
        }
        if(window.location.pathname === "/TV"){
            return settvToggle(true)
        }
        if(window.location.pathname === "/Laptops"){
            return setlaptopsToggle(true)
        }
        if(window.location.pathname === "/Fitness"){
            return setfitnessToggle(true)
        }
        if(window.location.pathname === "/Audio"){
            return setaudioToggle(true)
        }
    },[])




    return (
    <div className="navoptions">
        {miphonesToggle? miphones.map((item,index)=>{
            return(
                <Navcard name={item.name} price={item.price} image={item.image}  key={item.image} index={index} />
            )
        }):null
    }
        {redmiphonesToggle? redmiphones.map((item,index)=>{
            return(
                <Navcard name={item.name} price={item.price} image={item.image} key={item.image} index={index}/>
            )
        }):null
    }
        {laptopsToggle? laptops.map((item,index)=>{
            return(
                <Navcard name={item.name} price={item.price} image={item.image} key={item.image} index={index}/>
            )
        }):null
    }
        {tvToggle? tv.map((item,index)=>{
            return(
                <Navcard name={item.name} price={item.price} image={item.image} key={item.image} index={index} />
            )
        }):null
    }
        {fitnessToggle? fitness.map((item,index)=>{
            return(
                <Navcard name={item.name} price={item.price} image={item.image} key={item.image} index={index}/>
            )
        }):null
    }
        {homeToggle? home.map((item,index)=>{
            return(
                <Navcard name={item.name} price={item.price} image={item.image} key={item.image} index={index}/>
            )
        }):null
    }
        {audioToggle? audio.map((item,index)=>{
            return(
                <Navcard name={item.name} price={item.price} image={item.image} key={item.image} index={index}/>
            )
        }):null
    }
    </div>
  )
}

export default Navoptions