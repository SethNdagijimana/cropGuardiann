import Link from "next/link"

const Supply = () => {
  return (
    <>
      <div className="p-6 rounded-2xl bg-[#F2F2F2] mt-[77px]">
        <div className="w-[484px] space-y-4">
          <h3 className="text-[24px]">Supply chain management </h3>
          <h4 className="leading-[24px]">
            involves the coordination and integration of various activities and
            processes to ensure the efficient flow of goods and services from
            the point of origin to the point of consumption
          </h4>
        </div>

        <div className="grid grid-cols-3 mt-6 gap-4">
          <div className="p-5 bg-[#FFF] border border-[#E5E5E5] rounded-2xl space-y-4">
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 18.9999C21 19.2652 20.8946 19.5195 20.7071 19.707C20.5196 19.8946 20.2652 19.9999 20 19.9999H12C11.7348 19.9999 11.4804 19.8946 11.2929 19.707C11.1054 19.5195 11 19.2652 11 18.9999C11 18.7347 11.1054 18.4804 11.2929 18.2928C11.4804 18.1053 11.7348 17.9999 12 17.9999H20C20.2652 17.9999 20.5196 18.1053 20.7071 18.2928C20.8946 18.4804 21 18.7347 21 18.9999ZM20 13.9999H12C11.7348 13.9999 11.4804 14.1053 11.2929 14.2928C11.1054 14.4804 11 14.7347 11 14.9999C11 15.2652 11.1054 15.5195 11.2929 15.707C11.4804 15.8946 11.7348 15.9999 12 15.9999H20C20.2652 15.9999 20.5196 15.8946 20.7071 15.707C20.8946 15.5195 21 15.2652 21 14.9999C21 14.7347 20.8946 14.4804 20.7071 14.2928C20.5196 14.1053 20.2652 13.9999 20 13.9999ZM27 5.99994V26.9999C27 27.5304 26.7893 28.0391 26.4142 28.4142C26.0391 28.7892 25.5304 28.9999 25 28.9999H7C6.46957 28.9999 5.96086 28.7892 5.58579 28.4142C5.21071 28.0391 5 27.5304 5 26.9999V5.99994C5 5.46951 5.21071 4.9608 5.58579 4.58573C5.96086 4.21065 6.46957 3.99994 7 3.99994H11.5325C12.0944 3.37085 12.7828 2.86751 13.5527 2.52289C14.3225 2.17826 15.1565 2.00012 16 2.00012C16.8435 2.00012 17.6775 2.17826 18.4473 2.52289C19.2172 2.86751 19.9056 3.37085 20.4675 3.99994H25C25.5304 3.99994 26.0391 4.21065 26.4142 4.58573C26.7893 4.9608 27 5.46951 27 5.99994ZM12 7.99994H20C20 6.93907 19.5786 5.92166 18.8284 5.17151C18.0783 4.42137 17.0609 3.99994 16 3.99994C14.9391 3.99994 13.9217 4.42137 13.1716 5.17151C12.4214 5.92166 12 6.93907 12 7.99994ZM25 5.99994H21.6562C21.8837 6.64221 22 7.31858 22 7.99994V8.99994C22 9.26516 21.8946 9.51951 21.7071 9.70705C21.5196 9.89458 21.2652 9.99994 21 9.99994H11C10.7348 9.99994 10.4804 9.89458 10.2929 9.70705C10.1054 9.51951 10 9.26516 10 8.99994V7.99994C10 7.31858 10.1163 6.64221 10.3438 5.99994H7V26.9999H25V5.99994Z"
                fill="black"
              />
            </svg>

            <h4 className="font-bold font-bricolage text-[#54D2D1]">
              Planning
            </h4>

            <h4 className="leading-[24px]">
              This phase involves strategic planning to meet the demands of
              customers and achieve organizational goals. It includes
              forecasting demand, setting objectives, and developing a plan to
              meet those objectives
            </h4>
          </div>

          <div className="p-5 bg-[#FFF] border border-[#E5E5E5] rounded-2xl space-y-4">
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 18.9999C21 19.2652 20.8946 19.5195 20.7071 19.707C20.5196 19.8946 20.2652 19.9999 20 19.9999H12C11.7348 19.9999 11.4804 19.8946 11.2929 19.707C11.1054 19.5195 11 19.2652 11 18.9999C11 18.7347 11.1054 18.4804 11.2929 18.2928C11.4804 18.1053 11.7348 17.9999 12 17.9999H20C20.2652 17.9999 20.5196 18.1053 20.7071 18.2928C20.8946 18.4804 21 18.7347 21 18.9999ZM20 13.9999H12C11.7348 13.9999 11.4804 14.1053 11.2929 14.2928C11.1054 14.4804 11 14.7347 11 14.9999C11 15.2652 11.1054 15.5195 11.2929 15.707C11.4804 15.8946 11.7348 15.9999 12 15.9999H20C20.2652 15.9999 20.5196 15.8946 20.7071 15.707C20.8946 15.5195 21 15.2652 21 14.9999C21 14.7347 20.8946 14.4804 20.7071 14.2928C20.5196 14.1053 20.2652 13.9999 20 13.9999ZM27 5.99994V26.9999C27 27.5304 26.7893 28.0391 26.4142 28.4142C26.0391 28.7892 25.5304 28.9999 25 28.9999H7C6.46957 28.9999 5.96086 28.7892 5.58579 28.4142C5.21071 28.0391 5 27.5304 5 26.9999V5.99994C5 5.46951 5.21071 4.9608 5.58579 4.58573C5.96086 4.21065 6.46957 3.99994 7 3.99994H11.5325C12.0944 3.37085 12.7828 2.86751 13.5527 2.52289C14.3225 2.17826 15.1565 2.00012 16 2.00012C16.8435 2.00012 17.6775 2.17826 18.4473 2.52289C19.2172 2.86751 19.9056 3.37085 20.4675 3.99994H25C25.5304 3.99994 26.0391 4.21065 26.4142 4.58573C26.7893 4.9608 27 5.46951 27 5.99994ZM12 7.99994H20C20 6.93907 19.5786 5.92166 18.8284 5.17151C18.0783 4.42137 17.0609 3.99994 16 3.99994C14.9391 3.99994 13.9217 4.42137 13.1716 5.17151C12.4214 5.92166 12 6.93907 12 7.99994ZM25 5.99994H21.6562C21.8837 6.64221 22 7.31858 22 7.99994V8.99994C22 9.26516 21.8946 9.51951 21.7071 9.70705C21.5196 9.89458 21.2652 9.99994 21 9.99994H11C10.7348 9.99994 10.4804 9.89458 10.2929 9.70705C10.1054 9.51951 10 9.26516 10 8.99994V7.99994C10 7.31858 10.1163 6.64221 10.3438 5.99994H7V26.9999H25V5.99994Z"
                fill="black"
              />
            </svg>

            <h4 className="font-bold font-bricolage text-[#54D2D1]">
              Sourcing
            </h4>

            <h4 className="leading-[24px]">
              The source phase is concerned with the procurement of the
              necessary materials, components, and services to produce the
              product or deliver the service. This involves selecting suppliers,
              negotiating contracts, and establishing relationships with
              vendors. Efficient sourcing helps in obtaining quality inputs at
              competitive prices
            </h4>
          </div>

          <div className="p-5 bg-[#FFF] border border-[#E5E5E5] rounded-2xl space-y-4">
            <svg
              width={33}
              height={32}
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3334 13V17C23.3334 17.2652 23.228 17.5196 23.0405 17.7071C22.8529 17.8946 22.5986 18 22.3334 18H12.7471L14.0409 19.2925C14.1338 19.3854 14.2075 19.4957 14.2578 19.6171C14.3081 19.7385 14.3339 19.8686 14.3339 20C14.3339 20.1314 14.3081 20.2615 14.2578 20.3829C14.2075 20.5043 14.1338 20.6146 14.0409 20.7075C13.948 20.8004 13.8377 20.8741 13.7163 20.9244C13.5949 20.9747 13.4648 21.0006 13.3334 21.0006C13.202 21.0006 13.0719 20.9747 12.9505 20.9244C12.8291 20.8741 12.7188 20.8004 12.6259 20.7075L9.62587 17.7075C9.5329 17.6146 9.45914 17.5043 9.40881 17.3829C9.35849 17.2615 9.33259 17.1314 9.33259 17C9.33259 16.8686 9.35849 16.7385 9.40881 16.6171C9.45914 16.4957 9.5329 16.3854 9.62587 16.2925L12.6259 13.2925C12.8135 13.1049 13.068 12.9994 13.3334 12.9994C13.5987 12.9994 13.8532 13.1049 14.0409 13.2925C14.2285 13.4801 14.3339 13.7346 14.3339 14C14.3339 14.2654 14.2285 14.5199 14.0409 14.7075L12.7471 16H21.3334V13C21.3334 12.7348 21.4387 12.4804 21.6263 12.2929C21.8138 12.1054 22.0682 12 22.3334 12C22.5986 12 22.8529 12.1054 23.0405 12.2929C23.228 12.4804 23.3334 12.7348 23.3334 13ZM29.3334 7V25C29.3334 25.5304 29.1227 26.0391 28.7476 26.4142C28.3725 26.7893 27.8638 27 27.3334 27H5.33337C4.80294 27 4.29423 26.7893 3.91916 26.4142C3.54409 26.0391 3.33337 25.5304 3.33337 25V7C3.33337 6.46957 3.54409 5.96086 3.91916 5.58579C4.29423 5.21071 4.80294 5 5.33337 5H27.3334C27.8638 5 28.3725 5.21071 28.7476 5.58579C29.1227 5.96086 29.3334 6.46957 29.3334 7ZM27.3334 25V7H5.33337V25H27.3334Z"
                fill="black"
              />
            </svg>

            <h4 className="font-bold font-bricolage text-[#54D2D1]">Returns</h4>

            <h4 className="leading-[24px]">
              In the return phase, organizations manage the reverse flow of
              goods and handle product returns, repairs, or recycling. This is
              an important aspect of supply chain management as it addresses
              customer returns, defective products, and excess inventory.
              Effective return management can minimize costs and enhance
              customer satisfaction.
            </h4>
          </div>

          <div className="p-5 bg-[#FFF] border border-[#E5E5E5] rounded-2xl space-y-4">
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 22C14.5 22.2652 14.3946 22.5196 14.2071 22.7071C14.0196 22.8946 13.7652 23 13.5 23H10C9.73478 23 9.48043 22.8946 9.29289 22.7071C9.10536 22.5196 9 22.2652 9 22C9 21.7348 9.10536 21.4804 9.29289 21.2929C9.48043 21.1054 9.73478 21 10 21H13.5C13.7652 21 14.0196 21.1054 14.2071 21.2929C14.3946 21.4804 14.5 21.7348 14.5 22ZM22 21H18.5C18.2348 21 17.9804 21.1054 17.7929 21.2929C17.6054 21.4804 17.5 21.7348 17.5 22C17.5 22.2652 17.6054 22.5196 17.7929 22.7071C17.9804 22.8946 18.2348 23 18.5 23H22C22.2652 23 22.5196 22.8946 22.7071 22.7071C22.8946 22.5196 23 22.2652 23 22C23 21.7348 22.8946 21.4804 22.7071 21.2929C22.5196 21.1054 22.2652 21 22 21ZM31 27C31 27.2652 30.8946 27.5196 30.7071 27.7071C30.5196 27.8946 30.2652 28 30 28H2C1.73478 28 1.48043 27.8946 1.29289 27.7071C1.10536 27.5196 1 27.2652 1 27C1 26.7348 1.10536 26.4804 1.29289 26.2929C1.48043 26.1054 1.73478 26 2 26H4V11C4 10.8143 4.05171 10.6322 4.14935 10.4743C4.24698 10.3163 4.38668 10.1886 4.55279 10.1056C4.71889 10.0225 4.90484 9.98736 5.08981 10.004C5.27477 10.0207 5.45143 10.0886 5.6 10.2L12 15V11C12 10.8143 12.0517 10.6322 12.1493 10.4743C12.247 10.3163 12.3867 10.1886 12.5528 10.1056C12.7189 10.0225 12.9048 9.98736 13.0898 10.004C13.2748 10.0207 13.4514 10.0886 13.6 10.2L18.4425 13.8313L19.8875 3.7175C19.9575 3.24169 20.1957 2.80675 20.559 2.49162C20.9223 2.17649 21.3866 2.00206 21.8675 2H24.1325C24.6134 2.00206 25.0777 2.17649 25.441 2.49162C25.8043 2.80675 26.0425 3.24169 26.1125 3.7175L27.9875 16.8587C27.9875 16.8587 27.9975 16.9563 27.9975 17V26H29.9975C30.129 25.9997 30.2593 26.0253 30.381 26.0754C30.5026 26.1255 30.6131 26.1991 30.7062 26.292C30.7993 26.3849 30.8732 26.4952 30.9236 26.6167C30.9741 26.7382 31 26.8685 31 27ZM20.2675 15.2L21.3337 16H25.8475L24.1325 4H21.8675L20.2675 15.2ZM6 26H26V18H21C20.7836 18 20.5731 17.9298 20.4 17.8L18.6 16.45L14 13V17C14 17.1857 13.9483 17.3678 13.8507 17.5257C13.753 17.6837 13.6133 17.8114 13.4472 17.8944C13.2811 17.9775 13.0952 18.0126 12.9102 17.996C12.7252 17.9793 12.5486 17.9114 12.4 17.8L6 13V26Z"
                fill="black"
              />
            </svg>

            <h4 className="font-bold font-bricolage text-[#54D2D1]">
              Production
            </h4>

            <h4 className="leading-[24px]">
              involves the actual production of goods or the delivery of
              services. It includes activities such as scheduling production,
              testing, packaging, and quality assurance. This phase focuses on
              optimizing efficiency and minimizing production costs.
            </h4>
          </div>

          <div className="p-5 bg-[#FFF] border border-[#E5E5E5] rounded-2xl space-y-4">
            <svg
              width={33}
              height={32}
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.6666 28H19.4841C20.5227 27.0727 21.5021 26.0811 22.4166 25.0312C25.8479 21.085 27.6666 16.925 27.6666 13C27.6666 10.0826 26.5077 7.28473 24.4448 5.22183C22.3819 3.15893 19.584 2 16.6666 2C13.7492 2 10.9514 3.15893 8.88845 5.22183C6.82555 7.28473 5.66663 10.0826 5.66663 13C5.66663 16.925 7.48038 21.085 10.9166 25.0312C11.8311 26.0811 12.8106 27.0727 13.8491 28H7.66663C7.40141 28 7.14706 28.1054 6.95952 28.2929C6.77198 28.4804 6.66663 28.7348 6.66663 29C6.66663 29.2652 6.77198 29.5196 6.95952 29.7071C7.14706 29.8946 7.40141 30 7.66663 30H25.6666C25.9318 30 26.1862 29.8946 26.3737 29.7071C26.5613 29.5196 26.6666 29.2652 26.6666 29C26.6666 28.7348 26.5613 28.4804 26.3737 28.2929C26.1862 28.1054 25.9318 28 25.6666 28ZM7.66663 13C7.66663 10.6131 8.61484 8.32387 10.3027 6.63604C11.9905 4.94821 14.2797 4 16.6666 4C19.0536 4 21.3428 4.94821 23.0306 6.63604C24.7184 8.32387 25.6666 10.6131 25.6666 13C25.6666 20.1537 18.7329 26.125 16.6666 27.75C14.6004 26.125 7.66663 20.1537 7.66663 13ZM21.6666 13C21.6666 12.0111 21.3734 11.0444 20.824 10.2221C20.2746 9.3999 19.4937 8.75904 18.58 8.3806C17.6664 8.00216 16.6611 7.90315 15.6912 8.09607C14.7213 8.289 13.8304 8.7652 13.1311 9.46447C12.4318 10.1637 11.9556 11.0546 11.7627 12.0245C11.5698 12.9945 11.6688 13.9998 12.0472 14.9134C12.4257 15.827 13.0665 16.6079 13.8888 17.1573C14.711 17.7068 15.6777 18 16.6666 18C17.9927 18 19.2645 17.4732 20.2022 16.5355C21.1398 15.5979 21.6666 14.3261 21.6666 13ZM13.6666 13C13.6666 12.4067 13.8426 11.8266 14.1722 11.3333C14.5019 10.8399 14.9704 10.4554 15.5186 10.2284C16.0668 10.0013 16.67 9.94189 17.2519 10.0576C17.8338 10.1734 18.3684 10.4591 18.7879 10.8787C19.2075 11.2982 19.4932 11.8328 19.609 12.4147C19.7247 12.9967 19.6653 13.5999 19.4383 14.1481C19.2112 14.6962 18.8267 15.1648 18.3333 15.4944C17.84 15.8241 17.26 16 16.6666 16C15.871 16 15.1079 15.6839 14.5453 15.1213C13.9827 14.5587 13.6666 13.7956 13.6666 13Z"
                fill="black"
              />
            </svg>

            <h4 className="font-bold font-bricolage text-[#54D2D1]">
              Distribution
            </h4>

            <h4 className="leading-[24px]">
              s all about getting the finished products or services to the end
              customers. This includes transportation, distribution, and
              logistics management. Efficient delivery ensures that products
              reach customers on time and in the desired condition. This phase
              also involves order fulfillment and managing transportation
              networks.
            </h4>
          </div>

          <div className="p-5 bg-[#FFF] border border-[#E5E5E5] rounded-2xl space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z" />
            </svg>

            <h4 className="font-bold font-bricolage text-[#54D2D1]">
              Contact Us
            </h4>

            <h4 className="leading-[24px]">
              Want to get Any supply chain please make a recommendation through
              Government Program if any problem please contact us{" "}
              <Link href="/contact-us" className="text-[#54D2D1]">
                Click Here to contact us
              </Link>
            </h4>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-[#F2F2F2] mt-[38px]">
        <div className="w-[484px] space-y-4">
          <h3 className="text-[24px]">
            How does modern technology help farmers in selling their harvest?
          </h3>
          <h4 className="leading-[24px]">
            Modern technology is revolutionizing the way farmers sell and
            purchase their harvest. Digital platforms, like websites, mobile
            apps, and social media spaces, enable farmers to increase their
            access to a broader pool of potential buyers. This allows them to
            reach a larger audience and sell their produce at a fair price
          </h4>
        </div>

        <div className="bg-white gap-[36px] grid grid-cols-2 mt-[38px] p-6">
          <div className="space-y-6">
            <h3 className="font-semibold font-bricolage">
              Local Farmer Market
            </h3>

            <h4 className="leading-[24px]">
              Farmers&apos; markets have been a staple in many communities for
              centuries. Their relevance stems from allowing farmers to bring
              their fresh produce directly to the consumer. Additionally,
              farmers&apos; markets were typically held in town squares or other
              public spaces,this allowed customers to interact directly with the
              farmers and purchase freshly picked produce.
            </h4>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold font-bricolage">Wholesaler Market</h3>

            <h4 className="leading-[24px]">
              Farmers also sold their produce at wholesale markets. There,
              buyers from grocery stores, restaurants, and other food businesses
              purchased large quantities of produce. This method allowed farmers
              to reach a wider audience but often required significant effort to
              transport their harvest to the market and compete with other
              farmers for sales
            </h4>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold font-bricolage">
              Direct to Consumer Sales
            </h3>

            <h4 className="leading-[24px]">
              Many farmers sold their produce directly to consumers through
              door-to-door sales or at farm stands. This allowed farmers to
              build relationships with their customers and provide them with
              high-quality, locally-grown produce. However, the distance between
              the farm and the consumer often limited these sales channels.
            </h4>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold font-bricolage">Middlemen</h3>

            <h4 className="leading-[24px]">
              In some cases, farmers sold their harvest through middlemen. The
              middlemen would purchase the product from the farmer and then
              resell it. Examples of suitable places for resale include but are
              not limited to grocery stores, restaurants, and other buyers. This
              method provided farmers with a way to reach a wider audience.
              Unfortunately, middlemen cause a significant reduction in prices
              for farm produce. The reason is that the middleman added their own
              profit margin
            </h4>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-[#F2F2F2] mt-[38px]">
        <div className="w-[484px] space-y-4">
          <h3 className="text-[24px]">
            The Problem Farmer face While selling their product
          </h3>
          <h4 className="leading-[24px]">
            Farmers face many challenges in selling their harvest, including
            transportation, lack of market information, and dependence on
            middlemen. These challenges can be significant barriers to success
            for farmers. However,
            <span className="text-primary font-bold">
              modern technology is helping to mitigate many of these issues
            </span>
            . Here are some of the major problems that farmers face while
            selling their produce
          </h4>
        </div>

        <div className="bg-white gap-[36px] grid grid-cols-2 mt-[38px] p-6">
          <div className="space-y-6">
            <h3 className="font-semibold font-bricolage">
              Transportation problem
            </h3>

            <h4 className="leading-[24px]">
              Farmers&apos; markets have been a staple in many communities for
              centuries. Their relevance stems from allowing farmers to bring
              their fresh produce directly to the consumer. Additionally,
              farmers&apos; markets were typically held in town squares or other
              public spaces,this allowed customers to interact directly with the
              farmers and purchase freshly picked produce.
            </h4>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold font-bricolage">
              Long chain of Middle men
            </h3>

            <h4 className="leading-[24px]">
              Many farmers are required to sell their products through a long
              chain of middlemen. This can add high costs and complexity to the
              selling process. As a result, farmers may experience lower prices
              and lack transparency in the supply chain
            </h4>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold font-bricolage">
              Lack of market information
            </h3>

            <h4 className="leading-[24px]">
              Farmers often lack access to accurate and up-to-date information
              about market prices and demand for their produce. This can make it
              difficult for them to decide when and where to sell their harvest
              and at what price.
            </h4>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold font-bricolage">
              Producer doesn’t determine the priced
            </h3>

            <h4 className="leading-[24px]">
              Farmers often have little control over the price of their produce.
              This is because middlemen, grocery stores, and other buyers often
              set prices. This can result in lower prices for farmers and a lack
              of incentives to invest in their operations
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Supply
