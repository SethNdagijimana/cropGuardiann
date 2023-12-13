import { ChartComponent } from "@/components/Chart"
import { Progress } from "@/components/ui/progress"

const Losses = () => {
  return (
    <>
      <div className="flex items-center gap-[36px]">
        <div className="border border-[#F2F2F2] rounded-2xl gap-[7px] w-[250px] p-5 space-y-[22px]">
          <div className="flex items-center justify-between">
            <h4 className="font-bricolage font-semibold">Total Losses</h4>
            <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#EEFAFA]">
              <svg
                width={33}
                height={33}
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.9834 26.9459C29.9834 27.2111 29.878 27.4655 29.6905 27.653C29.503 27.8406 29.2486 27.9459 28.9834 27.9459H4.9834C4.71818 27.9459 4.46383 27.8406 4.27629 27.653C4.08876 27.4655 3.9834 27.2111 3.9834 26.9459V6.94592C3.9834 6.68071 4.08876 6.42635 4.27629 6.23882C4.46383 6.05128 4.71818 5.94592 4.9834 5.94592C5.24861 5.94592 5.50297 6.05128 5.69051 6.23882C5.87804 6.42635 5.9834 6.68071 5.9834 6.94592V8.53217L12.9834 15.5322L16.2759 12.2384C16.3688 12.1454 16.4791 12.0717 16.6005 12.0214C16.7219 11.971 16.852 11.9451 16.9834 11.9451C17.1148 11.9451 17.2449 11.971 17.3663 12.0214C17.4877 12.0717 17.598 12.1454 17.6909 12.2384L24.9834 19.5322V16.9459C24.9834 16.6807 25.0888 16.4264 25.2763 16.2388C25.4638 16.0513 25.7182 15.9459 25.9834 15.9459C26.2486 15.9459 26.503 16.0513 26.6905 16.2388C26.878 16.4264 26.9834 16.6807 26.9834 16.9459V21.9459C26.9853 21.9792 26.9853 22.0126 26.9834 22.0459C26.9834 22.0597 26.9834 22.0722 26.9771 22.0859C26.9709 22.0997 26.9771 22.1234 26.9684 22.1434C26.9657 22.1591 26.9619 22.1745 26.9571 22.1897C26.9571 22.2059 26.9496 22.2222 26.9446 22.2384C26.9396 22.2547 26.9346 22.2672 26.9296 22.2822L26.9121 22.3309L26.8934 22.3697C26.8859 22.3859 26.8784 22.4034 26.8696 22.4197C26.8609 22.4359 26.8559 22.4422 26.8496 22.4547L26.8196 22.5034L26.7934 22.5384L26.7609 22.5822C26.7471 22.5997 26.7309 22.6159 26.7159 22.6322L26.6959 22.6547L26.6746 22.6734C26.6581 22.6898 26.6405 22.7053 26.6221 22.7197C26.6094 22.7308 26.596 22.7412 26.5821 22.7509L26.5446 22.7784L26.4971 22.8072C26.4851 22.815 26.4726 22.8221 26.4596 22.8284L26.4134 22.8522L26.3709 22.8709L26.3259 22.8872C26.3105 22.8937 26.2946 22.8991 26.2784 22.9034L26.2334 22.9159C26.2159 22.9159 26.2009 22.9247 26.1834 22.9272L26.1309 22.9359L26.0871 22.9422C26.0543 22.944 26.0213 22.944 25.9884 22.9422H20.9834C20.7182 22.9422 20.4638 22.8368 20.2763 22.6493C20.0888 22.4617 19.9834 22.2074 19.9834 21.9422C19.9834 21.677 20.0888 21.4226 20.2763 21.2351C20.4638 21.0475 20.7182 20.9422 20.9834 20.9422H23.5696L16.9834 14.3597L13.6909 17.6534C13.598 17.7464 13.4877 17.8202 13.3663 17.8705C13.2449 17.9208 13.1148 17.9467 12.9834 17.9467C12.852 17.9467 12.7219 17.9208 12.6005 17.8705C12.4791 17.8202 12.3688 17.7464 12.2759 17.6534L5.9834 11.3597V25.9459H28.9834C29.2486 25.9459 29.503 26.0513 29.6905 26.2388C29.878 26.4264 29.9834 26.6807 29.9834 26.9459Z"
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
                fill="#D25454"
              />
            </svg>

            <h4 className="text-[#D25454]">MoM</h4>
            <h4 className="text-[#D25454]">+30%</h4>
          </div>
        </div>

        <div className="border border-[#F2F2F2] rounded-2xl gap-[7px] w-[250px] p-5 space-y-[22px]">
          <div className="flex items-center justify-between">
            <h4 className="font-bricolage font-semibold">Predictions</h4>
            <div className="w-12 h-12 p-2 flex items-center justify-center rounded-[32px] bg-[#EEFAFA]">
              <svg
                width={33}
                height={32}
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_712_1195)">
                  <path
                    d="M15.1563 19.74C16.4966 18.8477 17.5141 17.5478 18.0584 16.0326C18.6028 14.5173 18.645 12.867 18.1789 11.3259C17.7129 9.78471 16.7632 8.43445 15.4703 7.47478C14.1775 6.5151 12.6102 5.99695 11.0001 5.99695C9.38997 5.99695 7.82261 6.5151 6.52978 7.47478C5.23694 8.43445 4.28726 9.78471 3.82118 11.3259C3.35509 12.867 3.39734 14.5173 3.94168 16.0326C4.48603 17.5478 5.50356 18.8477 6.84381 19.74C4.41943 20.6335 2.34894 22.287 0.941312 24.4537C0.867332 24.5637 0.815945 24.6873 0.790139 24.8172C0.764332 24.9472 0.764621 25.0811 0.790989 25.2109C0.817356 25.3408 0.869276 25.4641 0.94373 25.5738C1.01818 25.6834 1.11369 25.7772 1.22469 25.8496C1.33569 25.922 1.45998 25.9716 1.59032 25.9955C1.72067 26.0195 1.85447 26.0173 1.98396 25.989C2.11344 25.9608 2.23603 25.9071 2.34458 25.8311C2.45314 25.7551 2.54551 25.6583 2.61631 25.5462C3.5243 24.1497 4.76676 23.0021 6.23086 22.2077C7.69496 21.4133 9.33432 20.9972 11.0001 20.9972C12.6658 20.9972 14.3052 21.4133 15.7693 22.2077C17.2334 23.0021 18.4758 24.1497 19.3838 25.5462C19.5305 25.7642 19.757 25.9157 20.0145 25.968C20.272 26.0203 20.5397 25.9691 20.7598 25.8256C20.9799 25.6821 21.1346 25.4577 21.1906 25.201C21.2465 24.9443 21.1992 24.6758 21.0588 24.4537C19.6512 22.287 17.5807 20.6335 15.1563 19.74ZM5.50006 13.5C5.50006 12.4122 5.82263 11.3488 6.42698 10.4444C7.03133 9.53988 7.89031 8.83494 8.8953 8.41865C9.9003 8.00237 11.0062 7.89345 12.0731 8.10567C13.14 8.31789 14.12 8.84171 14.8891 9.6109C15.6583 10.3801 16.1822 11.3601 16.3944 12.427C16.6066 13.4939 16.4977 14.5998 16.0814 15.6048C15.6651 16.6097 14.9602 17.4687 14.0557 18.0731C13.1512 18.6774 12.0879 19 11.0001 19C9.54188 18.9983 8.14389 18.4183 7.1128 17.3873C6.08171 16.3562 5.50172 14.9582 5.50006 13.5ZM31.7676 25.8375C31.5454 25.9823 31.2749 26.033 31.0154 25.9784C30.7559 25.9238 30.5287 25.7683 30.3838 25.5462C29.4769 24.1489 28.2346 23.0008 26.7702 22.2067C25.3058 21.4126 23.6659 20.9978 22.0001 21C21.7348 21 21.4805 20.8946 21.293 20.7071C21.1054 20.5196 21.0001 20.2652 21.0001 20C21.0001 19.7348 21.1054 19.4804 21.293 19.2929C21.4805 19.1053 21.7348 19 22.0001 19C22.81 18.9992 23.6098 18.8196 24.3423 18.4739C25.0748 18.1282 25.7219 17.625 26.2373 17.0002C26.7528 16.3754 27.1239 15.6445 27.3242 14.8597C27.5244 14.0749 27.5488 13.2555 27.3957 12.4602C27.2426 11.6648 26.9157 10.9131 26.4383 10.2587C25.961 9.60437 25.345 9.0635 24.6344 8.67478C23.9239 8.28606 23.1362 8.05909 22.3277 8.01007C21.5192 7.96106 20.7099 8.09121 19.9576 8.39124C19.8349 8.44427 19.7028 8.47217 19.5692 8.4733C19.4356 8.47443 19.3031 8.44876 19.1795 8.39782C19.056 8.34687 18.9439 8.27168 18.8499 8.17668C18.7559 8.08168 18.6819 7.96881 18.6323 7.84473C18.5827 7.72065 18.5584 7.58788 18.5609 7.45426C18.5635 7.32065 18.5928 7.1889 18.6471 7.06681C18.7015 6.94471 18.7797 6.83474 18.8772 6.7434C18.9748 6.65205 19.0897 6.58119 19.2151 6.53499C20.9369 5.84831 22.852 5.82359 24.591 6.46562C26.33 7.10766 27.7696 8.37094 28.6321 10.0118C29.4946 11.6526 29.7189 13.5547 29.2617 15.3511C28.8045 17.1476 27.6982 18.7111 26.1563 19.74C28.5807 20.6335 30.6512 22.287 32.0588 24.4537C32.2037 24.6759 32.2543 24.9464 32.1997 25.2059C32.1451 25.4654 31.9897 25.6926 31.7676 25.8375Z"
                    fill="#54D2D1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_712_1195">
                    <rect
                      width={32}
                      height={32}
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
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
      </div>

      <div className="mt-[85px] gap-8 flex items-center ">
        <div className="px-6 py-[27px] rounded-[16px] border border-[#F2F2F2] w-[661px]">
          <div className="flex items-center gap-[10px]">
            <svg
              width={6}
              height={19}
              viewBox="0 0 6 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width={6} height={18} rx={3} fill="#D25454" />
            </svg>

            <p>Total Earnings</p>
          </div>

          <ChartComponent
            bgColor="#d2545433"
            borderColor="#D25454"
            label="Total Losses Per Month"
          />
        </div>

        <div className="border border-[#F2F2F2] rounded-[16px] p-[14.3px] w-[372px]">
          <div className="flex items-start justify-between">
            <h4 className="font-bricolage font-semibold">
              Soil analysis (per hectal)
            </h4>

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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Losses
