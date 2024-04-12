import shoes from "../../public/shoes.png";
import { SiFlipkart } from "react-icons/si";
import { ImAmazon } from "react-icons/im";

const MidContain = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "120px" }}>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p className="mt-3 mb-3 h6">
              YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
              SHOES, YOUR FEET DESERVE THE BEST AND WE ARE HERE TO TO HELP YOU
              WITH OUR SHOES{" "}
            </p>
            <div>
              <button className="btn btn-danger">Shop Now</button>
              <button className="btn btn-primary m-3 ">Category</button>
            </div>
            <div>
              <p className="h4">Also Available On</p>
              <SiFlipkart style={{ fontSize: "2em" }} />
              <ImAmazon style={{ fontSize: "2em", margin: "15px" }} />
            </div>
          </div>
          <div className="col-5">
            <img className="img-fluid" src={shoes} />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};

export default MidContain;
