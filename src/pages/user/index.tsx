import axios from "axios";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  // More products...
];

export default function User() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState(
    () => localStorage.getItem("userId") || ""
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("userId", userId);

    try {
      const response = await axios.post(
        "http://localhost:3000/upload/audio",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload successful:", response.data);
      alert("Upload successful!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <>
      <div className=" py-16 px-4">
        <div className="container mx-auto">
          {/* Discover new Tracks */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-bold text-gray-800">
              <span style={{ fontSize: "12px" }}>Your uploaded new</span> <br />{" "}
              Tracks
            </h1>
            <a href="#" className="text-gray-500 hover:text-indigo-500">
              See all
            </a>
          </div>

          {/* Track rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="shadow-md overflow-hidden">
                <img
                  src={`https://picsum.photos/id/${1009 + index}/400/300`}
                  alt="Track cover"
                  className="h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-medium text-gray-800 hover:text-indigo-500">
                    My first day in Germany
                  </h3>
                  <p className="text-gray-500 text-sm">Your Diary</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" py-16 px-4">
        <div className="container mx-auto">
          {/* Discover new Tracks */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-bold text-gray-800">
              <span style={{ fontSize: "12px" }}>Your created</span> <br />{" "}
              Playlists
            </h1>
            <a href="#" className="text-gray-500 hover:text-indigo-500">
              See all
            </a>
          </div>

          {/* Track rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="shadow-md overflow-hidden">
                <img
                  src={`https://picsum.photos/id/${1009 + index}/400/300`}
                  alt="Track cover"
                  className="h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-medium text-gray-800 hover:text-indigo-500">
                    German Diaries part {index + 1}
                  </h3>
                  <p className="text-gray-500 text-sm">Your own playlist</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="ml-6 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
          Upload a new track
        </button>

        {isModalOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto upload-model">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Upload Audio
                    </h3>
                    <div className="mt-2">
                      <form onSubmit={handleSubmit}>
                        <div>
                          <label
                            htmlFor="file"
                            className="block text-sm font-medium text-gray-700"
                          >
                            File:
                          </label>
                          <input
                            type="file"
                            id="file"
                            accept="audio/*"
                            onChange={handleFileChange}
                            required
                            className="mt-1 block w-full"
                          />
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Title:
                          </label>
                          <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="block w-full rounded-md border-0  py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Description:
                          </label>
                          <input
                            type="text"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            className="block w-full rounded-md border-0  py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="mt-5 sm:mt-6">
                          <button
                            type="submit"
                            className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                          >
                            Upload
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
