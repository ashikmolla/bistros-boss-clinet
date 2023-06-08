import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCatagory = ({items, title, img}) => {
    return (
        <div className="pt-8">
             {title && <Cover  img={img} title={title} ></Cover>}
            <div className="grid  md:grid-cols-2 gap-10 mt-16 mb-8">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`} className="text-center">
            <button className="btn btn-outline text-black mb-4 border-0 border-b-4 border-black">Order Now</button>
            </Link>

        </div>
    );
};

export default MenuCatagory;