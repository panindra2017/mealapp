import React from 'react'


const SignupForm = () => {
    return (<div className="flex flex-col ">
        
        <div className="flex-1  flex flex-col items-center">
           <div className="flex flex-col px-4 my-2">
           <div className=""> Fullname : </div>  <div className="flex mx-2"><input className="border " /></div></div>
            <div className="flex flex-col my-2"> 
            <div className=""> Email : </div>  <div className="flex mx-2"><input className="border " /></div></div>
            <div className="flex flex-col my-2"> 
            <div className=""> Mobile : </div>  <div className="flex mx-2"><input className="border " /></div></div>

        </div>

        <div className="flex-1  flex flex-col px-4">
            <div className="border-b">Add to your address :  </div>
            <div className="flex  my-2"><textarea className="w-full  border-2" rows={4} ></textarea></div>


        </div>

      </div>
    )
}

export default SignupForm
