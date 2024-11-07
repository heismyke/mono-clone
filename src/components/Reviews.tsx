import BarimaPhoto from '../assets/Barima.png'
import EmmanuelPhoto from '../assets/Emmanuel.png'
import BarimaCompanyLogo from '../assets/companybarima.png'
import EmmanuelCompanyLogo from '../assets/companyemmanuel.png'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { FaArrowLeft } from 'react-icons/fa6'
import HeaderText from '../shared/HeaderText'
import HeaderParagraph from '../shared/HeaderParagraph'
type Review = {
  reviewer: string
  reviewerPhoto: string
  occupation: string
  review: string
  companyLogo: string
}

const Reviews = () => {
  const reviews: Review[] = [
    {
      reviewer: 'Barima Effah-Adjei',
      reviewerPhoto: BarimaPhoto,
      occupation: 'Co-founder, Float',
      companyLogo: BarimaCompanyLogo,
      review:
        "It's important to go with a data provider that inspires confidence in users to give consent to share their data; this is one of our favourite things about Mono.",
    },
    {
      reviewer: 'Emmanuel Ogunsola',
      reviewerPhoto: EmmanuelPhoto,
      occupation: 'Product Manager, Agella',
      companyLogo: EmmanuelCompanyLogo,
      review:
        "It's important to go with a data provider that inspires confidence in users to give consent to share their data; this is one of our favourite things about Mono.",
    },
    {
      reviewer: 'Emmanuel Ogunsola',
      reviewerPhoto: EmmanuelPhoto,
      occupation: 'Product Manager, Agella',
      companyLogo: EmmanuelCompanyLogo,
      review:
        "It's important to go with a data provider that inspires confidence in users to give consent to share their data; this is one of our favourite things about Mono.",
    },
    {
      reviewer: 'Emmanuel Ogunsola',
      reviewerPhoto: EmmanuelPhoto,
      occupation: 'Product Manager, Agella',
      companyLogo: EmmanuelCompanyLogo,
      review:
        "It's important to go with a data provider that inspires confidence in users to give consent to share their data; this is one of our favourite things about Mono.",
    },
  ]
  const [currentPage, setCurrentPage] = useState(0)
  const reviewsPerPage = 2

  const startIndex = currentPage * reviewsPerPage
  const endIndex = startIndex + reviewsPerPage
  const currentReviews = reviews.slice(startIndex, endIndex)
  //start index (currentPage * reviewsPerPage) = 0
  //end index (startIndex + reviewsPerPage) = 2
  //indicies = (0,2) = (1, 2)

  const handleNext = () => {
    if (endIndex < reviews.length) {
      setCurrentPage(currentPage + 1)
    }
  }
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }
  return (
    <div className="w-[90%] mx-auto md:w-[90%] xl:w-[80%]">
      <HeaderText>Why market leaders are choosing Mono</HeaderText>
      <HeaderParagraph>Here's what some of them are saying.</HeaderParagraph>
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2  lg:grid-cols-2  gap-10">
          {currentReviews.map((review, index) => {
            return (
              <div key={index} className="bg-[#F5F5F5]   rounded-xl p-10">
                <RiDoubleQuotesL size={50} />
                <p className="font-DMsans text-[23px] sm:text-[30px]  font-medium">
                  {review.review}
                </p>
                <div className="relative items-center gap-6 mt-16 flex">
                  <div className="w-[100px] h-[100px] relative">
                    <img src={review.reviewerPhoto} width={100} height={100} alt="mono thumbnail" />
                    <div>
                      <img
                        src={review.companyLogo}
                        className="absolute bottom-0 right-0"
                        width={40}
                        height={40}
                        alt="mono thumbnail"
                      />
                    </div>
                  </div>
                  <div className="leading-[25px]">
                    <h3 className="font-bold font-DMsans text-[16px]">{review.reviewer}</h3>
                    <p className="font-normal font-DMsans text-[14px]">{review.occupation}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="w-[90%] mx-auto my-8 flex justify-between">
          <div></div>
          <div className="flex  gap-3">
            <button onClick={handleNext} className="rounded-full text-white p-3 bg-[#D9D9D9]">
              <FaArrowLeft />
            </button>
            <button onClick={handlePrev} className="rounded-full text-white p-3 bg-[#0055BA]">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
