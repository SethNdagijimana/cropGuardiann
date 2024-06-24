"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface Feedback {
  id: string;
  email: string;
  feedback: string;
  createdAt: string;
}

const Testimonials = () => {
  const [userFeedback, setUserFeedback] = useState<Feedback[]>([]);
  const [displayedFeedback, setDisplayedFeedback] = useState<Feedback[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get<Feedback[]>('/api/user/feedback');
        console.log("Fetched feedback:", response.data);
        setUserFeedback(response.data);
        setDisplayedFeedback(response.data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, []);

  useEffect(() => {
    const rotateFeedback = () => {
      console.log("Rotating feedback");

      if (userFeedback.length <= 4) return;

      const nextIndex = (currentIndex + 1) % (userFeedback.length - 4);
      console.log("Current index:", currentIndex, "Next index:", nextIndex);

      const nextFeedback = [
        ...displayedFeedback.slice(0, 3),
        userFeedback[(4 + nextIndex) % userFeedback.length]
      ];

      console.log("Next feedback:", nextFeedback);

      setDisplayedFeedback(nextFeedback);
      setCurrentIndex(nextIndex);
    };

    const interval = setInterval(rotateFeedback, 30000);

    return () => clearInterval(interval);
  }, [currentIndex, userFeedback, displayedFeedback]);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:mt-[97px] mt-[80px] md:px-[81px] px-[48px] gap-[44px]">
      {displayedFeedback.map((item) => (
        <div key={item.id} className="border border-[#E1E1E1] rounded-2xl md:p-4 p-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-[11px]">
              <div className="md:p-6 p-4 rounded-[50px] overflow-hidden relative">
                <Image
                  src="/7.jpg"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  alt="user-image"
                  className="block transition-all duration-300 transform scale-100 hover:scale-110 ease-in-out"
                />
              </div>
              <div className="gap-2 flex items-center justify-center">
                <h4 className="md:text-[15px] text-xs font-medium text-primary">
                  {item.email}
                </h4>
                <span className="cursor-pointer">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_398_6053)">
                      <path
                        d="M6 10C6 8.1144 6 7.1716 6.58579 6.58579C7.1716 6 8.1144 6 10 6H10.6667C12.5523 6 13.4951 6 14.0809 6.58579C14.6667 7.1716 14.6667 8.1144 14.6667 10V10.6667C14.6667 12.5523 14.6667 13.4951 14.0809 14.0809C13.4951 14.6667 12.5523 14.6667 10.6667 14.6667H10C8.1144 14.6667 7.1716 14.6667 6.58579 14.0809C6 13.4951 6 12.5523 6 10.6667V10Z"
                        stroke="#141B34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3329 5.99992C11.3313 4.02853 11.3015 3.00739 10.7277 2.30821C10.6169 2.17318 10.4931 2.04937 10.3581 1.93856C9.62047 1.33325 8.52467 1.33325 6.33301 1.33325C4.14135 1.33325 3.04553 1.33325 2.30796 1.93856C2.17293 2.04937 2.04913 2.17318 1.93831 2.30821C1.33301 3.04577 1.33301 4.1416 1.33301 6.33325C1.33301 8.52492 1.33301 9.62072 1.93831 10.3583C2.04912 10.4933 2.17293 10.6171 2.30796 10.7279C3.00715 11.3018 4.02828 11.3316 5.99967 11.3332"
                        stroke="#141B34"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_398_6053">
                        <rect width={16} height={16} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
            <h4 className="text-[#475467] md:text-sm text-xs">
              {new Date(item.createdAt).toLocaleDateString()}
            </h4>
          </div>
          <p className="text-[#878787]">{item.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
