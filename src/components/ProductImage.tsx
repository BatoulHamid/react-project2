interface Iprops {
    ImageUrl:string;
    Imagealt:string;
    ImageClass:string


}

function ProductImage({ImageUrl, Imagealt,ImageClass}:Iprops) {



    return (
        <img  src={ImageUrl} alt={Imagealt} className={ImageClass}
        
        />
    )}
    export default ProductImage;