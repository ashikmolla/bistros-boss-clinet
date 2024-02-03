
import { Helmet } from 'react-helmet-async';
import menuImge from '../../../assets/menu/banner3.jpg';
import dessertImge from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImge from '../../../assets/menu/pizza-bg.jpg'
import saladImge from '../../../assets/menu/salad-bg.jpg'
import soupImge from '../../../assets/menu/soup-bg.jpg'
import Cover from '../../Shared/Cover/Cover';
import UseMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCatagory from '../MenuCatagory/MenuCatagory';
// import PopularMenu from '../Home/PopularMenu/PopularMenu';

const Menu = () => {
    const [menu]=UseMenu();
    const dessert= menu.filter(item=>item.category === 'dessert');
    const soup= menu.filter(item=>item.category === 'soup');
    const salad= menu.filter(item=>item.category === 'salad');
    const pizza= menu.filter(item=>item.category === 'pizza');
    const offered= menu.filter(item=>item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover  img={menuImge} title={"Our Menu"} ></Cover>
            {/* main cover */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}>
            </SectionTitle>

            {/* offered menu items */}
            <MenuCatagory items={offered}></MenuCatagory>

            {/* offered dessert items */}
            <MenuCatagory items={dessert} title="dessert" img={dessertImge}></MenuCatagory>

            {/* offered pizza items */}
            <MenuCatagory items={pizza} title="pizza" img={pizzaImge}></MenuCatagory>

            {/* offered salad items */}
            <MenuCatagory items={salad} title="salad" img={saladImge}></MenuCatagory>

            {/* offered soup items */}
            <MenuCatagory items={soup} title="soup" img={soupImge}></MenuCatagory>


        
        </div>
    );
};

export default Menu;