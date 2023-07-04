import { testimonial1, testimonial2, testimonial3 } from "../../assets";
import "./testimonials.css";

const testimonials = () => {

  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>

        <div className="content-container">
            <div className="testimonial">
              <img src={testimonial1} alt="" />
              <div className="reviewer-details">
                <div className="name">Ajay Patel</div>
                <div className="company-name">Google</div>
                <div className="review">This is a great course. I got to learn a lot.</div>
              </div>
            </div>
            <div className="testimonial">
              <img src={testimonial2} alt="" />
              <div className="reviewer-details">
                <div className="name">Manish Pande</div>
                <div className="company-name">Amazone</div>
                <div className="review">I got to learn a lot about Music Production with this course. Thanks </div>
              </div>
            </div>
            <div className="testimonial">
              <img src={testimonial3} alt="" />
              <div className="reviewer-details">
                <div className="name">Honey Singh</div>
                <div className="company-name">Spotify</div>
                <div className="review">Awesome! Great job!!</div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default testimonials;