// import { useEffect, useState } from "react";
import UseMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    // this function use custom Hooks
    // const[menu, setMenu]=useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItem=data.filter(item=>item.category=== "popular")
    //         setMenu(popularItem)
    //     })
    // }  ,[])

    const [menu]=UseMenu();
    const popular = menu.filter(item=>item.category=== "popular")
    return (
        <section className="mb-12">
            <SectionTitle
            heading={"Frome Our Menu"}
            subHeading={"Popular Item"}
            ></SectionTitle>
            <div className="grid  md:grid-cols-2 gap-10">
                {
                    popular.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem> )
                }
            </div>
            <div className="justify-center items-center text-center mt-4">
            <button className="btn btn-outline text-vlack border-0 border-b-4 border-black uppercase">Vew Full Menu</button>
            </div>

            
        </section>
    );
};

export default PopularMenu;