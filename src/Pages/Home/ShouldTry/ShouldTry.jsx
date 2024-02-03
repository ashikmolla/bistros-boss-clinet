
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import image from "../../../assets/home/slide5.jpg"

const ShouldTry = () => {
    return (
        <div className='my-16'>

            <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"Should Try"}></SectionTitle>
            <div className='grid grid-cols-3 gap-5 p-8'>
                <div className="card shadow-lg rounded-none bg-slate-100">
                    <figure className="">
                        <img src={image} alt="Shoes" className=" w-full h-80 cursor-pointer" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions ">
                            <button className="btn bg-base-300 text-[#BB8506] hover:bg-black border-[#BB8506] border-t-0 border-s-0 border-e-0 border-b-2">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-lg rounded-none bg-slate-100">
                    <figure className="">
                        <img src={image} alt="Shoes" className=" w-full h-80 cursor-pointer" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions ">
                            <button className="btn bg-base-300 text-[#BB8506] hover:bg-black border-[#BB8506] border-0 border-b-2">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-lg rounded-none bg-slate-100">
                    <figure className="">
                        <img src={image} alt="Shoes" className=" w-full h-80 cursor-pointer" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions ">
                            <button className="btn bg-base-300 text-[#BB8506] hover:bg-black border-[#BB8506] border-t-0 border-s-0 border-e-0 border-b-2">Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ShouldTry;