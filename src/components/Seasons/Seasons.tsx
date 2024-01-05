"use client"

import { useState } from "react"
import Wheat from "../Icon/Wheat"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../ui/dropdown-menu"
import { Progress } from "../ui/progress"

const Seasons = () => {
  const [isrotated, setIsRotated] = useState<boolean>(false)

  const handleSvgClick = () => {
    setIsRotated(!isrotated)
  }
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-[52px]">
      <div className="border border-[#F2F2F2] rounded-[16px] p-[14.3px]">
        <div className="flex items-start justify-between">
          <h4 className="font-bricolage font-semibold">Sun Season</h4>

          <div className="flex items-start flex-col">
            <div className="flex items-center justify-center gap-[5px]">
              <svg
                width={18}
                height={6}
                viewBox="0 0 18 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.621582"
                  y="0.927368"
                  width="16.6983"
                  height="4.77095"
                  rx="2.38547"
                  fill="#54D2D1"
                />
              </svg>

              <h5 className="text-[10px]">Income</h5>
            </div>

            <div className="flex items-center justify-center gap-[5px]">
              <svg
                width={18}
                height={6}
                viewBox="0 0 18 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.621582"
                  y="0.927368"
                  width="16.6983"
                  height="4.77095"
                  rx="2.38547"
                  fill="#CEBAE5"
                />
              </svg>

              <h5 className="text-[10px]">Losses</h5>
            </div>
          </div>
        </div>

        <div className="mt-[31px] space-y-8">
          <div className="flex items-center gap-[13px]">
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#54D2D1] ">
              <h4 className="text-white text-[11px]">C</h4>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="space-y-1">
                <h4 className="text-xs font-bricolage">Carbohydrate</h4>
                <Progress value={70} />
                <Progress value={33} />
              </div>

              <div className="flex items-center justify-center gap-[10px]">
                <div>
                  <p className="text-[11px] leading-none">70%</p>
                  <p className="text-[11px] text-[#9F9F9F]">33%</p>
                </div>

                {/* //Todo width of dropdown*/}

                <DropdownMenu onOpenChange={handleSvgClick}>
                  <DropdownMenuTrigger className="cursor-pointer">
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: isrotated ? "rotate(180deg)" : "rotate(0deg)"
                      }}
                    >
                      <path
                        d="M14.041 6.99062L9.04104 11.9906C8.9946 12.0371 8.93946 12.074 8.87876 12.0992C8.81806 12.1243 8.753 12.1373 8.68729 12.1373C8.62158 12.1373 8.55652 12.1243 8.49582 12.0992C8.43512 12.074 8.37998 12.0371 8.33354 11.9906L3.33354 6.99062C3.23972 6.8968 3.18701 6.76956 3.18701 6.63687C3.18701 6.50419 3.23972 6.37694 3.33354 6.28312C3.42736 6.1893 3.55461 6.1366 3.68729 6.1366C3.81997 6.1366 3.94722 6.1893 4.04104 6.28312L8.68729 10.93L13.3335 6.28312C13.38 6.23667 13.4351 6.19982 13.4958 6.17468C13.5565 6.14954 13.6216 6.1366 13.6873 6.1366C13.753 6.1366 13.818 6.14954 13.8787 6.17468C13.9394 6.19982 13.9946 6.23667 14.041 6.28312C14.0875 6.32958 14.1243 6.38473 14.1495 6.44543C14.1746 6.50612 14.1876 6.57118 14.1876 6.63687C14.1876 6.70257 14.1746 6.76763 14.1495 6.82832C14.1243 6.88902 14.0875 6.94417 14.041 6.99062Z"
                        fill="black"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-52">
                    <DropdownMenuLabel className="font-bricolage">
                      Carbohydrate
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Rice</h4>
                        <Wheat color="black" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Wheat</h4>
                        <Wheat color="gray" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Sorghum</h4>
                        <Wheat color="blue" />
                      </div>
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[13px]">
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#4397F7] ">
              <h4 className="text-white text-[11px]">P</h4>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="space-y-1">
                <h4 className="text-xs font-bricolage">Protein</h4>
                <Progress value={80} />
                <Progress value={20} />
              </div>

              <div className="flex items-center justify-center gap-[10px]">
                <div>
                  <p className="text-[11px] leading-none">80%</p>
                  <p className="text-[11px] text-[#9F9F9F]">20%</p>
                </div>

                {/* //Todo width of dropdown*/}

                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.041 6.99062L9.04104 11.9906C8.9946 12.0371 8.93946 12.074 8.87876 12.0992C8.81806 12.1243 8.753 12.1373 8.68729 12.1373C8.62158 12.1373 8.55652 12.1243 8.49582 12.0992C8.43512 12.074 8.37998 12.0371 8.33354 11.9906L3.33354 6.99062C3.23972 6.8968 3.18701 6.76956 3.18701 6.63687C3.18701 6.50419 3.23972 6.37694 3.33354 6.28312C3.42736 6.1893 3.55461 6.1366 3.68729 6.1366C3.81997 6.1366 3.94722 6.1893 4.04104 6.28312L8.68729 10.93L13.3335 6.28312C13.38 6.23667 13.4351 6.19982 13.4958 6.17468C13.5565 6.14954 13.6216 6.1366 13.6873 6.1366C13.753 6.1366 13.818 6.14954 13.8787 6.17468C13.9394 6.19982 13.9946 6.23667 14.041 6.28312C14.0875 6.32958 14.1243 6.38473 14.1495 6.44543C14.1746 6.50612 14.1876 6.57118 14.1876 6.63687C14.1876 6.70257 14.1746 6.76763 14.1495 6.82832C14.1243 6.88902 14.0875 6.94417 14.041 6.99062Z"
                        fill="black"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-52">
                    <DropdownMenuLabel className="font-bricolage">
                      Protein
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Soybean</h4>
                        <Wheat color="black" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Peanuts</h4>
                        <Wheat color="green" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Common bean</h4>
                        <Wheat color="blue" />
                      </div>
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[13px]">
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#1BAB53] ">
              <h4 className="text-white text-[11px]">F</h4>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="space-y-1">
                <h4 className="text-xs font-bricolage">Fat</h4>
                <Progress value={90} />
                <Progress value={40} />
              </div>

              <div className="flex items-center justify-center gap-[10px]">
                <div>
                  <p className="text-[11px] leading-none">90%</p>
                  <p className="text-[11px] text-[#9F9F9F]">40%</p>
                </div>

                {/* //Todo width of dropdown*/}

                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.041 6.99062L9.04104 11.9906C8.9946 12.0371 8.93946 12.074 8.87876 12.0992C8.81806 12.1243 8.753 12.1373 8.68729 12.1373C8.62158 12.1373 8.55652 12.1243 8.49582 12.0992C8.43512 12.074 8.37998 12.0371 8.33354 11.9906L3.33354 6.99062C3.23972 6.8968 3.18701 6.76956 3.18701 6.63687C3.18701 6.50419 3.23972 6.37694 3.33354 6.28312C3.42736 6.1893 3.55461 6.1366 3.68729 6.1366C3.81997 6.1366 3.94722 6.1893 4.04104 6.28312L8.68729 10.93L13.3335 6.28312C13.38 6.23667 13.4351 6.19982 13.4958 6.17468C13.5565 6.14954 13.6216 6.1366 13.6873 6.1366C13.753 6.1366 13.818 6.14954 13.8787 6.17468C13.9394 6.19982 13.9946 6.23667 14.041 6.28312C14.0875 6.32958 14.1243 6.38473 14.1495 6.44543C14.1746 6.50612 14.1876 6.57118 14.1876 6.63687C14.1876 6.70257 14.1746 6.76763 14.1495 6.82832C14.1243 6.88902 14.0875 6.94417 14.041 6.99062Z"
                        fill="black"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-52">
                    <DropdownMenuLabel className="font-bricolage">
                      Fat
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Seafood</h4>
                        <Wheat color="black" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Nuts</h4>
                        <Wheat color="purple" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Avocados</h4>
                        <Wheat color="blue" />
                      </div>
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[13px]">
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#006885] ">
              <h4 className="text-white text-[11px]">PH</h4>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="space-y-1">
                <h4 className="text-xs font-bricolage">Fibre</h4>
                <Progress value={90} />
                <Progress value={10} />
              </div>

              <div className="flex items-center justify-center gap-[10px]">
                <div>
                  <p className="text-[11px] leading-none">90%</p>
                  <p className="text-[11px] text-[#9F9F9F]">10%</p>
                </div>

                {/* //Todo width of dropdown*/}

                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.041 6.99062L9.04104 11.9906C8.9946 12.0371 8.93946 12.074 8.87876 12.0992C8.81806 12.1243 8.753 12.1373 8.68729 12.1373C8.62158 12.1373 8.55652 12.1243 8.49582 12.0992C8.43512 12.074 8.37998 12.0371 8.33354 11.9906L3.33354 6.99062C3.23972 6.8968 3.18701 6.76956 3.18701 6.63687C3.18701 6.50419 3.23972 6.37694 3.33354 6.28312C3.42736 6.1893 3.55461 6.1366 3.68729 6.1366C3.81997 6.1366 3.94722 6.1893 4.04104 6.28312L8.68729 10.93L13.3335 6.28312C13.38 6.23667 13.4351 6.19982 13.4958 6.17468C13.5565 6.14954 13.6216 6.1366 13.6873 6.1366C13.753 6.1366 13.818 6.14954 13.8787 6.17468C13.9394 6.19982 13.9946 6.23667 14.041 6.28312C14.0875 6.32958 14.1243 6.38473 14.1495 6.44543C14.1746 6.50612 14.1876 6.57118 14.1876 6.63687C14.1876 6.70257 14.1746 6.76763 14.1495 6.82832C14.1243 6.88902 14.0875 6.94417 14.041 6.99062Z"
                        fill="black"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-52">
                    <DropdownMenuLabel className="font-bricolage">
                      Fibre
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Cotton</h4>
                        <Wheat color="black" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Jute</h4>
                        <Wheat color="purple" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Kenaf</h4>
                        <Wheat color="blue" />
                      </div>
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[13px]">
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#327E7D] ">
              <h4 className="text-white text-[11px]">V</h4>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="space-y-1">
                <h4 className="text-xs font-bricolage">Vitamins</h4>
                <Progress value={60} />
                <Progress value={40} />
              </div>

              <div className="flex items-center justify-center gap-[10px]">
                <div>
                  <p className="text-[11px] leading-none">60%</p>
                  <p className="text-[11px] text-[#9F9F9F]">40%</p>
                </div>

                {/* //Todo width of dropdown*/}

                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.041 6.99062L9.04104 11.9906C8.9946 12.0371 8.93946 12.074 8.87876 12.0992C8.81806 12.1243 8.753 12.1373 8.68729 12.1373C8.62158 12.1373 8.55652 12.1243 8.49582 12.0992C8.43512 12.074 8.37998 12.0371 8.33354 11.9906L3.33354 6.99062C3.23972 6.8968 3.18701 6.76956 3.18701 6.63687C3.18701 6.50419 3.23972 6.37694 3.33354 6.28312C3.42736 6.1893 3.55461 6.1366 3.68729 6.1366C3.81997 6.1366 3.94722 6.1893 4.04104 6.28312L8.68729 10.93L13.3335 6.28312C13.38 6.23667 13.4351 6.19982 13.4958 6.17468C13.5565 6.14954 13.6216 6.1366 13.6873 6.1366C13.753 6.1366 13.818 6.14954 13.8787 6.17468C13.9394 6.19982 13.9946 6.23667 14.041 6.28312C14.0875 6.32958 14.1243 6.38473 14.1495 6.44543C14.1746 6.50612 14.1876 6.57118 14.1876 6.63687C14.1876 6.70257 14.1746 6.76763 14.1495 6.82832C14.1243 6.88902 14.0875 6.94417 14.041 6.99062Z"
                        fill="black"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-52">
                    <DropdownMenuLabel className="font-bricolage">
                      Vitamins
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Fruits</h4>
                        <Wheat color="black" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Potatoes</h4>
                        <Wheat color="purple" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Vegetables</h4>
                        <Wheat color="blue" />
                      </div>
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-[#F2F2F2] rounded-[16px] p-[14.3px]">
        <div className="flex items-start justify-between">
          <h4 className="font-bricolage font-semibold">Rain Season</h4>

          <div className="flex items-start flex-col">
            <div className="flex items-center justify-center gap-[5px]">
              <svg
                width={18}
                height={6}
                viewBox="0 0 18 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.621582"
                  y="0.927368"
                  width="16.6983"
                  height="4.77095"
                  rx="2.38547"
                  fill="#54D2D1"
                />
              </svg>

              <h5 className="text-[10px]">Income</h5>
            </div>

            <div className="flex items-center justify-center gap-[5px]">
              <svg
                width={18}
                height={6}
                viewBox="0 0 18 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.621582"
                  y="0.927368"
                  width="16.6983"
                  height="4.77095"
                  rx="2.38547"
                  fill="#CEBAE5"
                />
              </svg>

              <h5 className="text-[10px]">Losses</h5>
            </div>
          </div>
        </div>

        <div className="mt-[31px] space-y-8">
          <div className="flex items-center gap-[13px]">
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#54D2D1] ">
              <h4 className="text-white text-[11px]">C</h4>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="space-y-1">
                <h4 className="text-xs font-bricolage">Carbohydrate</h4>
                <Progress value={70} />
                <Progress value={33} />
              </div>

              <div className="flex items-center justify-center gap-[10px]">
                <div>
                  <p className="text-[11px] leading-none">70%</p>
                  <p className="text-[11px] text-[#9F9F9F]">33%</p>
                </div>

                {/* //Todo width of dropdown*/}

                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.041 6.99062L9.04104 11.9906C8.9946 12.0371 8.93946 12.074 8.87876 12.0992C8.81806 12.1243 8.753 12.1373 8.68729 12.1373C8.62158 12.1373 8.55652 12.1243 8.49582 12.0992C8.43512 12.074 8.37998 12.0371 8.33354 11.9906L3.33354 6.99062C3.23972 6.8968 3.18701 6.76956 3.18701 6.63687C3.18701 6.50419 3.23972 6.37694 3.33354 6.28312C3.42736 6.1893 3.55461 6.1366 3.68729 6.1366C3.81997 6.1366 3.94722 6.1893 4.04104 6.28312L8.68729 10.93L13.3335 6.28312C13.38 6.23667 13.4351 6.19982 13.4958 6.17468C13.5565 6.14954 13.6216 6.1366 13.6873 6.1366C13.753 6.1366 13.818 6.14954 13.8787 6.17468C13.9394 6.19982 13.9946 6.23667 14.041 6.28312C14.0875 6.32958 14.1243 6.38473 14.1495 6.44543C14.1746 6.50612 14.1876 6.57118 14.1876 6.63687C14.1876 6.70257 14.1746 6.76763 14.1495 6.82832C14.1243 6.88902 14.0875 6.94417 14.041 6.99062Z"
                        fill="black"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-52">
                    <DropdownMenuLabel className="font-bricolage">
                      Carbohydrate
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Rice</h4>
                        <Wheat color="black" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Wheat</h4>
                        <Wheat color="gray" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Sorghum</h4>
                        <Wheat color="blue" />
                      </div>
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[13px]">
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#4397F7] ">
              <h4 className="text-white text-[11px]">P</h4>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="space-y-1">
                <h4 className="text-xs font-bricolage">Protein</h4>
                <Progress value={80} />
                <Progress value={20} />
              </div>

              <div className="flex items-center justify-center gap-[10px]">
                <div>
                  <p className="text-[11px] leading-none">80%</p>
                  <p className="text-[11px] text-[#9F9F9F]">20%</p>
                </div>

                {/* //Todo width of dropdown*/}

                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.041 6.99062L9.04104 11.9906C8.9946 12.0371 8.93946 12.074 8.87876 12.0992C8.81806 12.1243 8.753 12.1373 8.68729 12.1373C8.62158 12.1373 8.55652 12.1243 8.49582 12.0992C8.43512 12.074 8.37998 12.0371 8.33354 11.9906L3.33354 6.99062C3.23972 6.8968 3.18701 6.76956 3.18701 6.63687C3.18701 6.50419 3.23972 6.37694 3.33354 6.28312C3.42736 6.1893 3.55461 6.1366 3.68729 6.1366C3.81997 6.1366 3.94722 6.1893 4.04104 6.28312L8.68729 10.93L13.3335 6.28312C13.38 6.23667 13.4351 6.19982 13.4958 6.17468C13.5565 6.14954 13.6216 6.1366 13.6873 6.1366C13.753 6.1366 13.818 6.14954 13.8787 6.17468C13.9394 6.19982 13.9946 6.23667 14.041 6.28312C14.0875 6.32958 14.1243 6.38473 14.1495 6.44543C14.1746 6.50612 14.1876 6.57118 14.1876 6.63687C14.1876 6.70257 14.1746 6.76763 14.1495 6.82832C14.1243 6.88902 14.0875 6.94417 14.041 6.99062Z"
                        fill="black"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-52">
                    <DropdownMenuLabel className="font-bricolage">
                      Protein
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Soybean</h4>
                        <Wheat color="black" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Peanuts</h4>
                        <Wheat color="green" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Common bean</h4>
                        <Wheat color="blue" />
                      </div>
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[13px]">
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#1BAB53] ">
              <h4 className="text-white text-[11px]">F</h4>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="space-y-1">
                <h4 className="text-xs font-bricolage">Fat</h4>
                <Progress value={90} />
                <Progress value={40} />
              </div>

              <div className="flex items-center justify-center gap-[10px]">
                <div>
                  <p className="text-[11px] leading-none">90%</p>
                  <p className="text-[11px] text-[#9F9F9F]">40%</p>
                </div>

                {/* //Todo width of dropdown*/}

                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.041 6.99062L9.04104 11.9906C8.9946 12.0371 8.93946 12.074 8.87876 12.0992C8.81806 12.1243 8.753 12.1373 8.68729 12.1373C8.62158 12.1373 8.55652 12.1243 8.49582 12.0992C8.43512 12.074 8.37998 12.0371 8.33354 11.9906L3.33354 6.99062C3.23972 6.8968 3.18701 6.76956 3.18701 6.63687C3.18701 6.50419 3.23972 6.37694 3.33354 6.28312C3.42736 6.1893 3.55461 6.1366 3.68729 6.1366C3.81997 6.1366 3.94722 6.1893 4.04104 6.28312L8.68729 10.93L13.3335 6.28312C13.38 6.23667 13.4351 6.19982 13.4958 6.17468C13.5565 6.14954 13.6216 6.1366 13.6873 6.1366C13.753 6.1366 13.818 6.14954 13.8787 6.17468C13.9394 6.19982 13.9946 6.23667 14.041 6.28312C14.0875 6.32958 14.1243 6.38473 14.1495 6.44543C14.1746 6.50612 14.1876 6.57118 14.1876 6.63687C14.1876 6.70257 14.1746 6.76763 14.1495 6.82832C14.1243 6.88902 14.0875 6.94417 14.041 6.99062Z"
                        fill="black"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-52">
                    <DropdownMenuLabel className="font-bricolage">
                      Fat
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Seafood</h4>
                        <Wheat color="black" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Nuts</h4>
                        <Wheat color="purple" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Avocados</h4>
                        <Wheat color="blue" />
                      </div>
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[13px]">
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#006885] ">
              <h4 className="text-white text-[11px]">PH</h4>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="space-y-1">
                <h4 className="text-xs font-bricolage">Fibre</h4>
                <Progress value={90} />
                <Progress value={10} />
              </div>

              <div className="flex items-center justify-center gap-[10px]">
                <div>
                  <p className="text-[11px] leading-none">90%</p>
                  <p className="text-[11px] text-[#9F9F9F]">10%</p>
                </div>

                {/* //Todo width of dropdown*/}

                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.041 6.99062L9.04104 11.9906C8.9946 12.0371 8.93946 12.074 8.87876 12.0992C8.81806 12.1243 8.753 12.1373 8.68729 12.1373C8.62158 12.1373 8.55652 12.1243 8.49582 12.0992C8.43512 12.074 8.37998 12.0371 8.33354 11.9906L3.33354 6.99062C3.23972 6.8968 3.18701 6.76956 3.18701 6.63687C3.18701 6.50419 3.23972 6.37694 3.33354 6.28312C3.42736 6.1893 3.55461 6.1366 3.68729 6.1366C3.81997 6.1366 3.94722 6.1893 4.04104 6.28312L8.68729 10.93L13.3335 6.28312C13.38 6.23667 13.4351 6.19982 13.4958 6.17468C13.5565 6.14954 13.6216 6.1366 13.6873 6.1366C13.753 6.1366 13.818 6.14954 13.8787 6.17468C13.9394 6.19982 13.9946 6.23667 14.041 6.28312C14.0875 6.32958 14.1243 6.38473 14.1495 6.44543C14.1746 6.50612 14.1876 6.57118 14.1876 6.63687C14.1876 6.70257 14.1746 6.76763 14.1495 6.82832C14.1243 6.88902 14.0875 6.94417 14.041 6.99062Z"
                        fill="black"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-52">
                    <DropdownMenuLabel className="font-bricolage">
                      Fibre
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Cotton</h4>
                        <Wheat color="black" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Jute</h4>
                        <Wheat color="purple" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Kenaf</h4>
                        <Wheat color="blue" />
                      </div>
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[13px]">
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-[19px] bg-[#327E7D] ">
              <h4 className="text-white text-[11px]">V</h4>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="space-y-1">
                <h4 className="text-xs font-bricolage">Vitamins</h4>
                <Progress value={60} />
                <Progress value={40} />
              </div>

              <div className="flex items-center justify-center gap-[10px]">
                <div>
                  <p className="text-[11px] leading-none">60%</p>
                  <p className="text-[11px] text-[#9F9F9F]">40%</p>
                </div>

                {/* //Todo width of dropdown*/}

                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer">
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.041 6.99062L9.04104 11.9906C8.9946 12.0371 8.93946 12.074 8.87876 12.0992C8.81806 12.1243 8.753 12.1373 8.68729 12.1373C8.62158 12.1373 8.55652 12.1243 8.49582 12.0992C8.43512 12.074 8.37998 12.0371 8.33354 11.9906L3.33354 6.99062C3.23972 6.8968 3.18701 6.76956 3.18701 6.63687C3.18701 6.50419 3.23972 6.37694 3.33354 6.28312C3.42736 6.1893 3.55461 6.1366 3.68729 6.1366C3.81997 6.1366 3.94722 6.1893 4.04104 6.28312L8.68729 10.93L13.3335 6.28312C13.38 6.23667 13.4351 6.19982 13.4958 6.17468C13.5565 6.14954 13.6216 6.1366 13.6873 6.1366C13.753 6.1366 13.818 6.14954 13.8787 6.17468C13.9394 6.19982 13.9946 6.23667 14.041 6.28312C14.0875 6.32958 14.1243 6.38473 14.1495 6.44543C14.1746 6.50612 14.1876 6.57118 14.1876 6.63687C14.1876 6.70257 14.1746 6.76763 14.1495 6.82832C14.1243 6.88902 14.0875 6.94417 14.041 6.99062Z"
                        fill="black"
                      />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-52">
                    <DropdownMenuLabel className="font-bricolage">
                      Vitamins
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Fruits</h4>
                        <Wheat color="black" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Potatoes</h4>
                        <Wheat color="purple" />
                      </div>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      <div className="flex items-center justify-between p-1 w-full">
                        <h4>Vegetables</h4>
                        <Wheat color="blue" />
                      </div>
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seasons
