import  Image  from "next/image";

interface TestimonialProps {
    quote: string;
    cite: string;
    country: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, cite, country }) => {

    return (
        <div className="testimonial">
            <div className='testimonial-content'>
                <div className="img-container open-position">
                    <Image
                        src="/images/home_page/quotation_open.svg"
                        alt="open quotation"
                        width={20}
                        height={20}
                    />
                </div>
                <p>&rdquo;{quote}&rdquo;</p>
                <div className="img-container closed-position">
                    <Image
                        src="/images/home_page/quotation_close.svg"
                        alt="closed quotation"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            <div className="testimonial-cite">
                <p>- {cite}, <span>{country}</span></p>
            </div>
        </div>
    )
}

export default Testimonial;
