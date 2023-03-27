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
      id: "2",
      img: "Images/CustomersInfo/img2.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "3",
      img: "Images/CustomersInfo/img3.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "4",
      img: "Images/CustomersInfo/img3.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "5",
      img: "Images/CustomersInfo/img3.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "6",
      img: "Images/CustomersInfo/img3.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "7",
      img: "Images/CustomersInfo/img3.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "8",
      img: "Images/CustomersInfo/img3.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
    {
      id: "9",
      img: "Images/CustomersInfo/img3.jpg",
      customerName: "Alexandra Book Shelf",
      customerComment:
        "having beautiful furniture in your home is not about modernity or sophistication or cult. It ia very much a necessity for a healthy outlook to your own life... #ULstory #Happysouls",
    },
  ];
  return (
    <div className="w-full h-full ">
      <div className="flex justify-center mb-10 font-bold text-2xl ">
        <h1 className="text-gray-600">
          Our Customers <span className="text-orange-500">Reviews</span>{" "}
        </h1>
      </div>
      {CustomerInfo.map((item, index) => (
        <Fragment key={item.id}>
          {index === images && (
            <div className="flex justify-center items-center">
              <div className="w-1/4 items-center border border-gray-100 bg-gray-100 rounded-lg shadow-md shadow-black/30">
                <div className="flex">
                  <div className="flex justify-center mt-5">
                    <figure className="w-1/5 h-3/4 ">
                      <img
                        src="/Images/dp.jpeg"
                        className="w-full h-full rounded-full"
                      />
                    </figure>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <figure className="w-4/5">
                    <img src={item.img} className="w-full h-full" />
                  </figure>
                </div>

                <p className="flex justify-center  mt-5 mb-5 text-[14px] tracking-wide text-black/70 font-bold">
                  {item.customerName}
                </p>
                <div className="flex justify-center w-full">
                  <p className="text-sm pb-10 w-3/4 flex justify-center text-center text-gray-500">
                    {item.customerComment}
                  </p>
                </div>
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};
