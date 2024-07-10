'use client'
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/header.component';
import Link from 'next/link';

const Create = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [projectName, setProjectName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [telegram, setTelegram] = useState<string>('');
    const [twitter, setTwitter] = useState<string>('');
    const [discord, setDiscord] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [hours, setHours] = useState<string>('');
    const [minutes, setMinutes] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const options = ['Thai', 'Universal'];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { maxLength, value } = event.target;

        if (value.length >= maxLength) {
            focusNextInput(index);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault(); // Prevent space from being entered in the input
            focusNextInput(index);
        }
    };

    const handleNumericInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (!/^\d*$/.test(value)) {
            event.preventDefault();
            event.target.value = value.replace(/\D/g, '');
        }
    };

    const focusNextInput = (index: number) => {
        const nextIndex = index + 1;
        if (inputRefs.current[nextIndex]) {
            inputRefs.current[nextIndex]?.focus();
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const file = event.target.files?.[0];

        // Check if a file is selected
        if (file) {
            const reader = new FileReader();

            // Clear the input value to trigger change event on same file selection
            event.target.value = '';

            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };

            reader.readAsDataURL(file);
        }
    };

    const onSubmit = () => {
        console.log(selectedImage);
        console.log(projectName);
        console.log(description);
        console.log(telegram);
        console.log(twitter);
        console.log(discord);
        console.log(date);
        console.log(month);
        console.log(year);
        console.log(hours);
        console.log(minutes);
        console.log(selectedOption);

    };

    const onCancel = () => {
        setSelectedImage(null)
        setProjectName('')
        setDescription('')
        setTelegram('')
        setTwitter('')
        setDiscord('')
        setDate('')
        setMonth('')
        setYear('')
        setHours('')
        setMinutes('')
        setSelectedOption(null)
        console.log(projectName);

    };

    return (
        <div>
            <Header headerName='New' />
            <div className='p-3 grid gap-y-4 max-w-[500px] m-auto'>
                <input
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder='Project Name' className='input-style' />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} placeholder='Description' className='input-style resize-none' cols={3} rows={5} />
                <input
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)} placeholder='Telegram' className='input-style' />
                <input
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)} placeholder='X/Twitter' className='input-style' />
                <input
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)} placeholder='Discord' className='input-style' />
                <div className='input-style h-fit grid justify-center items-center !py-2'>
                    <p className='text-center py-1'>Date To Mint</p>
                    <div className='flex gap-1'>
                        <input
                            value={date}
                            placeholder='Date'
                            ref={(el: any) => (inputRefs.current[0] = el)}
                            className='input-style !w-14'
                            maxLength={2}
                            onChange={(e) => setDate(e.target.value)}
                            onInput={(e) => {
                                handleInput(e as React.ChangeEvent<HTMLInputElement>, 0);
                                handleNumericInput(e as React.ChangeEvent<HTMLInputElement>);
                            }}
                            onKeyDown={(e) => handleKeyDown(e, 0)}
                        />
                        <input
                            value={month}
                            placeholder='Month'
                            ref={(el: any) => (inputRefs.current[1] = el)}
                            className='input-style !w-16'
                            maxLength={2}
                            onChange={(e) => setMonth(e.target.value)}
                            onInput={(e) => {
                                handleInput(e as React.ChangeEvent<HTMLInputElement>, 1);
                                handleNumericInput(e as React.ChangeEvent<HTMLInputElement>);
                            }}
                            onKeyDown={(e) => handleKeyDown(e, 1)}
                        />
                        <input
                            value={year}
                            placeholder='Year'
                            ref={(el: any) => (inputRefs.current[2] = el)}
                            className='input-style !w-14'
                            maxLength={4}
                            onChange={(e) => setYear(e.target.value)}
                            onInput={(e) => {
                                handleInput(e as React.ChangeEvent<HTMLInputElement>, 2);
                                handleNumericInput(e as React.ChangeEvent<HTMLInputElement>);
                            }}
                            onKeyDown={(e) => handleKeyDown(e, 2)}
                        />
                    </div>
                </div>
                <div className='input-style h-fit grid justify-center items-center !py-2'>
                    <p className='text-center py-1'>Time To Mint</p>
                    <div className='flex gap-1'>
                        <input
                            value={hours}
                            placeholder='HH'
                            ref={(el: any) => (inputRefs.current[3] = el)}
                            className='input-style !w-14'
                            maxLength={2}
                            onChange={(e) => setHours(e.target.value)}
                            onInput={(e) => {
                                handleInput(e as React.ChangeEvent<HTMLInputElement>, 3);
                                handleNumericInput(e as React.ChangeEvent<HTMLInputElement>);
                            }}
                            onKeyDown={(e) => handleKeyDown(e, 3)} />
                        <input
                            value={minutes}
                            placeholder='MM'
                            ref={(el: any) => (inputRefs.current[4] = el)}
                            className='input-style !w-14'
                            maxLength={2}
                            onChange={(e) => setMinutes(e.target.value)}
                            onInput={(e) => {
                                handleInput(e as React.ChangeEvent<HTMLInputElement>, 4);
                                handleNumericInput(e as React.ChangeEvent<HTMLInputElement>);
                            }}
                            onKeyDown={(e) => handleKeyDown(e, 4)} />
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="input-style min-w-16 !w-fit h-9 bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-left cursor-pointer focus:outline-none "
                            >
                                <p className='pr-4'> {selectedOption ? selectedOption : <span className=' text-gray-400'>Time Zone</span>} </p>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    {/* Arrow icon */}
                                    <svg className={`w-3 h-3 ${isOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 3l-8 9h16l-8-9z" />
                                    </svg>
                                </span>
                            </button>
                            {isOpen && (
                                <ul className="absolute z-10 bg-black border border-mainGreen rounded-md shadow-lg mt-1 w-fit r-0">
                                    {options.map((option, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleOptionClick(option)}
                                            className="px-4 py-2 cursor-pointer hover:bg-mainGreen hover:text-black"
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {/* <input ref={(el: any) => (inputRefs.current[5] = el)}
                            className='input-style !w-14'
                            maxLength={2}
                            onInput={(e) => {
                                handleInput(e as React.ChangeEvent<HTMLInputElement>, 5);
                                handleNumericInput(e as React.ChangeEvent<HTMLInputElement>);
                            }}
                            onKeyDown={(e) => handleKeyDown(e, 5)} /> */}

                    </div>
                </div>
                <div className='input-style h-fit flex justify-between !py-2 items-center'>
                    {selectedImage ?
                        (
                            <div className="mt-4 relative">
                                <span className=' absolute right-2 top-1 cursor-pointer' onClick={() => setSelectedImage(null)}>x</span>
                                <img src={selectedImage} alt="Selected" className="max-w-xs rounded-md" />
                            </div>
                        ) : (
                            <p className='text-center py-1 h-fit'>Logo file...</p>
                        )}
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer border-2 border-mainGreen text-mainGreen py-2 px-4 rounded-md focus:outline-none"
                    >
                        Select Image
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                    />

                </div>
                <Link href={'create/assets'} onClick={onSubmit} className="cursor-pointer bg-mainGreen text-black py-2 px-4 rounded-md text-center" >
                    Submit
                </Link>
                <Link href={{ pathname: '/dashboard', query: { item: '01' } }} onClick={onCancel} className="cursor-pointer bg-black border-2 border-mainGreen text-mainGreen py-2 px-4 rounded-md text-center" >
                    Cancel
                </Link>
            </div>
        </div>
    );
};

export default Create;
