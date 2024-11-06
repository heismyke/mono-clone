import CTA_button from '../shared/CtaButton'

const Footer = () => {
  const products: string[] = [
    'Connect',
    'Statement Pages',
    'DirectPay',
    'DirectPay Pages',
    'Portal',
    'Transactions',
    'Income',
    'Information',
    'Data Sync',
  ]
  const resources: string[] = [
    'Developers',
    'Documentation',
    'Api Reference',
    'SDKs',
    'Demo',
    'Join Slack',
    'Consumers',
  ]
  const company: string[] = [
    'About Us',
    'Partner stories',
    'Blog',
    'Coverage',
    'Careers',
    'Contact',
  ]
  const legal: string[] = [
    'End-User Policy',
    'Privacy Policy',
    'Developer Policy',
    'Term of Use',
    'Cookies',
    'Security',
  ]

  return (
    <footer className="bg-black text-white flex items-center flex-col justify-center py-16 px-5 gap-[50px] md:gap-[70px] lg:gap-[90px] xl:gap-[150px]">
      <div className="flex flex-col items-start justify-center lg:items-center lg:justify-center  xl:items-center xl:justify-center">
        <h1 className="font-semibold text-[35px] md:text-[50px] font-DMsans lg:text-[60px]">
          Start building with Mono
        </h1>
        <p className="font-medium text-[18px] md:text-[22px] lg:text-[26px] leading-[35.8px] lg:leading-[55px] xl:text-center md:leading-[50px] md:max-w-[70%] lg:max-w-[70%] xl:max-w-[60%] py-7 font-DMsans">
          Access high-qualtity financial data and start processing payments directly from bank
          accounts in minutes
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <CTA_button
            text="Start now for free"
            iconColor="text-white"
            textColor="text-white"
            bgColor="bg-[#0055BA]"
          />
          <CTA_button
            text="Talk to Sales"
            iconColor="text-white"
            textColor="text-white"
            bgColor="bg-[#4F4F4F]"
          />
        </div>
      </div>
      <div className="border-y w-[95%] py-7 grid font-DMsans gap-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <p className="text-[16px] text-[#B5B5B5]">Products</p>
          <ul className="pt-3 flex flex-col gap-4">
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[16px] text-[#B5B5B5]">Resources</p>
          <ul className="pt-3 flex flex-col gap-4">
            {resources.map((resource, index) => (
              <li key={index}>{resource}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[16px] text-[#B5B5B5]">Company</p>
          <ul className="pt-3 flex flex-col gap-4">
            {company.map((comp, index) => (
              <li key={index}>{comp}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[16px] text-[#B5B5B5]">Legal</p>
          <ul className="pt-3 flex flex-col gap-4">
            {legal.map((legal, index) => (
              <li key={index}>{legal}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
