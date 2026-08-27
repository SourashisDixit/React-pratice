import React, { useState } from 'react';

const App = () => {

  const submitHandler = (e) => {
    console.log(`Title: ${title}, Details: ${details}`);
    e.preventDefault();
    setTitle('');
    setDetails('');
  };

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
 

  return (
    <div className="min-h-screen p-5 lg:p-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        
        <div>
          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-6 p-6 lg:p-10 border border-amber-500 rounded-xl"
          >

            <input
              type="text"
              placeholder="Enter Notes Heading"
              className="p-4 border-2 rounded-lg text-xl lg:text-2xl font-bold outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Enter Details"
              className="p-4 border-2 rounded-lg text-xl lg:text-2xl font-bold outline-none min-h-48 resize-none"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />

            <button
              type="submit"
              className="bg-amber-500 p-4 rounded-lg text-xl lg:text-2xl font-bold hover:bg-amber-600"
            >
              Submit
            </button>

          </form>
        </div>


        {/* Right Side - Notes */}
        <div className="bg-gray-800 p-6 lg:p-9 rounded-xl text-white">

          <h1 className="text-3xl font-bold">
            Your Notes
          </h1>

          {/* Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">

            <div className="bg-white text-black p-5 rounded-2xl">
              Note 1
            </div>

            <div className="bg-white text-black p-5 rounded-2xl">
              Note 2
            </div>

            <div className="bg-white text-black p-5 rounded-2xl">
              Note 3
            </div>
            <div className="bg-white text-black p-5 rounded-2xl">
              Note 4
            </div>
            
      

          </div>

        </div>

      </div>

    </div>
  );
};

export default App;