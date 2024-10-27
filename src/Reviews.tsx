import BarimaPhoto from './assets/Barima.png'
import EmmanuelPhoto from './assets/Emmanuel.png'
import BarimaCompanyLogo from './assets/companybarima.png'
import EmmanuelCompanyLogo from './assets/companyemmanuel.png'
import { RiDoubleQuotesL } from 'react-icons/ri'

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
  ]
  return (
    <div className="w-[90%] mx-auto ">
      <h1 className="text-[35px] font-DMsans font-semibold leading-[60px]">
        Why market leaders are choosing Mono
      </h1>
      <p className="font-medium text-[20px] pt-3">Here's what some of them are saying.</p>
      <div className="w-[90%] my-10 flex overflow-x-auto space-x-16 md:w-[40%] lg:w-[40%] xl:w-[60%]  snap-x snap-mandatory gap-10">
        {reviews.map((review, index) => (
          <div key={index} className="bg-[#F5F5F5] min-w-full  rounded-xl p-10">
            <RiDoubleQuotesL size={50} />
            <p className="font-DMsans text-[23px] sm:text-[30px]  font-medium">{review.review}</p>
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
        ))}
      </div>
    </div>
  )
}

export default Reviews
