import Coralwilkins from '../../Assets/Images/testimonial/coralwilkins.jpg';
import Themis from '../../Assets/Images/sold/deepblueseaturtle.jpg';
import chantelle from '../../Assets/Images/testimonial/chantelle.jpg';
import melanie from '../../Assets/Images/testimonial/melanie.jpg';
import Stellamum from '../../Assets/Images/testimonial/stellamum.jpg';

export const Testimonial = () => {
  return (
    <div className="testimonials">
      <h1>Testimonials</h1>

      <div className="testimonial-row">
        <div className="column-left">
          <img
            src={chantelle}
            alt="Nature Beauty"
            height=""
            width=""
            loading="lazy"
          />
        </div>
        <div className="column-right">
          <p>
            "Such beautiful pieces of Australiana, Stella seems to capture such
            depth into the beautiful creatures and scenic wonders of nature!!"
            <br></br>
            <br></br>
            Absolutely thrilled to own her artwork and show it off! Every single
            piece is just one of a kind, and we are lucky to own a few! Thank
            you
            <br></br>
            <br></br>~ Chantelle ~
          </p>
        </div>
      </div>

      <div className="testimonial-row">
        <div className="column-left">
          <img
            src={Coralwilkins}
            alt="Aussie Lorikeet"
            height=""
            width=""
            loading="lazy"
          />
        </div>
        <div className="column-right">
          <p>
            "I absolutely love the depth and variety of this soulful artist's
            work. She captures and creates a connection with nature and people
            beautifully through her colourful, warm brush strokes. She extracts
            her subject's defining characteristics and transforms them into
            peaceful, realistic and stunning works of art."
            <br></br>
            <br></br>
            Thank you Stella Kypriotis for sharing with us your heartfelt
            creative talent.
            <br></br>
            <br></br>~ Coral Wilkins ~
          </p>
        </div>
      </div>

      <div className="testimonial-row">
        <div className="column-left">
          <img
            src={melanie}
            alt="Calming Florals"
            height=""
            width=""
            loading="lazy"
          />
        </div>
        <div className="column-right">
          <p>
            "I love the artwork that Stella has painted for me and would highly
            recommend her to anyone. My experience from asking her to create an
            original piece for me was exciting and special. The end result was
            personal and unique."
            <br></br>
            <br></br>Thank you Stella
            <br></br>
            <br></br>~ Melanie ~
          </p>
        </div>
      </div>
      <div className="testimonial-row">
        <div className="column-left">
          <img
            src={Stellamum}
            alt="Peaceful Journey"
            height=""
            width=""
            loading="lazy"
          />
        </div>
        <div className="column-right">
          <p>
            " This commission piece I asked Stella to create for me. I wanted
            her to paint something which had a special meaning behind it. We
            eventually came up with this idea of a travelling road leading me
            towards the light and guided by the dove."
            <br></br>
            <br></br>I absolutely love how this painting makes me feel, it
            brightens my living room and makes me feel at peace.
            <br></br>
            <br></br> Thank you Stella
            <br></br>
            <br></br> ~ Mum ~
          </p>
        </div>
      </div>
      <div className="testimonial-row">
        <div className="column-left">
          <img
            src={Themis}
            alt="Dee Blue Sea Turtle"
            height=""
            width=""
            loading="lazy"
          />
        </div>
        <div className="column-right">
          <p>
            "Watching Stella evolve as a person, as a woman and as an artist,
            through her artwork, has been an absolute delight. For me, it was
            not a matter of whether I would own one of Stella's paintings, there
            was never any doubt about that. The only question I had, was which
            one I would connect with, so I waited while, feeling my way to the
            one for me. As soon as I saw the old turtle painting, I knew! It
            jumped out of the computer screen and it seemed that it actually did
            speak to me, and I immediately connected!"
            <br></br>
            <br></br>
            "Stella's art has a kind of extra magic, a way of speaking out as
            though tellling a story, and I love that one can feel the painting
            as though it's breathing, filled with life. Love the art, love the
            artist."
            <br></br>
            <br></br>~ Themis Thomas ~
          </p>
        </div>
      </div>
    </div>
  );
};
