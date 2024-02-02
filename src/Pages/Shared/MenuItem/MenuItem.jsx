

const MenuItem = ({item}) => { 
    const {name, image, recipe, price}=item ||'';
    return (
        <div className="flex space-x-2 items-center">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h1 className="uppercase">{name}----------------</h1>
                <p className="">{recipe}</p>
            </div>
            <p className="text-yellow-500">{price}</p>
            
        </div>
    );
};

export default MenuItem;