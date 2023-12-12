"use client"

import Wheat from "@/components/Icon/Wheat"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

const Doubt = () => {
  // TODO svgs and dropdown width

  return (
    <div>
      <div className="border border-[#F2F2F2] rounded-2xl gap-[7px] w-[250px] p-5 space-y-[22px]">
        <div className="flex items-center justify-between">
          <h4 className="font-bricolage font-semibold">Area of doubt</h4>
          <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#FAEEEE]">
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 6.99999C24.6378 6.99997 23.2876 7.25433 22.0187 7.74999C20.2287 4.03749 16.6125 2.19249 16.4475 2.10999C16.3086 2.04047 16.1554 2.00427 16 2.00427C15.8446 2.00427 15.6914 2.04047 15.5525 2.10999C15.3862 2.19249 11.7712 4.03749 9.98125 7.74999C8.71243 7.25433 7.3622 6.99997 6 6.99999C5.73478 6.99999 5.48043 7.10535 5.29289 7.29288C5.10536 7.48042 5 7.73477 5 7.99999V18C5 20.9174 6.15893 23.7153 8.22183 25.7782C10.2847 27.8411 13.0826 29 16 29C18.9174 29 21.7153 27.8411 23.7782 25.7782C25.8411 23.7153 27 20.9174 27 18V7.99999C27 7.73477 26.8946 7.48042 26.7071 7.29288C26.5196 7.10535 26.2652 6.99999 26 6.99999ZM15 26.945C12.8009 26.6964 10.7701 25.6472 9.29473 23.9976C7.81937 22.348 7.00257 20.2131 7 18V16.055C9.19914 16.3036 11.2299 17.3527 12.7053 19.0024C14.1806 20.652 14.9974 22.7868 15 25V26.945ZM15 18.6825C14.0829 17.3754 12.8923 16.2836 11.5108 15.483C10.1293 14.6824 8.59005 14.1921 7 14.0462V9.05499C9.19914 9.30362 11.2299 10.3527 12.7053 12.0024C14.1806 13.652 14.9974 15.7868 15 18V18.6825ZM11.7688 8.63874C12.9213 6.23749 15.07 4.72249 16 4.15124C16.93 4.72374 19.0787 6.23874 20.23 8.63874C18.3813 9.78282 16.9102 11.4456 16 13.42C15.0897 11.4453 13.6181 9.7824 11.7688 8.63874ZM25 18C24.9974 20.2131 24.1806 22.348 22.7053 23.9976C21.2299 25.6472 19.1991 26.6964 17 26.945V25C17.0026 22.7868 17.8194 20.652 19.2947 19.0024C20.7701 17.3527 22.8009 16.3036 25 16.055V18ZM25 14.0462C23.4099 14.1921 21.8707 14.6824 20.4892 15.483C19.1077 16.2836 17.9171 17.3754 17 18.6825V18C17.0026 15.7868 17.8194 13.652 19.2947 12.0024C20.7701 10.3527 22.8009 9.30362 25 9.05499V14.0462Z"
                fill="#D25454"
              />
            </svg>
          </div>
        </div>

        <div className="mt-[7px]">
          <h1 className="text-[40px]">982</h1>
        </div>

        <div className="flex items-center gap-[7px] mt-[18px]">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4613 10.1913C13.4235 10.2826 13.3594 10.3607 13.2772 10.4157C13.195 10.4707 13.0983 10.5 12.9994 10.5H2.99942C2.90047 10.5001 2.80372 10.4708 2.72143 10.4159C2.63913 10.361 2.57498 10.2828 2.53711 10.1914C2.49923 10.1 2.48933 9.99942 2.50865 9.90237C2.52798 9.80533 2.57566 9.7162 2.64567 9.64628L7.64567 4.64628C7.6921 4.59979 7.74725 4.56291 7.80795 4.53775C7.86865 4.51259 7.93371 4.49963 7.99942 4.49963C8.06512 4.49963 8.13019 4.51259 8.19089 4.53775C8.25159 4.56291 8.30673 4.59979 8.35317 4.64628L13.3532 9.64628C13.4231 9.71624 13.4707 9.80537 13.4899 9.90238C13.5091 9.99939 13.4992 10.0999 13.4613 10.1913Z"
              fill="#4397F7"
            />
          </svg>

          <h4 className="text-[#4397F7]">MoM</h4>
          <h4 className="text-[#4397F7]">+30%</h4>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-[52px]">
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
    </div>
  )
}

export default Doubt
