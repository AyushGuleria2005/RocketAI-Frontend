import React, { useEffect, useState } from "react";
import axios from "axios";

const Analytics = () => {
    const [trainedD,setTrainedD] = useState(0)
    useEffect(()=>{
        const fetchDocs = async () => {
            try{
                const res = await axios.get("http://localhost:3000/getCollegeDocs",{withCredentials:true});
                console.log(res);
                setTrainedD(res.data.trainedData)
            }
            catch(err){
                console.log(err.message)
            }
        }
        fetchDocs()
    },[])
  return (
    <div>
      <div className="w-60 h-60 bg-base-100 shadow-sm rounded-3xl flex flex-col justify-center gap-5 bg-slate-200 border-2 border-black ">
        <div className="h-9 text-center">
            <h1 className="text-5xl">📕</h1>
        </div>
        <div className="h-9">
            <h1 className="text-center text-3xl font-semibold text-red-600">
                {trainedD}
            </h1>
        </div>
        <div>
          <h2 className="text-center text-2xl font-bold">Training Data</h2>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
