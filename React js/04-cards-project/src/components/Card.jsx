import React from "react";
import { Bookmark } from "lucide-react";

const Card = (data) => {
  console.log(data);
  return (
    <div className="card">
      {/* top */}
      <div className="top">
        <div className="img-border">
          <img src={data.logo} alt="logo" />
        </div>
        <button className="btn">
          <p>Save</p>
          <Bookmark className="icon" />
        </button>
      </div>

      {/* mid */}
      <div className="mid">
        <div className="oneline">
          <h4 className="company">{data.companyName}</h4>
          <p className="upload-status"> {data.datePosted}</p>
        </div>
        <h3 className="role">{data.post}</h3>
        <div className="tags">
          <div className="tag">{data.tag1}</div>
          <div className="tag">{data.tag2}</div>
        </div>
      </div>

      <hr className="hr" />

      {/* footer */}
      <div className="footer">
        <div className="price">
          <h3 className="money">{data.pay}</h3>
          <div className="city">{data.location}</div>
        </div>
        <div className="btn-apply">
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
