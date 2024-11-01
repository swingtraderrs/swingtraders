import { useNavigate } from "react-router-dom";

function Card({ title, text, image,navigateurl}) {
    const navigate = useNavigate();
    return (
        <>
            <div className="card my-sm-4 mx-auto text-black border my-3  bg-body-light shadow-lg" style={{width:"100%", background:""}}>
                <img 
                    className="card-img-top img-fluid" 
                    src={image} 
                     alt="Description"
                    style={{ height: "150px", objectFit: "cover" }} // Ensures uniform image size
                />
                <div className="card-body my-3">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <div className="col-auto">
                            <button className="btn btn-light  rounded"
                            onClick={()=>{
                                navigate(navigateurl);
                            }}>View Details</button>
                        </div>
                    <div className="col-auto">
                        <button className="btn btn-danger text-light rounded" onClick={()=>{
                            navigate(`/enroll/${title}`);
                        }}>Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
