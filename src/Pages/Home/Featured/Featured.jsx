import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featyrdImg from '../../../assets/home/featured.jpg';
import './FeaturedItem.css'


const Featured = () => {
    return (
        <div className="featured-Item pt-8 bg-fixed">
            <SectionTitle heading={"fetured Item"} subHeading={"check It out"}></SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36 ">
                <div>
                    <img src={featyrdImg} alt="" />
                </div>
                <div className="md:ml-10 text-white bg-black bg-opacity-10 py-6 ps-4 ">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Wher can i get seme?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quae velit iure illum recusandae accusamus sapiente dolores, ullam voluptas perspiciatis sequi reiciendis provident ad officia. Quidem fugiat fuga voluptatum eaque soluta veniam, natus cumque facere quo vero expedita dolor, modi voluptate ad. A qui impedit quidem repellat, soluta vero nobis.</p>
                    <button className="btn btn-outline text-white border-0 border-b-4 border-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;