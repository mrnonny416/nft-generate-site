"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/header.component";

export default function InsertAssetPage(props: any) {
    const { typePageInsertAsset } = props;

    const [topLayoutImages, setTopLayoutImages] = useState<string[]>([]); // สำหรับ Top Layout
    const [midLayoutImages, setMidLayoutImages] = useState<string[]>([]); // สำหรับ Mid Layout
    const [bottomLayoutImages, setBottomLayoutImages] = useState<string[]>([]); // สำหรับ Bottom Layout
    const maxImages = 10; // จำกัดจำนวนรูปภาพสูงสุดต่อ Layer

    // ฟังก์ชันสำหรับจัดการการอัปโหลดรูปภาพในแต่ละ Layout
    const handleImageChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        setImageState: React.Dispatch<React.SetStateAction<string[]>>,
        imagesState: string[]
    ) => {
        const files = event.target.files;
        if (files) {
            const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
            if (imagesState.length + newImages.length > maxImages) {
                alert(`You can only upload up to ${maxImages} images.`);
            } else {
                setImageState((prevImages) => [...prevImages, ...newImages]);
            }
        }
    };

    // ฟังก์ชันสำหรับการลบรูปภาพออกในแต่ละ Layout
    const handleRemoveImage = (
        index: number,
        setImageState: React.Dispatch<React.SetStateAction<string[]>>,
        imagesState: string[]
    ) => {
        setImageState(imagesState.filter((_, i) => i !== index));
    };

    const chkTypePageInsert = () => {
        typePageInsertAsset(true);
    };

    return (
        <div className="flex flex-col w-full h-screen relative">
            <Header headerName="New/Assets" />
            <div className="flex flex-wrap gap-3 gap-y-3 justify-center items-center mt-[10px] w-full">
                {/* Top Layout */}
                <div className="flex flex-wrap flex-col justify-center items-center bg-white border-mainGreen border-2 mt-[20px] w-[500px] rounded-lg">
                    <span className="pl-2 text-mainGreen w-[95%] mt-3">
                        Select Top Layout [{topLayoutImages.length}/{maxImages}]
                    </span>
                    <label
                        htmlFor="file-upload-top"
                        className="flex flex-wrap flex-col justify-center items-center bg-[#CDCDCD] w-[95%] h-[296px] rounded-lg m-3 cursor-pointer"
                    >
                        {topLayoutImages.length < maxImages ? (
                            <div>
                                <span className="pl-2 text-white w-[95%] mt-3 text-center text-[20px]">
                                    + Select Image
                                </span>
                            </div>
                        ) : (
                            <span className="text-center text-red-500">Maximum images reached</span>
                        )}
                    </label>
                    <input
                        id="file-upload-top"
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => handleImageChange(e, setTopLayoutImages, topLayoutImages)}
                        disabled={topLayoutImages.length >= maxImages}
                    />
                    {/* แสดงรูปภาพที่เลือก */}
                    <div className="flex flex-wrap justify-center">
                        {topLayoutImages.map((image, index) => (
                            <div key={index} className="relative m-2">
                                <img
                                    src={image}
                                    alt={`Selected ${index + 1}`}
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                                <button
                                    onClick={() => handleRemoveImage(index, setTopLayoutImages, topLayoutImages)}
                                    className="absolute top-0 right-0 text-white bg-red-500 rounded-full w-6 h-6"
                                >
                                    x
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mid Layout */}
                <div className="flex flex-wrap flex-col justify-center items-center bg-white border-mainGreen border-2 mt-[20px] w-[500px] rounded-lg">
                    <span className="pl-2 text-mainGreen w-[95%] mt-3">
                        Select Mid Layout [{midLayoutImages.length}/{maxImages}]
                    </span>
                    <label
                        htmlFor="file-upload-mid"
                        className="flex flex-wrap flex-col justify-center items-center bg-[#CDCDCD] w-[95%] h-[296px] rounded-lg m-3 cursor-pointer"
                    >
                        {midLayoutImages.length < maxImages ? (
                            <div>
                                <span className="pl-2 text-white w-[95%] mt-3 text-center text-[20px]">
                                    + Select Image
                                </span>
                            </div>
                        ) : (
                            <span className="text-center text-red-500">Maximum images reached</span>
                        )}
                    </label>
                    <input
                        id="file-upload-mid"
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => handleImageChange(e, setMidLayoutImages, midLayoutImages)}
                        disabled={midLayoutImages.length >= maxImages}
                    />
                    {/* แสดงรูปภาพที่เลือก */}
                    <div className="flex flex-wrap justify-center">
                        {midLayoutImages.map((image, index) => (
                            <div key={index} className="relative m-2">
                                <img
                                    src={image}
                                    alt={`Selected ${index + 1}`}
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                                <button
                                    onClick={() => handleRemoveImage(index, setMidLayoutImages, midLayoutImages)}
                                    className="absolute top-0 right-0 text-white bg-red-500 rounded-full w-6 h-6"
                                >
                                    x
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Layout */}
                <div className="flex flex-wrap flex-col justify-center items-center bg-white border-mainGreen border-2 mt-[20px] w-[500px] rounded-lg">
                    <span className="pl-2 text-mainGreen w-[95%] mt-3">
                        Select Bottom Layout [{bottomLayoutImages.length}/{maxImages}]
                    </span>
                    <label
                        htmlFor="file-upload-bottom"
                        className="flex flex-wrap flex-col justify-center items-center bg-[#CDCDCD] w-[95%] h-[296px] rounded-lg m-3 cursor-pointer"
                    >
                        {bottomLayoutImages.length < maxImages ? (
                            <div>
                                <span className="pl-2 text-white w-[95%] mt-3 text-center text-[20px]">
                                    + Select Image
                                </span>
                            </div>
                        ) : (
                            <span className="text-center text-red-500">Maximum images reached</span>
                        )}
                    </label>
                    <input
                        id="file-upload-bottom"
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => handleImageChange(e, setBottomLayoutImages, bottomLayoutImages)}
                        disabled={bottomLayoutImages.length >= maxImages}
                    />
                    {/* แสดงรูปภาพที่เลือก */}
                    <div className="flex flex-wrap justify-center">
                        {bottomLayoutImages.map((image, index) => (
                            <div key={index} className="relative m-2">
                                <img
                                    src={image}
                                    alt={`Selected ${index + 1}`}
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                                <button
                                    onClick={() => handleRemoveImage(index, setBottomLayoutImages, bottomLayoutImages)}
                                    className="absolute top-0 right-0 text-white bg-red-500 rounded-full w-6 h-6"
                                >
                                    x
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
