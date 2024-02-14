import { ChartComponent, WeatherChart } from "@/components/Chart"
import TotalIcon from "@/components/Icon/TotalIcon"
import { Button } from "@/components/ui/button"

const WeatherInfo = () => {
  return (
    <>
      <div className="mt-[48px] bg-[#F9F9F9] p-8">
        <div className="grid grid-cols-4 gap-6">
          <div className="p-5 bg-[#FFF] rounded-2xl">
            <div className="flex items-center justify-between">
              <p>27°C</p>
              <span>
                <svg
                  width={25}
                  height={24}
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.125 22.5C18.4009 22.5416 17.6796 22.3805 17.042 22.0349C16.4044 21.6893 15.8757 21.1728 15.5154 20.5434C15.155 19.914 14.9773 19.1966 15.002 18.4718C15.0268 17.7469 15.2531 17.0434 15.6555 16.44L18.3675 12.4035C18.451 12.2793 18.5638 12.1775 18.6959 12.1071C18.828 12.0368 18.9753 12 19.125 12C19.2747 12 19.422 12.0368 19.5541 12.1071C19.6862 12.1775 19.799 12.2793 19.8825 12.4035L22.545 16.3613C22.9854 17.0129 23.2301 17.777 23.25 18.5633C23.2233 19.6317 22.7741 20.646 22.0009 21.3839C21.2277 22.1218 20.1935 22.5232 19.125 22.5ZM19.125 13.965L16.923 17.2403C16.6638 17.6169 16.5174 18.0596 16.5007 18.5165C16.4841 18.9733 16.5979 19.4255 16.829 19.82C17.0601 20.2145 17.3987 20.535 17.8053 20.744C18.212 20.953 18.6697 21.0418 19.125 21C19.7957 21.0231 20.4484 20.7798 20.9402 20.3232C21.4321 19.8666 21.7232 19.2339 21.75 18.5633C21.7326 18.0604 21.5684 17.5736 21.2775 17.163L19.125 13.965ZM9 12V8.25H9.75C10.5453 8.24901 11.3078 7.93262 11.8702 7.37022C12.4326 6.80783 12.749 6.04535 12.75 5.25V3H10.5C9.73199 3.00126 8.99404 3.29864 8.43975 3.83025C8.05137 3.12508 7.48102 2.53694 6.7881 2.1271C6.09518 1.71726 5.30505 1.5007 4.5 1.5H2.25V3.75C2.25139 4.94305 2.72594 6.08683 3.56955 6.93045C4.41317 7.77406 5.55695 8.24861 6.75 8.25H7.5V12H2.25V13.5H12.75V12H9ZM10.5 4.5H11.25V5.25C11.2496 5.6477 11.0914 6.029 10.8102 6.31022C10.529 6.59144 10.1477 6.7496 9.75 6.75H9V6C9.0004 5.6023 9.15856 5.221 9.43978 4.93978C9.721 4.65856 10.1023 4.5004 10.5 4.5ZM6.75 6.75C5.95466 6.74901 5.19217 6.43262 4.62978 5.87022C4.06738 5.30783 3.75099 4.54535 3.75 3.75V3H4.5C5.29534 3.00099 6.05783 3.31738 6.62022 3.87978C7.18262 4.44217 7.49901 5.20466 7.5 6V6.75H6.75ZM2.25 15.75H12.75V17.25H2.25V15.75ZM2.25 19.5H12.75V21H2.25V19.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>

            <div className="mt-[9px]">
              <p className="text-[#575B65] font-medium font-bricolage">
                Soil Moisture
              </p>
              <p className="text-[10px] text-[#667085] font-normal">
                Soil Moisture Content
              </p>
            </div>
          </div>

          <div className="p-5 bg-[#FFF] rounded-2xl">
            <div className="flex items-center justify-between">
              <p>30°C</p>
              <span>
                <svg
                  width={25}
                  height={24}
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.375 5.25C19.8558 5.25 19.3483 5.40395 18.9166 5.69239C18.4849 5.98083 18.1485 6.3908 17.9498 6.87046C17.7511 7.35011 17.6992 7.87791 17.8004 8.38711C17.9017 8.89631 18.1517 9.36404 18.5188 9.73116C18.886 10.0983 19.3537 10.3483 19.8629 10.4496C20.3721 10.5508 20.8999 10.4989 21.3795 10.3002C21.8592 10.1015 22.2692 9.76505 22.5576 9.33337C22.846 8.90169 23 8.39418 23 7.875C23 7.17881 22.7234 6.51113 22.2312 6.01884C21.7389 5.52656 21.0712 5.25 20.375 5.25ZM20.375 9C20.1525 9 19.935 8.93402 19.75 8.8104C19.565 8.68679 19.4208 8.51109 19.3356 8.30552C19.2505 8.09995 19.2282 7.87375 19.2716 7.65552C19.315 7.43729 19.4222 7.23684 19.5795 7.0795C19.7368 6.92217 19.9373 6.81502 20.1555 6.77162C20.3738 6.72821 20.6 6.75049 20.8055 6.83564C21.0111 6.92078 21.1868 7.06498 21.3104 7.24998C21.434 7.43499 21.5 7.6525 21.5 7.875C21.5 8.17337 21.3815 8.45952 21.1705 8.6705C20.9595 8.88147 20.6734 9 20.375 9ZM14.75 13.695V3.75C14.75 2.95435 14.4339 2.19129 13.8713 1.62868C13.3087 1.06607 12.5456 0.75 11.75 0.75C10.9544 0.75 10.1913 1.06607 9.62868 1.62868C9.06607 2.19129 8.75 2.95435 8.75 3.75V13.695C7.83276 14.3337 7.14329 15.2484 6.78194 16.3061C6.42059 17.3638 6.40622 18.5092 6.74092 19.5756C7.07562 20.642 7.74193 21.5737 8.64285 22.2352C9.54378 22.8967 10.6323 23.2534 11.75 23.2534C12.8677 23.2534 13.9562 22.8967 14.8571 22.2352C15.7581 21.5737 16.4244 20.642 16.7591 19.5756C17.0938 18.5092 17.0794 17.3638 16.7181 16.3061C16.3567 15.2484 15.6672 14.3337 14.75 13.695ZM13.25 7.5H10.25V3.75C10.25 3.35218 10.408 2.97064 10.6893 2.68934C10.9706 2.40804 11.3522 2.25 11.75 2.25C12.1478 2.25 12.5294 2.40804 12.8107 2.68934C13.092 2.97064 13.25 3.35218 13.25 3.75V7.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>

            <div className="mt-[9px]">
              <p className="text-[#575B65] font-medium font-bricolage">
                Temperature
              </p>
              <p className="text-[10px] text-[#667085] font-normal">
                Air Temperature
              </p>
            </div>
          </div>

          <div className="p-5 bg-[#FFF] rounded-2xl">
            <div className="flex items-center justify-between">
              <p>80%</p>

              <span>
                <svg
                  width={25}
                  height={24}
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5625 4.47635C15.4045 3.13895 14.1011 1.93465 12.6766 0.885727C12.5505 0.797387 12.4002 0.75 12.2463 0.75C12.0923 0.75 11.942 0.797387 11.8159 0.885727C10.394 1.93509 9.09317 3.13937 7.9375 4.47635C5.36031 7.43604 4 10.556 4 13.4998C4 15.6878 4.86919 17.7862 6.41637 19.3334C7.96354 20.8806 10.062 21.7498 12.25 21.7498C14.438 21.7498 16.5365 20.8806 18.0836 19.3334C19.6308 17.7862 20.5 15.6878 20.5 13.4998C20.5 10.556 19.1397 7.43604 16.5625 4.47635ZM17.4859 14.3754C17.2915 15.4617 16.7688 16.4623 15.9884 17.2426C15.208 18.0228 14.2073 18.5452 13.1209 18.7395C13.0809 18.7459 13.0405 18.7493 13 18.7498C12.8119 18.7497 12.6306 18.679 12.4922 18.5516C12.3538 18.4241 12.2683 18.2494 12.2528 18.0619C12.2372 17.8744 12.2926 17.6879 12.4081 17.5394C12.5236 17.3909 12.6907 17.2912 12.8762 17.2601C14.4297 16.9985 15.7478 15.6804 16.0112 14.1242C16.0446 13.928 16.1545 13.7531 16.3167 13.6379C16.479 13.5228 16.6804 13.4768 16.8766 13.5101C17.0727 13.5434 17.2476 13.6533 17.3628 13.8156C17.478 13.9779 17.5239 14.1792 17.4906 14.3754H17.4859Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>

            <div className="mt-[9px]">
              <p className="text-[#575B65] font-medium font-bricolage">
                Humidity
              </p>
              <p className="text-[10px] text-[#667085] font-normal">
                Amount of water present on air
              </p>
            </div>
          </div>

          <div className="p-5 bg-[#FFF] rounded-2xl">
            <div className="flex items-center justify-between">
              <p>80%</p>

              <span>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.25 5.25V10.875C20.25 10.9745 20.2105 11.0698 20.1402 11.1402C20.0698 11.2105 19.9745 11.25 19.875 11.25H12.75V4.125C12.75 4.02554 12.7895 3.93016 12.8598 3.85984C12.9302 3.78951 13.0255 3.75 13.125 3.75H18.75C19.1478 3.75 19.5294 3.90804 19.8107 4.18934C20.092 4.47064 20.25 4.85218 20.25 5.25ZM10.875 3.75H5.25C4.85218 3.75 4.47064 3.90804 4.18934 4.18934C3.90804 4.47064 3.75 4.85218 3.75 5.25V10.875C3.75 10.9745 3.78951 11.0698 3.85984 11.1402C3.93016 11.2105 4.02554 11.25 4.125 11.25H11.25V4.125C11.25 4.02554 11.2105 3.93016 11.1402 3.85984C11.0698 3.78951 10.9745 3.75 10.875 3.75ZM19.875 12.75H12.75V19.875C12.75 19.9745 12.7895 20.0698 12.8598 20.1402C12.9302 20.2105 13.0255 20.25 13.125 20.25H18.75C19.1478 20.25 19.5294 20.092 19.8107 19.8107C20.092 19.5294 20.25 19.1478 20.25 18.75V13.125C20.25 13.0255 20.2105 12.9302 20.1402 12.8598C20.0698 12.7895 19.9745 12.75 19.875 12.75ZM3.75 13.125V18.75C3.75 19.1478 3.90804 19.5294 4.18934 19.8107C4.47064 20.092 4.85218 20.25 5.25 20.25H10.875C10.9745 20.25 11.0698 20.2105 11.1402 20.1402C11.2105 20.0698 11.25 19.9745 11.25 19.875V12.75H4.125C4.02554 12.75 3.93016 12.7895 3.85984 12.8598C3.78951 12.9302 3.75 13.0255 3.75 13.125Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>

            <div className="mt-[9px]">
              <p className="text-[#575B65] font-medium font-bricolage">
                pH Level
              </p>
              <p className="text-[10px] text-[#667085] font-normal">
                Water pH level
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-[15px]">
          <TotalIcon color="#54D2D1" />

          <p className="md:text-base text-sm">Soil Data </p>
        </div>

        <ChartComponent
          label="Soil Data "
          bgColor="#E3EFDE"
          borderColor="#0D934A"
        />

        <div className="grid grid-cols-6 gap-6 mt-[48px]">
          <div className="p-5 bg-[#FFF] rounded-2xl">
            <p className="text-[#667085] font-medium font-bricolage text-xs">
              Max temp
            </p>
            <p className="mt-1">27°C</p>
          </div>

          <div className="p-5 bg-[#FFF] rounded-2xl">
            <p className="text-[#667085] font-medium font-bricolage text-xs">
              Min temp
            </p>
            <p className="mt-1">15°C</p>
          </div>

          <div className="p-5 bg-[#FFF] rounded-2xl">
            <p className="text-[#667085] font-medium font-bricolage text-xs">
              Total Precip
            </p>
            <p className="mt-1">39mm</p>
          </div>

          <div className="p-5 bg-[#FFF] rounded-2xl">
            <p className="text-[#667085] font-medium font-bricolage text-xs">
              Max daily precip
            </p>
            <p className="mt-1">13mm</p>
          </div>

          <div className="p-5 bg-[#FFF] rounded-2xl">
            <p className="text-[#667085] font-medium font-bricolage text-sm">
              Rain days
            </p>
            <p className="mt-1">0.8°C</p>
          </div>

          <div className="p-5 bg-[#FFF] rounded-2xl">
            <p className="text-[#667085] font-medium font-bricolage text-xs">
              Max sustained wind
            </p>
            <p className="mt-1">61 kph</p>
          </div>
        </div>

        <div className="flex items-center gap-[10px] mt-8 p-4">
          <TotalIcon color="#54D2D1" />

          <p className="md:text-base text-sm">Weather Data Prediction</p>
        </div>

        <WeatherChart />
      </div>

      <div className="mt-12 font-medium font-bricolage">
        <h3>Weather Alert</h3>
      </div>

      <div className="rounded-2xl bg-[#F9F9F9] p-8 flex items-center justify-between mt-4">
        <p className="w-[344px]">
          Set up your weather alerts to begin receiving notifications on extreme
          forecasted weather.
        </p>

        <Button text="Add Weather Alert" className="rounded-[8px]" />
      </div>
    </>
  )
}

export default WeatherInfo
