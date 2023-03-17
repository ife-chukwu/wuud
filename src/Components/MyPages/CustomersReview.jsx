import React, { useState, Fragment } from "react";

export const CustomersReview = () => {
  const [images, setImages] = useState(0);

  const CustomerInfo = [
    {
      id: "1",

      img: "Images/CustomersInfo/img1.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "Having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "1",
      img: "Images/CustomersInfo/img2.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "2",
      img: "Images/CustomersInfo/img3.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "1",
      img: "Images/CustomersInfo/img3.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "1",
      img: "Images/CustomersInfo/img3.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "2",
      img: "Images/CustomersInfo/img3.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "1",
      img: "Images/CustomersInfo/img3.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "1",
      img: "Images/CustomersInfo/img3.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "1",
      img: "Images/CustomersInfo/img3.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
  ];
  return (
    <div className="w-full h-full ">
      <div className="flex justify-center mt-5 font-bold text-2xl ">
        <h1 className="text-gray-600">
          Our Customers <span className="text-orange-500">Reviews</span>{" "}
        </h1>
      </div>
      {CustomerInfo.map((item, index) => (
        <Fragment key={item.id}>
          {index === images && (
            <div className=" flex justify-center items-center">
              <div className=" w-[700px]  items-center mt-40 border border-gray-100 bg-gray-100 rounded-lg shadow-md shadow-black/30  pt-10 pb-40 mb-40">
                <div className="flex justify-center">
                  <figure className="w-[130px] h-[120px] my-5">
                    <img
                      src="/Images/dp.jpeg"
                      className="w-full h-full rounded-full"
                    />
                  </figure>
                </div>

                <div className="flex justify-center ">
                  <figure className="w-[500px] h-[300px] ">
                    <img src={item.img} className="w-full h-full" />
                    <p className="flex justify-center  mt-5 mb-5 text-[14px] tracking-wide text-black/70 font-bold">
                      {item.customerName}
                    </p>
                    <p className="text-[12px] font-semibold text-gray-500">{item.customerComment}</p>
                  </figure>
                </div>
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};
