import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import  Link  from "next/link";

function Mobile() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className=" grid items-center justify-end mb-4 mr-10 w-full z-20">
				<div className="w-full mt-4">
					<div className="flex justify-end items-center ">
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="inline-flex items-center justify-center p-2 rounded-md text-white  "
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									// <svg
									// 	className="block h-6 w-6"
									// 	xmlns="http://www.w3.org/2000/svg"
									// 	fill="none"
									// 	viewBox="0 0 24 24"
									// 	stroke="currentColor"
									// 	aria-hidden="true"
									// >
									// 	<path
									// 		strokeLinecap="round"
									// 		strokeLinejoin="round"
									// 		strokeWidth="2"
									// 		d="M4 6h16M4 12h16M4 18h16"
									// 	/>
									// </svg>
                                    <img src="/menu.png"/>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
                                    // <img className="h-6" src="/x.png"/>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div ref={ref} className=" px-2  pt-2 pb-3 space-y-1 sm:px-3">
								<div className="bg-white rounded-lg px-4 py-4 text-black">
                                    <Link href="/">
                                        <h1 className="cursor-pointer hover:bg-blue-500 rounded-lg hover:text-white">Нүүр</h1>
                                    </Link>
                                    <Link href="/Aboutus">
                                        <h1 className="cursor-pointer hover:bg-blue-500 rounded-lg hover:text-white">Бидний тухай</h1>
                                    </Link>
                                    <Link href="/Service">
                                        <h1  className="cursor-pointer hover:bg-blue-500 rounded-lg hover:text-white">Үйлчилгээ</h1>
                                    </Link>
                                    <Link href="/Product">
                                        <h1  className="cursor-pointer hover:bg-blue-500 rounded-lg hover:text-white">Бүтээгдэхүүн</h1>
                                    </Link>
                                    <Link href="/Contactus">
                                        <h1  className="cursor-pointer hover:bg-blue-500 rounded-lg hover:text-white">Бидэнтэй холбогдох</h1>
                                    </Link>
                                </div>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Mobile;